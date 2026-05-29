/**
 * Pre-clears stale Vite lock files in dist/.prerender/.vite/ so Astro's build
 * doesn't hit EPERM when trying to unlink them from a prior session.
 *
 * Strategy: overwrite the file with valid empty content so Vite can
 * overwrite it in-place without needing to unlink it first.
 */
import { writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

function resetViteDir(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      resetViteDir(full);
    } else {
      try {
        // Write empty-but-valid content based on extension
        const content = entry.endsWith('.json') ? '{}' : '// reset\n';
        writeFileSync(full, content, 'utf8');
      } catch {
        // already writable or doesn't need resetting
      }
    }
  }
}

const viteCacheDir = path.join(projectRoot, 'dist', '.prerender', '.vite');
resetViteDir(viteCacheDir);
if (existsSync(viteCacheDir)) {
  console.log('✓ Reset stale dist/.prerender/.vite cache files');
} else {
  console.log('✓ No stale prerender cache to reset');
}

// --- Patch 1: vite-plugin-ssr-assets — swallow EPERM in deleteViteFolder ---
const ssrAssetsPath = path.resolve(projectRoot, 'node_modules/astro/dist/core/build/vite-plugin-ssr-assets.js');
const ssrAssets = readFileSync(ssrAssetsPath, 'utf8');
if (!ssrAssets.includes("if (e.code !== 'EPERM')")) {
  const patched = ssrAssets.replace(
    'await fs.promises.rm(viteFolder, { recursive: true, force: true });',
    "try { await fs.promises.rm(viteFolder, { recursive: true, force: true }); } catch(e) { if (e.code !== 'EPERM') throw e; }"
  );
  writeFileSync(ssrAssetsPath, patched, 'utf8');
  console.log('✓ Patched vite-plugin-ssr-assets: swallow EPERM in deleteViteFolder');
} else {
  console.log('✓ vite-plugin-ssr-assets already patched');
}

// --- Patch 2: static-build — swallow EPERM when removing prerenderOutputDir ---
const staticBuildPath2 = path.resolve(projectRoot, 'node_modules/astro/dist/core/build/static-build.js');
const sb2 = readFileSync(staticBuildPath2, 'utf8');
if (!sb2.includes("if (e.code !== 'EPERM')")) {
  const patched = sb2.replace(
    /await fs\.promises\.rm\(prerenderOutputDir, \{ recursive: true, force: true \}\);/g,
    "try { await fs.promises.rm(prerenderOutputDir, { recursive: true, force: true }); } catch(e) { if (e.code !== 'EPERM') throw e; }"
  );
  writeFileSync(staticBuildPath2, patched, 'utf8');
  console.log('✓ Patched static-build: swallow EPERM on prerenderOutputDir cleanup');
} else {
  console.log('✓ static-build already patched');
}

// Also patch astro's prerender utils back to default (in-project) if previously patched to /tmp
import { readFileSync } from 'fs';
const utilsPath = path.resolve(projectRoot, 'node_modules/astro/dist/prerender/utils.js');
const utils = readFileSync(utilsPath, 'utf8');
if (utils.includes('// PATCHED-PRERENDER-DIR')) {
  const restored = utils.replace(
    `function getPrerenderOutputDirectory(settings) {\n  // PATCHED-PRERENDER-DIR\n  return new URL('file:///tmp/isrm-prerender/');\n}`,
    'function getPrerenderOutputDirectory(settings) {\n  return new URL("./.prerender/", getServerOutputDirectory(settings));\n}'
  );
  writeFileSync(utilsPath, restored, 'utf8');
  console.log('✓ Restored prerender output dir to default (dist/.prerender/)');
}

// Patch ssrMoveAssets back to rename (undo cross-device patch) if present
const staticBuildPath = path.resolve(projectRoot, 'node_modules/astro/dist/core/build/static-build.js');
const sb = readFileSync(staticBuildPath, 'utf8');
if (sb.includes('// PATCHED-CROSS-DEVICE-RENAME')) {
  const restored = sb.replace(
    `// PATCHED-CROSS-DEVICE-RENAME\n        return fs.promises.copyFile(currentUrl, clientUrl).then(() => fs.promises.unlink(currentUrl));`,
    'return fs.promises.rename(currentUrl, clientUrl);'
  );
  writeFileSync(staticBuildPath, restored, 'utf8');
  console.log('✓ Restored ssrMoveAssets to default rename');
}
