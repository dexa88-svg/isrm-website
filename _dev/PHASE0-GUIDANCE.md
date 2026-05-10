# ISMR Phase 0 — Quick Guidance

## Task: "Pin the one-liner, target user, and three 'jobs to be done'"

This task is about nailing down **what** you're building and **why**. Don't skip it—everything downstream depends on clarity here.

---

## 1. The One-Liner

**What it is:** A single sentence (10–20 words max) that captures your product's core value.

**Examples:**
- Slack: "Where work happens"
- Figma: "The collaborative design tool for teams"
- Wikipedia: "The free encyclopedia"
- AirBnB: "Belong anywhere"

**For ISMR, start with:**
"[adjective] repair [medium] for [target user]"

**Candidates:**
- "The free, interactive repair wiki for DIY scooter owners"
- "Open-source repair guides for scooter owners, by scooter owners"
- "The crowdsourced repair manual for every scooter"
- "Repair anything: free guides, 3D models, AI-powered diagnosis"

**Your job:** Pick or refine one. It should be:
- ✓ Memorable (friend should be able to repeat it)
- ✓ Benefits-first (not feature-list)
- ✓ Owner-centric (not mechanic-centric)
- ✓ Realistic for MVP (don't mention 3D/AI yet if they're Phase 6+)

---

## 2. Target User Persona

**Who are you NOT building for?**
- Professional mechanics / repair shops
- Vehicle manufacturers
- Fleet operators
- Casual browser (someone who just reads, never does repair)

**Who ARE you building for?**
- **DIY scooter owner** — someone who owns or regularly uses a scooter and wants to fix/maintain it themselves

**Drill deeper. Answer these:**

### Who (Demographics + Context)
- Age range? (Likely 18–55, urban dweller)
- What vehicle? (Xiaomi M365? Ninebot Max? Vespa? Mix?)
- Experience level? (First-time fixer? Tinkerer?)
- Why do they own it? (Daily commute? Recreation? Both?)

**Example:**
> Alex, 28, owns a Xiaomi M365 e-scooter for city commuting. They're handy with electronics (hobbies: PC building, smartphones) but not a mechanic. When the brake pads wear out, they panic—don't know if they need parts, how much it costs, or if they can do it themselves.

### What They Want (Motivations)
- Save money (repair vs. replace)
- Keep their ride running (uptime matters for commuters)
- Learn how it works (pride in ownership, self-sufficiency)
- Find parts fast (know OEM #s, where to order)

### What Frustrates Them (Pain Points)
- Scattered info: part numbers on Reddit, YouTube teardowns, manufacturer PDFs in different languages
- Unclear procedures: videos with no subtitles, forum posts from 2015, conflicting advice
- No diagnosis help: "brakes feel weird" → spend 2 hours Googling what's wrong
- Fear of voiding warranty or breaking something
- Affiliate spam and low-quality YouTube "tutorials"

### What They Know (Skill Level)
- Comfortable with tools (wrench, screwdriver, Allen key)
- May understand mechanics basics or electronics basics (but not both)
- Can follow numbered steps with photos
- NOT a pro mechanic; needs hand-holding

**Your job:** Write 2–3 sentences for each dimension above.

---

## 3. Three "Jobs to Be Done"

**What's a "job to be done"?**
Not a feature. Not a button. A **job** = an outcome the user is trying to achieve.

Examples (not ISMR):
- Uber: "Get somewhere fast without planning logistics"
- Spotify: "Discover songs that match my mood right now"
- GitHub: "Share my code and track changes with collaborators"

**For ISMR, the roadmap suggests these three:**

### Job 1: Find the Right Part
**The user's goal:** "I know part XYZ is broken. I need to know the OEM number, where to order it, and how much it costs."

**How ISMR helps:**
- Link from symptom → subsystem → part with OEM numbers
- Show affiliate links to buy (Amazon, AliExpress, eBay)
- Show compatible aftermarket alternatives
- Show what tool/skill is needed to swap it

**Refine it:** What else should be included? Price range? Compatibility check? Warranty info?

---

### Job 2: Learn the Repair Procedure
**The user's goal:** "I have the part. Now I need step-by-step instructions to install/fix it without breaking anything."

**How ISMR helps:**
- Numbered procedure with photos/video for each step
- List of tools needed upfront
- Difficulty rating (1–5)
- Time estimate
- Safety warnings ("don't do X while plugged in")
- Common mistakes ("users often forget Y")

**Refine it:** Video embeds? Live support? Community comments? Difficulty levels?

---

### Job 3: Diagnose the Problem
**The user's goal:** "Something's wrong. I don't know what. Help me figure it out."

**How ISMR helps (now, MVP):**
- Searchable symptom list ("brakes feel mushy", "motor won't spin", "battery dies fast")
- Symptom → Procedure link
- FAQ for model-specific quirks

**How ISMR helps (later, Phase 7):**
- AI chat: "Describe your problem" → suggests procedures

**Refine it:** Do you start with symptom list or AI chat? How detailed should the symptom descriptions be?

---

## What You'll Get

Once you lock these down, you have:
1. **A one-liner for your README, landing page, pitch**
2. **A user persona to make design decisions against** ("Would Alex appreciate this?")
3. **Three core features/jobs** to prioritize in MVP

---

## How to Use the Worksheet

Open `phase0-definition.html` in your browser. Fill in each field:
- Answers auto-save to your browser
- Live previews show how your answers look
- Export as Markdown or JSON when done
- Share with early users to validate

---

## Next Steps (Phase 0, Task 2)

Once you lock this down, move to:
- **Brand name**: Pick from candidates (ScootWiki, FixMyScoot, etc.) or come up with your own
- **Register domain**: Free subdomain to start (.pages.dev, .vercel.app) or buy .com (~$10/yr)
- **MVP scope**: Lock what's in v0.1 vs. later phases

---

## Questions to Ask Yourself

1. **One-liner clarity:** Can you say it in 20 seconds without stumbling?
2. **User empathy:** If you met this persona at a coffee shop, could you describe their frustrations?
3. **Jobs concreteness:** For each job, can you describe a specific user story? (e.g., "Jamie needs to replace brake pads on their Xiaomi M365")
4. **Scope**: Are you trying to do too much in one sentence? (Hint: 3D and AI are Phase 6+, not MVP)

---

## Reference: Your Roadmap One-Liner

From your roadmap:
> "A free, wiki-driven, 3D-interactive repair guide for scooters (motor + electric, scalable to other vehicles) that pulls trusted info from forums, manufacturers, and YouTube — and uses AI to help owners diagnose and fix their ride."

This is great but **long**. It's a description, not a one-liner. For a one-liner, tighten it:
- **Version A (crowdsourced):** "The Wikipedia of scooter repair"
- **Version B (community):** "Repair guides for scooter owners, by scooter owners"
- **Version C (feature):** "Free scooter repair: find parts, learn procedures, diagnose problems"

Pick one, or create your own.

---

## Good Luck!

This is the foundation. Get it right, and Phase 1–3 build-out becomes straightforward. Nail this before writing a line of code.
