# ISRM Auto-Deploy Process — GitHub → Hetzner FTP

**Version:** 1.0  
**Date:** 2026-05-08  
**Status:** Active  
**Audience:** Project maintainers, developers

---

## Overview

This document describes the **automated deployment pipeline** that synchronizes code changes from GitHub to the live Hetzner hosting server via FTP.

**End result:** Every time you push code to GitHub's `main` branch, your website automatically updates within ~30 seconds. No manual uploads required.

---

## Architecture

```
┌─────────────────┐
│  Your Mac       │
│  (Local code)   │
└────────┬────────┘
         │ git push origin main
         ▼
┌─────────────────────────┐
│  GitHub Repository      │
│  dexa88-svg/isrm-website│
└────────┬────────────────┘
         │ triggers workflow
         ▼
┌──────────────────────────────┐
│  GitHub Actions (CI/CD)      │
│  .github/workflows/deploy.yml│
└────────┬─────────────────────┘
         │ FTP upload (public/ → public_html/)
         ▼
┌────────────────────────────────┐
│  Hetzner Managed Hosting       │
│  www703.your-server.de         │
│  ismr.online (live website)    │
└────────────────────────────────┘
```

---

## When the Workflow Triggers

**Trigger event:** Any push to the `main` branch

**Examples that trigger deployment:**
- `git push origin main` (after commit)
- Merging a pull request into `main`
- Direct push to `main` from GitHub web UI

**Examples that do NOT trigger:**
- Pushes to feature branches (e.g., `dev`, `feature/new-guide`)
- Commits to other branches
- Creating a tag or release

---

## What Gets Deployed

### ✅ Included in sync:

| Item | Reason |
|------|--------|
| `public/` folder contents | Main website files (HTML, CSS, JS, images) |
| All `.html`, `.css`, `.js` files | Website code |
| Images (`.png`, `.jpg`, `.svg`, etc.) | Media assets |
| New/updated files | Any changes since last deployment |

### ❌ Excluded from sync:

| Item | Reason |
|------|--------|
| `.git/` folder | Git internals — no need to deploy |
| `.github/` folder | GitHub Actions configuration — not for server |
| `_dev/` folder | Local development docs — not needed on live server |
| `wp-config.php` | Contains database password — never overwrite |
| `wp-content/uploads/` | Media uploaded via WordPress Admin — never delete |

---

## Day-to-Day Usage

### Normal workflow:

```bash
# 1. Work on your files locally
# 2. Test them locally (optional)
# 3. Stage and commit
git add .
git commit -m "Fix typo in Vespa maintenance guide"

# 4. Push (this triggers auto-deploy)
git push origin main

# 5. Check deployment status (optional)
# Go to: https://github.com/dexa88-svg/isrm-website/actions
```

**That's it.** No FTP client needed. No manual uploads. Changes are live in ~30 seconds.

---

## View Deployment Status

1. Go to `https://github.com/dexa88-svg/isrm-website`
2. Click **Actions** tab (top menu)
3. See list of workflow runs

### If you see ✅ (Green checkmark):
- Deployment succeeded
- Files are on the server
- Check your website to verify changes

### If you see ❌ (Red X):
1. Click the failed run
2. Expand the "Deploy to FTP" step
3. Read the error message

---

## GitHub Secrets

Your FTP credentials are stored securely in **GitHub Secrets**:
- Encrypted at rest
- Not visible in logs
- Only accessible to GitHub Actions
- Never stored in code

**Secrets used:**
- `FTP_SERVER` — `www703.your-server.de`
- `FTP_USERNAME` — your Hetzner FTP username
- `FTP_PASSWORD` — your Hetzner FTP password

---

## Performance

| Metric | Value |
|--------|-------|
| Deployment time | ~20–40 seconds |
| Maximum file size | Depends on Hetzner limits |
| Frequency | Unlimited (deploy as often as you push) |

---

## Security

✅ **What's safe:**
- FTP credentials encrypted in GitHub Secrets
- Credentials never appear in logs
- Private repository (only you can see code)

⚠️ **Best practices:**
- Change FTP password regularly
- Don't share GitHub login
- Monitor Actions logs for suspicious activity

---

## Related Files

- **Workflow:** `.github/workflows/deploy.yml`
- **Secrets:** https://github.com/dexa88-svg/isrm-website/settings/secrets/actions
- **Logs:** https://github.com/dexa88-svg/isrm-website/actions
