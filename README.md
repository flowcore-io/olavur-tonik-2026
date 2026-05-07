# Same AI. Different Results.

Tonik 2026 keynote deck for Olavur Ellefsen, CEO and co-founder of Usable.

## Local Viewing

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Keyboard controls:

- Right arrow, space, PageDown: next slide
- Left arrow, PageUp: previous slide
- `N`: speaker-card notes for the active slide
- `F`: fullscreen

## Print / Backup Files

Generate the backup PDFs:

```bash
./scripts/export-pdf.sh
```

Outputs:

- `dist/same-ai-different-results-slides.pdf`
- `dist/same-ai-different-results-speaker-cards.pdf` — A4 portrait, two A5 cards per page for printing and cutting
- `dist/same-ai-different-results-speaker-cards-a5.pdf` — one A5 landscape card per page

`cards.html` is the speaker-card view. Use `cards.html?print=cards-2up` for the A4 two-up print layout, or `cards.html?print=cards` for one A5 card per page.
