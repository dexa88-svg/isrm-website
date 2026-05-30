import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'preserve',
  },
  vite: {
    cacheDir: '/tmp/vite-isrm-cache-6',    // Note: -2/-3/-4/-5 became stale/locked (owned by nobody); using -6
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
    optimizeDeps: { noDiscovery: true, include: [] },
  },
});
