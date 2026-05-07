# Same AI. Different Results.

Tonik 2026 keynote deck for Olavur Ellefsen.

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
- `dist/same-ai-different-results-speaker-cards.pdf`

`cards.html` is the printable card view: 20 one-minute A5 landscape speaker cards.
