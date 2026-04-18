#!/usr/bin/env bash
# Scaffold a new template audit from _TEMPLATE.md.
# Usage: ./scripts/new-audit.sh [template-slug]

set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 [template-slug]"
  echo "Example: $0 editorial-luxury-01"
  exit 1
fi

SLUG="$1"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATE="$ROOT/research/template-audits/_TEMPLATE.md"
TARGET="$ROOT/research/template-audits/$SLUG.md"

if [ ! -f "$TEMPLATE" ]; then
  echo "Error: audit template not found at $TEMPLATE"
  exit 1
fi

if [ -f "$TARGET" ]; then
  echo "Error: audit already exists at $TARGET"
  echo "Delete it first if you want to start over."
  exit 1
fi

cp "$TEMPLATE" "$TARGET"

# Pre-fill the slug field
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s|\`\[template-slug\]\`|\`$SLUG\`|g" "$TARGET"
  sed -i '' "s|templates/\[template-slug\]/|templates/$SLUG/|g" "$TARGET"
else
  sed -i "s|\`\[template-slug\]\`|\`$SLUG\`|g" "$TARGET"
  sed -i "s|templates/\[template-slug\]/|templates/$SLUG/|g" "$TARGET"
fi

echo "Created audit: $TARGET"
echo ""
echo "Next steps:"
echo "  1. Make sure source material is in inputs/framer-templates/$SLUG/ (or reference-sites/$SLUG/)"
echo "  2. Open $TARGET and fill every section"
echo "  3. Add a row to research/template-inventory.md"
echo "  4. When audit is locked, recreate as templates/$SLUG/"
