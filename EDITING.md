# Customer Editing Guide — Sachi & Sherin Wedding Invitation

This invitation template features a serene sage, gold, and parchment Indian wedding aesthetic, featuring the couple's genuine photo, an opening monogram arch gate, live countdown timer to the wedding kickoff, 3-day multi-event celebration itinerary, interactive RSVP form with Google Forms integration, venue location map with directions, three-chapter love story timeline ("Finding Our Way Home..."), moments photo gallery, and Vedic blessings.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Names (`"Sachi"`, `"Sherin"`)
- `brideShort` & `groomShort`: Short display names
- `hashtag`: Wedding hashtag (`"#SachiWedsSherin"`)

### Invitation Line
Edit `invite` in `editable/wedding-data.js`:
- `kicker`: Eyebrow line (`"Together with their families"`)
- `line`: Invitation statement (`"cordially invite you to their celebrations"`)

### Wedding Dates & Multi-Day Itinerary
Edit `event` and `events` array in `editable/wedding-data.js`:
- `event.startsAt`: ISO timestamp (`"2027-01-31T12:00:00+05:30"`). Drives the live countdown timer.
- `events`: Array of daily ceremonies:
  - `day`: E.g. `"Day 1"`, `"Day 2"`, `"Day 3"`
  - `dateLabel`: Formatted date string (e.g. `"31 . 01 . 2027"`)
  - `dayLabel`: Day of week (e.g. `"Sunday"`)
  - `title`: Function title (e.g. `"Haldi Ceremony"`, `"Grah Shanti & Sangeet"`, `"The Wedding Day"`)
  - `schedule`: List of events with `time` and `title` (e.g. Haldi at 12pm, Lunch to follow, Garba & Sangeet 6pm, Baarat 4pm, Wedding 7pm)
  - `dressCode`: Dress code recommendation per ceremony
  - `note`: Hospitality note

### RSVP Form Integration
Edit `rsvp` in `editable/wedding-data.js`:
- `url`: Direct link to your Google Form (e.g. `"https://forms.google.com"` or `"https://forms.gle/..."`)
- `title`, `deadline`, `text`, `buttonText`: Customizable text

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (`"Jalsa"`)
- `address`: Full street address (`"Songadh - Surat, Tajpor Khurd, Gujarat 394620"`)
- `mapsQuery` & `url`: Google Maps link (`https://maps.app.goo.gl/MDzrWzL7FKH2hgx27?g_st=com.google.maps.preview.copy`)

### Love Story Chapters ("Finding Our Way Home...")
Edit `story` array in `editable/wedding-data.js`:
- Milestones with `year` (or Chapter), `title`, `text`, and `image`

### Media & Artwork
Replace files directly in `editable/assets/` or update paths in `images`:
- Couple Photo & Hero Arch: `couple.jpg`, `hero-arch.jpg`
- Story & Moments Crops: `story-1.jpg`, `story-2.jpg`, `story-3.jpg`
- Venue Map Art: `map-preview.jpg`
- Decorative Gate & Petals: `gate-panel.jpg`, `lotus.png`, `footer-floral.jpg`

---

## Validation
Validate data file changes with:
```bash
node --check editable/wedding-data.js
```
