# Jumpstart Deck Browser

A static site for browsing Magic: The Gathering Jumpstart deck lists, filterable by edition and color.

**Live site:** https://yourusername.github.io/jumpstart-browser

## Features

- Browse decks from **Jumpstart (2020)**, **Jumpstart 2022**, and **Historic Horizons**
- Filter by **color identity** (W/U/B/R/G/Multi)
- Filter by **edition** using the tab bar
- **Search** by deck name or headliner card (press `/` to focus the search box)
- Deck detail view shows the **full card list** and **card images** fetched live from Scryfall
- Click a card image to open it on Scryfall in a new tab

## GitHub Pages Setup

1. Fork or clone this repository
2. Go to **Settings → Pages** in your GitHub repo
3. Set source to `Deploy from a branch` → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name`

That's it — no build step, no dependencies.

## Adding or Correcting Card Lists

All deck data lives in `data.js`. Each deck looks like this:

```js
{
  id: 'jmp-elves',
  name: 'Elves',
  colors: ['G'],
  headliner: 'Allosaurus Shepherd',
  variants: [
    {
      label: 'Allosaurus',
      cards: [
        { name: 'Forest', qty: 9, basic: true },
        { name: 'Allosaurus Shepherd', qty: 1 },
        { name: 'Elvish Archdruid', qty: 2 },
        { name: 'Llanowar Elves', qty: 4 },
        // ...
      ]
    },
    {
      label: 'Variant 2 Name',
      cards: [ /* second variant's card list */ ]
    }
  ]
}
```

**Rules:**
- Each Jumpstart half-deck is **20 cards** (typically 8–9 basic lands + 11–12 spells)
- Basic lands must have `basic: true` so they're styled separately and use fallback images
- Card names must match **Scryfall's exact card name** for images to load
- For double-faced cards, use the full name: `"Emeria's Call // Emeria, Shattered Skyclave"`
- Multiple variants for the same theme go in the `variants` array

### Where to find accurate card lists

- **MTGJSON**: https://mtgjson.com/sets/ — look up `JMP`, `J22`, `J21`
- **Scryfall**: https://scryfall.com/sets/jmp — search `set:jmp` to see all cards
- **MTG Wiki**: https://mtg.fandom.com/wiki/Jumpstart

### Contributing

Pull requests are welcome! If you add or correct a card list, please verify the 20-card count and that card names match Scryfall exactly.

## Data Status

| Edition | Themes | Card Lists |
|---------|--------|------------|
| Jumpstart 2020 (JMP) | 36 | ~14 complete |
| Jumpstart 2022 (J22) | 22 | 0 (names/colors only) |
| Historic Horizons (J21) | 20 | 0 (names/colors only) |

Decks without card lists show a "No list" badge and a link to contribute.

## License

MIT — do whatever you want with this.

Card images are provided by [Scryfall](https://scryfall.com) via their public API. Magic: The Gathering is © Wizards of the Coast.
