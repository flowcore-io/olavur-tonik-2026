#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at $CHROME" >&2
  exit 1
fi

mkdir -p "$ROOT/dist"

"$CHROME" \
  --headless \
  --disable-gpu \
  --allow-file-access-from-files \
  --no-pdf-header-footer \
  --print-to-pdf="$ROOT/dist/same-ai-different-results-slides.pdf" \
  "file://$ROOT/index.html?print=slides"

"$CHROME" \
  --headless \
  --disable-gpu \
  --allow-file-access-from-files \
  --no-pdf-header-footer \
  --print-to-pdf="$ROOT/dist/same-ai-different-results-speaker-cards.pdf" \
  "file://$ROOT/cards.html?print=cards"

echo "$ROOT/dist/same-ai-different-results-slides.pdf"
echo "$ROOT/dist/same-ai-different-results-speaker-cards.pdf"
