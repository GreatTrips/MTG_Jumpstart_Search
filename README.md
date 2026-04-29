# 🃏 Jumpstart Deck Browser

A personal single-file browser for all Magic: The Gathering Jumpstart themes — searchable, filterable, and collection-tracked across devices via GitHub.

**Live site:** https://greattrips.github.io/MTG_Jumpstart_Search/

---

## Features

### Browse & Search
- **11 Jumpstart releases** — JMP (2020), Historic Horizons, JMP 2022, Foundations Jumpstart, Avatar: TLA, Marvel Super Heroes, and all set tie-in boosters (Dominaria United, Phyrexia, March of the Machine, Lord of the Rings, Duskmourn)
- **Filter by release tab** — click any edition across the top nav; tie-in sets grouped under a dropdown
- **Filter by color** — White, Blue, Black, Red, Green, Multi
- **Card-name search** — type a partial card name and matching themes are returned with a "Contains: [Card Name]" note
- **Deck name search** — partial match against theme name and headliner

### My Collection
- Mark individual variants as owned; track duplicates with Qty ± buttons
- **My Collection view** (● My Collection button) — filtered to your owned variants only
- **📊 Summary tab** — per-release color breakdown showing unique copies, duplicates, and totals
- Card match hints carry through into My Collection view when searching

### Sync Across Devices
Collection data is stored in a separate `collection.json` file on GitHub, completely independent of `index.html`. This means:
- Updating the app (new deck data, bug fixes) never overwrites your collection
- Phone and laptop stay in sync via push/pull

**Laptop → Phone:**
1. Mark decks on laptop
2. 💾 Save ▾ → **⬆ Push collection.json to GitHub**
3. Phone refreshes page → collection auto-loads within ~1 second

**Phone → Laptop (or vice versa):**
1. 💾 Save ▾ → **🔄 Force resync from website**

**After uploading a new index.html:**
- Your `collection.json` is untouched — nothing to re-enter

### Edit Mode
- Click **✏ Edit** → enter password `jumpstart`
- Mark variants owned, adjust quantities, edit deck metadata, import card lists from MTGJSON
- Click **🔓 EDIT MODE** badge or **✏ Edit** again to exit

---

## Setup (First Time)

### 1. Fork / clone the repo
Push `index.html` to the `main` branch of your GitHub Pages repo.

### 2. Create a GitHub fine-grained token
1. github.com → profile photo → **Settings**
2. Scroll to **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
3. **Generate new token**
   - Name: anything (e.g. `MTG Jumpstart`)
   - Expiration: your choice
   - Repository access: only `MTG_Jumpstart_Search`
   - Permissions → Repository permissions → **Contents: Read and write**
4. Copy the token (starts with `github_pat_…`) — shown once only

### 3. Save credentials in the app
💾 Save ▾ → **⚙ GitHub Settings…** → enter:
- **Owner:** your GitHub username
- **Repo:** `MTG_Jumpstart_Search`
- **Token:** `github_pat_…`

Click **Save Settings**. Credentials are stored in browser localStorage only — never transmitted except when you explicitly push.

---

## Sync Architecture

```
index.html          ← app code + all deck data (upload to update the app)
collection.json     ← your owned variants only (~2KB, push/pull separately)
```

All reads/writes to `collection.json` go through the **GitHub API** (`api.github.com/repos/…/contents/collection.json`) using your stored Bearer token. This bypasses GitHub Pages' CDN cache so phones see changes immediately.

---

## File Structure

```
index.html        Single-file app (HTML + CSS + JS + all deck data)
collection.json   Auto-created on first push; holds owned variants
README.md         This file
```

---

## Data Sources

Deck lists sourced from [taw/magic-preconstructed-decks-data](https://github.com/taw/magic-preconstructed-decks-data), card data from [MTGJSON](https://mtgjson.com), card imagery from [Scryfall](https://scryfall.com). Magic: The Gathering and all card names © Wizards of the Coast.

---

## Tips

| Action | How |
|---|---|
| Reset all filters | Click the **Jumpstart Deck Browser** logo |
| Exit edit mode | Click the **🔓 EDIT MODE** badge in the header |
| Clear search | Click **✕** in the search box, or the banner below the search |
| See card list for a variant | Click a deck tile → select variant → card list appears on the right |
| Import card lists in bulk | Edit mode → ⟳ Wipe & Rebuild from Source |
| See full sync help | Click **?** in the header |
