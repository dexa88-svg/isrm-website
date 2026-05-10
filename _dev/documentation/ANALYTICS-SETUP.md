# ISMR Google Analytics Setup Guide

**Date:** 2026-05-08  
**Purpose:** Track unique vs. returning visitors per page  
**Status:** Ready to implement

---

## Quick Start (5 minutes)

### Step 1: Create a Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account (dexa88@gmail.com)
3. Click **"Create"** → **"Property"**
4. Fill in:
   - **Property name:** `ISMR - Interactive Scooter Manuals for Repair`
   - **Website URL:** `https://ismr.online` (or current domain)
   - **Industry:** Automotive or DIY & Repair
5. Accept terms and click **"Create Property"**

### Step 2: Get Your Tracking ID

1. After creation, you'll see a **Measurement ID** (looks like: `G-XXXXXXXXXX`)
2. Copy this ID—you'll need it in the next step
3. Keep this page open

### Step 3: Add Tracking Script to All Pages

Add this script to the `<head>` section of every HTML page (after `<title>` and before `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_title': document.title,
    'page_path': window.location.pathname
  });
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID.**

### Step 4: Wait for Data to Arrive

- Give Google Analytics **24 hours** to start showing data
- Visit your site a few times to generate test data (data appears in real-time after ~30 minutes)

---

## Where to View Your Statistics

### Dashboard Overview

After 24 hours, go to **analytics.google.com** and:

1. **Select your property** from the left sidebar
2. Click **"Home"** to see:
   - Total users (past 28 days)
   - Sessions
   - Engagement rate
   - Top pages

### Unique vs. Returning Visitors

**To see unique vs. returning visitor breakdown:**

1. Go to **"Reports"** (left sidebar)
2. Click **"Audience"** → **"User Type"**
3. You'll see a breakdown of:
   - **Returning visitors:** Users who have visited before
   - **New visitors:** First-time visitors

### Per-Page Statistics

**To see which pages are visited most:**

1. Go to **"Reports"** → **"Pages and screens"**
2. For each page, you'll see:
   - **Users:** Unique visitor count
   - **Sessions:** Total visits (includes repeat visits)
   - **Engagement rate:** How engaged users are
   - **Bounce rate:** % of visitors who left without exploring

### Custom Report: Returning Visitor % by Page

**To create a report showing returning visitor % for each guide:**

1. Go to **"Reports"** → **"Exploration"**
2. Create a **"Blank exploration"**
3. Dimensions: `Page title` or `Page path`
4. Metrics: `New users`, `Returning users`
5. Filters: (optional) Filter to specific sections like `/repair-guides/`
6. Click **"Run"** to generate the report

---

## Implementation Steps for ISMR

### Step 1: Add Script to Index Page
```html
<!-- public/index.html -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISMR - Interactive Scooter Manuals for Repair</title>
  <link rel="stylesheet" href="styles.css">
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

### Step 2: Add Script to All Guide Pages

Add the same script to:
- `public/repair-guides/*.html` (all 12 guides)
- `public/diagnostics/*.html` (all troubleshooting guides)
- `public/models/*.html` (model pages)
- `public/videos/*.html` (video index)
- `public/parts/index.html`
- `public/community/index.html`

**Or:** Create a reusable component/template to inject it automatically.

### Step 3: Optional - Track Guide Interactions

Add event tracking when users interact with guides:

```html
<!-- Track when user clicks a guide -->
<script>
  function trackGuideView(guideName) {
    gtag('event', 'guide_viewed', {
      'guide_name': guideName,
      'guide_url': window.location.pathname
    });
  }
</script>
```

### Step 4: Verify Implementation

1. Open your site in a browser
2. Open **DevTools** (F12) → **Console** tab
3. Paste: `console.log(window.dataLayer)` and press Enter
4. You should see an array with your GA events

---

## What You'll Be Able to See

### Real-Time Reporting
- **Active users right now:** How many people are on your site
- **Recent activity:** Which pages they're viewing
- **Geographic data:** Where visitors are from

### Audience Analysis
```
Metric                    | What It Means
--------------------------|------------------------------------------
Unique visitors (Users)   | Distinct people who visited
Returning visitors        | People who came back (not first-time)
New visitors              | First-time visitors
Sessions                  | Total visits (same user can = multiple sessions)
Session duration          | Avg time spent on page
Bounce rate               | % who left without exploring further
Pages/screens per session | Avg pages viewed per visit
```

### Per-Page Breakdown
For each guide page, you'll see:
- How many unique visitors viewed it
- How many were returning visitors
- Which pages are most popular
- How long people spend reading
- Which pages have high bounce rates

---

## Advanced: Custom Events (Optional)

Track specific user actions:

```html
<!-- Track video plays -->
<script>
  document.querySelectorAll('iframe').forEach(video => {
    video.addEventListener('play', () => {
      gtag('event', 'video_played', {
        'video_title': video.title,
        'page': document.title
      });
    });
  });
</script>

<!-- Track downloads (if you add downloadable PDFs) -->
<script>
  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'file_downloaded', {
        'file_name': link.textContent,
        'file_type': link.href.split('.').pop()
      });
    });
  });
</script>
```

---

## Privacy & GDPR Considerations

### For EU Users

If your site targets EU visitors, you should:

1. **Add a cookie banner** (Google Analytics uses cookies)
2. **Update your Privacy Policy** to mention GA tracking
3. **Get user consent** before loading GA script

**Simple consent implementation:**
```html
<!-- Only load GA if user consents -->
<script>
  const hasConsent = localStorage.getItem('analytics_consent');
  if (hasConsent === 'true') {
    // Load GA script
  }
</script>
```

---

## Hetzner Notes

- ✅ Google Analytics works fine on Hetzner hosting
- ✅ No server-side changes needed
- ✅ Script loads from Google's CDN (external)
- ✅ No database required on your server
- ✅ Data stored in Google's cloud (not your server)

---

## Troubleshooting

### "I don't see any data after 24 hours"

**Check:**
1. Measurement ID is correct (copy-paste carefully)
2. Script is in the `<head>` section
3. Script is on **all** pages you want to track
4. You've visited the site since adding the script
5. Ad blockers might block GA—test in incognito mode

### "I see data but it's incomplete"

- Analytics shows data **from the moment you set it up**
- Historical data (before setup) is lost
- You'll have better data after a few weeks

### "How do I disconnect/remove Analytics?"

1. Just remove the script from pages
2. Or keep it but delete the property in Google Analytics
3. Data won't be collected anymore

---

## Sample Dashboard Setup

### Recommended Reports to Create

1. **Traffic Overview** (Home)
   - Users over time
   - Top pages
   - User acquisition

2. **Content Performance** (Pages & Screens)
   - Each guide's visitor count
   - Bounce rate per page
   - Time on page

3. **User Segmentation** (User Type)
   - New vs. returning split
   - Behavior differences
   - Retention rate

4. **Audience** (Demographics)
   - Countries/regions
   - Devices (mobile/desktop)
   - Browsers

---

## Next Steps

1. ✅ Create Google Analytics account (free)
2. ✅ Get Measurement ID
3. ✅ Add script to all pages
4. ✅ Wait 24 hours for data
5. ✅ View reports in analytics.google.com
6. ⚠️ (Optional) Add privacy policy & cookie banner for EU compliance
7. ⚠️ (Optional) Set up custom events for deeper tracking

---

## FAQ

**Q: Is Google Analytics free?**  
A: Yes, unlimited free tier for most sites.

**Q: Will GA slow down my site?**  
A: No, script loads asynchronously. Minimal impact.

**Q: Can I see individual user data?**  
A: GA shows aggregated data only (privacy-protecting).

**Q: How often is data updated?**  
A: Real-time data appears within ~30 minutes.

**Q: Can I export the data?**  
A: Yes, Google Analytics allows CSV/Excel exports.

**Q: What's the difference between "Users" and "Sessions"?**  
A: Users = unique people. Sessions = visits (same user can have multiple sessions).

---

## Support Resources

- [Google Analytics Help](https://support.google.com/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/10089681)
- [GA4 Reports Guide](https://support.google.com/analytics/answer/9212670)

---

**Created:** 2026-05-08  
**Next Review:** After 1 month of data collection
