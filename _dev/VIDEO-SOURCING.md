# VIDEO-SOURCING.md — Finding & Embedding Repair Videos

**A practical guide for sourcing, vetting, and embedding videos in ISRM guides**

---

## Quick Reference

| Task | Time | Difficulty |
|------|------|------------|
| Find a video for a topic | 5–15 min | ⭐ Easy |
| Verify it's authoritative | 2–5 min | ⭐ Easy |
| Get the embed code | 1 min | ⭐ Easy |
| Create proper attribution | 2 min | ⭐ Easy |
| **Total per guide** | **10–25 min** | **⭐ Easy** |

---

## Step 1: Finding Videos

### Where to Look (Priority Order)

#### 1️⃣ **Official Manufacturer Channels** (Best)
High authority, accurate information, usually well-produced.

| Brand | Channel | Search Tips |
|-------|---------|------------|
| **Piaggio** | [Piaggio Official](https://www.youtube.com/@PiaggioOfficial) | "Vespa maintenance", "Primavera service" |
| **Yamaha** | [Yamaha Motor](https://www.youtube.com/@YamahaMotor) | "Scooter maintenance", "oil change" |
| **Honda** | [Honda Official](https://www.youtube.com/@HondaOfficial) | "PCX maintenance" |

**How to find:**
1. Google: `[Scooter Brand] YouTube official`
2. Look for verification badge (✓) on channel
3. Check subscriber count (10K+ is usually legitimate)

---

#### 2️⃣ **Professional Mechanics** (Excellent)
Certified repair shops with hands-on expertise.

| Channel | Focus | Typical Quality |
|---------|-------|-----------------|
| [ChrisFix](https://www.youtube.com/@ChrisFix) | Cars, some scooters | Excellent production |
| [FortNine](https://www.youtube.com/@FortNine) | Motorcycles, scooters | Professional, detailed |
| [Motorcycle MD](https://www.youtube.com/@MotorcycleMD) | Motorcycle/scooter repair | High quality, verified |
| [RJ the Bike Guy](https://www.youtube.com/@RJtheBikeGuy) | Motorcycle/scooter maint. | Practical, thorough |

**How to identify professionals:**
- Channel verification (✓)
- 10K+ subscribers
- Consistent upload schedule (weekly+)
- Clear audio & video (1080p+)
- Multiple videos on same topic (shows expertise)

---

#### 3️⃣ **Scooter-Specific Creators** (Very Good)
Enthusiasts & hobbyists with deep knowledge.

| Channel | Focus | Best For |
|---------|-------|----------|
| [49cc Scooter Hub](https://www.youtube.com/@49ccScooterHub) | GY6, Chinese scooters | GY6 specific guides |
| [Scooter Doctor](https://www.youtube.com/@ScooterDoctor) | General scooter repair | Troubleshooting |
| [Vespa & Lambretta Club](https://www.youtube.com/@VespaClub) | Vespa/Lambretta | Vespa repairs |
| [EBike Repair & Rides](https://www.youtube.com/@eBikeRepair) | Scooters, e-bikes | Electric scooters |

**How to find:**
1. Google: `[scooter model] YouTube repair`
2. Filter by upload date (prefer recent, within 3 years)
3. Check comments for viewer feedback

---

#### 4️⃣ **Forums & Community** (Good)
Experienced users sharing their knowledge.

- [49ccScoot Forums](https://49ccscoot.proboards.com/) — Active GY6 community
- [Vespa Forums](https://www.vespaforum.com/) — Vespa/Lambretta enthusiasts
- [Reddit r/scooters](https://www.reddit.com/r/scooters/) — User questions & guides
- [Various Facebook Groups](https://www.facebook.com/groups/gy6scooters/) — Model-specific communities

**Sourcing method:**
1. Search the forum/subreddit: `[topic] video`
2. Look for links in discussions
3. Check if video is embedded or linked
4. Note: May need to attribute the forum member who shared it

---

#### 5️⃣ **Manufacturer Manuals & Service Videos** (Excellent)
OEM service manuals sometimes include video links.

**Where to find:**
- Piaggio service manuals → Official PDF usually has QR codes to videos
- Yamaha Genuine Parts → Video guides on website
- OEM dealer sites → Sometimes have video tutorials

---

### Keyword Phrases for Better Searches

```
[Scooter Model] + [Repair Type]
- "GY6 carburetor adjustment"
- "Vespa Primavera oil change"
- "GY6 CVT belt replacement"
- "Vespa spark plug change"

[Scooter Type] + [Symptom]
- "GY6 won't start troubleshooting"
- "Vespa backfiring issue"
- "Scooter idle speed adjustment"

[Engine Code] + [Repair]
- "139QMB oil change"
- "152QMI carburetor cleaning"
- "157QMJ valve adjustment"
```

---

## Step 2: Vetting Videos (Quality Checklist)

Before adding a video to ISRM, verify:

### Authority
- [ ] Creator is a professional, verified channel, or experienced hobbyist?
- [ ] Channel has 5K+ subscribers (indicates credibility)?
- [ ] Video is recent (within last 3 years preferred)?
- [ ] Multiple similar videos from same creator (not a one-off)?

### Technical Quality
- [ ] Video resolution is 720p or higher?
- [ ] Audio is clear & easy to understand?
- [ ] You can see the hands/tools/parts clearly?
- [ ] No excessive background noise?

### Content Quality
- [ ] Information matches other authoritative sources?
- [ ] Steps are clear & in logical order?
- [ ] Safety warnings are included (if relevant)?
- [ ] Doesn't promote dangerous shortcuts?
- [ ] Matches the scooter model/engine type we're documenting?

### Licensing
- [ ] Video is CC-licensed OR creator allows educational use?
- [ ] Creator permits embedding (check video settings)?
- [ ] No copyright strikes on the video (check comments)?

---

## Step 3: Getting the Embed Code

### For YouTube Videos

**Method 1: Direct from YouTube (Easiest)**
1. Open the video in YouTube
2. Click **Share** (below video)
3. Click **Embed**
4. Copy the `<iframe>` code

**Note on Video IDs:**
Every YouTube video has a unique ID visible in the URL: `youtube.com/watch?v=**ABC123XYZ**`
The part after `v=` is your video ID.

**Result:**
```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/ABC123XYZ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>
```

**ISRM Modification (Privacy + Responsiveness):**
```html
<div class="video-container">
  <iframe 
    width="100%" 
    height="480" 
    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" 
    title="GY6 Carburetor Adjustment - Full Guide"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

**Key changes:**
- Change `youtube.com` → `youtube-nocookie.com` (privacy-friendly)
- Remove unnecessary attributes
- Set width to 100% (responsive)
- Keep height or use CSS for aspect ratio

---

### For Vimeo Videos

**Method 1: Direct from Vimeo**
1. Open the video
2. Click **Share** (top right)
3. Copy the **Embed** code

**ISRM Format:**
```html
<div class="video-container">
  <iframe 
    src="https://player.vimeo.com/video/123456789" 
    width="100%" 
    height="480" 
    title="Video Title"
    frameborder="0" 
    allow="autoplay; fullscreen" 
    allowfullscreen>
  </iframe>
</div>
```

---

### For Self-Hosted Videos (MP4)

If video is on your own server:
```html
<div class="video-container">
  <video 
    width="100%" 
    height="480" 
    controls
    title="Video Title">
    <source src="/videos/gy6-carburetor-adjustment.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
```

---

## Step 4: Creating Attribution

Every video must be credited. Use this template:

### Format A (Simple)
```html
<p class="video-source">
  <strong>Video:</strong> "[Exact Video Title]" by [Creator Name]
  <a href="https://youtube.com/watch?v=VIDEO_ID" target="_blank">↗ Watch on YouTube</a>
</p>
```

### Format B (Detailed)
```html
<p class="video-source">
  <strong>Video:</strong> "[Exact Video Title]" by [Creator Name] ([Upload Year])
  | Duration: [HH:MM] | Relevant section: [MM:SS–MM:SS]
  <a href="https://youtube.com/watch?v=VIDEO_ID" target="_blank">↗ View on YouTube</a>
</p>
```

### Examples

✅ **Good:**
```html
<strong>Video:</strong> "GY6 Carburetor Tuning Complete Guide" by TechMechanic
<a href="https://youtube.com/watch?v=abc123" target="_blank">↗ Watch on YouTube</a>
```

✅ **Better:**
```html
<strong>Video:</strong> "GY6 Carburetor Adjustment - Float Level & Idle Tuning" 
by GY6 Specialist (2024) | 12:45 min
<a href="https://youtube.com/watch?v=abc123" target="_blank">↗ View on YouTube</a>
```

---

## ⚠️ Important: Placeholder Video IDs vs. Real Video IDs

### What Are Placeholders?
In the example guide (`gy6-carburetor-adjustment-guide.html`), video sections contain:
```html
src="https://www.youtube-nocookie.com/embed/[INSERT_VIDEO_ID_HERE]"
href="https://youtube.com/watch?v=[INSERT_VIDEO_ID_HERE]"
```

**These are NOT working videos.** They're templates showing where real video IDs go.

### Why Placeholders?
- The guide structure is ready before actual videos are sourced
- Contributors can see exactly what to replace
- Easy to spot missing videos during review

### How to Replace Placeholders

**Before:**
```html
src="https://www.youtube-nocookie.com/embed/[INSERT_VIDEO_ID_HERE]"
```

**After** (with real YouTube video ID):
```html
src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
```

**Find your video ID:**
1. Go to the YouTube video
2. Look at the URL: `https://youtube.com/watch?v=dQw4w9WgXcQ`
3. Copy the part after `v=` → that's your video ID: `dQw4w9WgXcQ`
4. Replace `[INSERT_VIDEO_ID_HERE]` with your actual ID

### Checklist Before Publishing
- [ ] All `[INSERT_VIDEO_ID_HERE]` are replaced with real IDs
- [ ] All `[INSERT_VIDEO_TITLE_HERE]` are replaced with actual titles
- [ ] All `[INSERT_CREATOR_NAME_HERE]` are replaced with actual creator names
- [ ] Videos play when you click them
- [ ] Links work (no 404 errors)
- [ ] Test on desktop and mobile

---

## Step 5: Adding to Footer (Copyright Notice)

In the guide's `<footer>`, add the video sources:

```html
<footer>
  <p>
    <strong>Sources:</strong>
    <a href="[SOURCE_URL]" target="_blank">[Source Name]</a>,
    <a href="[SOURCE_URL]" target="_blank">[Source Name]</a>
  </p>
  <p>
    <strong>Videos:</strong>
    "GY6 Carburetor Tuning" by TechMechanic,
    "Float Level Adjustment" by ScooterDoctor
  </p>
  <p>
    <strong>License:</strong> Content is CC BY-SA 4.0. Videos retain their original licenses.
  </p>
</footer>
```

---

## Fair Use & Licensing

### Can We Use This Video?

| Scenario | ✅ OK? | Notes |
|----------|--------|-------|
| YouTube video (embed only) | ✅ Yes | Linking is always OK |
| CC-licensed video | ✅ Yes | Credit author, link to license |
| Professional channel (embed) | ✅ Yes | Respect ToS, don't modify |
| Download & re-upload | ❌ No | Copyright violation |
| Unlicensed video (embed) | ⚠️ Maybe | Depends on creator ToS |
| Copyrighted music in video | ✅ Yes | YouTube handles licensing |

### Best Practices

1. **Always embed, never download**
   - Use iframe (YouTube) or embed player (Vimeo)
   - Never re-upload to other platforms

2. **Always credit the creator**
   - Include name, channel, and link
   - Include in footer and near embed

3. **Use privacy-friendly embeds**
   - YouTube: Use `youtube-nocookie.com`
   - Vimeo: Use their standard player
   - Self-hosted: Use `<video>` tag with clear licensing

4. **Respect Terms of Service**
   - Check if creator allows embedding
   - Most YouTube videos allow embedding by default
   - Some creators have it disabled—don't use those

5. **Document licensing**
   - In guide footer, state video license (usually same as upload platform)
   - ISRM content is CC BY-SA 4.0, but linked videos may differ

---

## Common Video Licenses Explained

| License | Use ISRM? | Requirements |
|---------|-----------|--------------|
| **CC BY** (Attribution) | ✅ Yes | Credit author |
| **CC BY-SA** (ShareAlike) | ✅ Yes | Credit + same license |
| **CC BY-ND** (No Derivatives) | ✅ Yes | Can link/embed, not modify |
| **CC0** (Public Domain) | ✅ Yes | No credit required |
| **Standard YouTube** | ✅ Yes | Embed OK if creator allows |
| **Copyright (All Rights)** | ⚠️ Check | Ask creator or check ToS |

---

## Troubleshooting

### "Video says 'Not Available' or 'Age Restricted'"

This means:
- Video is deleted or private
- Video is age-restricted (18+) — can't embed in ISRM
- Video is blocked in your region

**Solution:**
- Find a different video that's public & not age-restricted
- Contact the creator for permission to link

### "Embed Code Doesn't Work on Mobile"

**Fix:** Use responsive CSS wrapper:
```html
<div class="video-container">
  <iframe src="..." width="100%" height="480"></iframe>
</div>
```

**CSS:**
```css
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### "Video Quality is Terrible"

**Minimum standards:**
- ❌ 480p or lower
- ⚠️ 720p (acceptable but not ideal)
- ✅ 1080p+ (preferred)
- ✅ 4K (excellent)

If only low-quality version exists:
1. Check if creator has higher-quality version
2. Look for alternative videos
3. If none exist, consider mentioning in guide: "Best available video is lower quality"

---

## Video Sourcing Workflow (For Contributors)

### You're Creating a Guide: Follow This

1. **Topic?** e.g., "GY6 Carburetor Adjustment"

2. **Search Priority Order:**
   - [ ] Official Piaggio/Yamaha channel
   - [ ] Professional mechanics (10K+ subs)
   - [ ] GY6-specific creators
   - [ ] Forum discussions (Reddit, 49ccScoot)

3. **Vet the Video:**
   - [ ] Matches scooter model/engine? (e.g., GY6 150cc, not 50cc)
   - [ ] Quality is 720p+?
   - [ ] Creator is reputable?
   - [ ] Information is accurate?

4. **Get Embed Code:**
   - [ ] Copy iframe code
   - [ ] Switch to `youtube-nocookie.com`
   - [ ] Set width to 100%

5. **Create Attribution:**
   - [ ] Full video title
   - [ ] Creator name
   - [ ] Link to video
   - [ ] Add to footer

6. **Test:**
   - [ ] Works on desktop
   - [ ] Works on mobile
   - [ ] Link works
   - [ ] Plays without errors

---

## Examples: Finding Videos for Common GY6 Repairs

### Example 1: GY6 Oil Change

**Search:** `GY6 oil change youtube`

**Top results typically:**
1. "GY6 50cc/150cc Oil Change - Full Guide" — GY6Specialist (YouTube)
2. "How to Change Oil on a GY6 Scooter" — ScooterMech
3. "Easy GY6 Oil & Filter Service" — 49cc Scooter Hub

**Vet:**
- ✅ Multiple versions available (creator has expertise)
- ✅ Recent uploads (2024)
- ✅ 1080p+ quality
- ✅ Information matches official manuals

**Use:** First or second result (most detailed)

---

### Example 2: Vespa Spark Plug Replacement

**Search:** `Vespa Primavera spark plug youtube`

**Top results typically:**
1. "Vespa Primavera 125 Spark Plug Service" — Vespa Club Official
2. "How to Change Spark Plugs on a Vespa" — Motorcycle MD
3. "Vespa Maintenance: Spark Plug Guide" — Vespa Forum video

**Vet:**
- ✅ Official channel preferred
- ✅ High production quality
- ✅ Clear step-by-step

**Use:** Vespa Club Official or Motorcycle MD

---

## Resources

- [YouTube Search Tips](https://support.google.com/youtube/answer/111997)
- [Creative Commons License Info](https://creativecommons.org/licenses/)
- [Embedding Best Practices](https://www.youtube.com/intl/en/howyoutubeworks/our-commitments/protecting-copyright/)

---

**Questions?** Reach out in the [discussions](https://github.com/ISRM/discussions) or email [dexa88@gmail.com](mailto:dexa88@gmail.com)

**Last Updated:** 2026-05-07  
**Maintained by:** ISRM Contributors
