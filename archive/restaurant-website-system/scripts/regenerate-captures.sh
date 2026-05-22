#!/usr/bin/env bash
# Regenerate all capture artifacts for every template that has a source.md.
# Run after a fresh clone (or after `git clean`) to rebuild local screenshots,
# scroll frames, videos, and motion frames from source URLs.
#
# Source URLs are read from each template's source.md — look for "URL:" line.
#
# Usage:
#   ./scripts/regenerate-captures.sh                # all templates
#   ./scripts/regenerate-captures.sh qitchen-01     # one template
#
# Skips templates whose meta/*.json is already present unless --force is passed.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FORCE=0
FILTER=""
for arg in "$@"; do
  case "$arg" in
    --force) FORCE=1 ;;
    *) FILTER="$arg" ;;
  esac
done

# Walk both inputs/framer-templates/ and inputs/reference-sites/
for type_dir in framer-templates reference-sites; do
  base="$ROOT/inputs/$type_dir"
  [ -d "$base" ] || continue
  for slug_dir in "$base"/*/; do
    slug=$(basename "$slug_dir")
    [ -n "$FILTER" ] && [ "$FILTER" != "$slug" ] && continue
    src="$slug_dir/source.md"
    [ -f "$src" ] || { echo "skip $slug — no source.md"; continue; }
    if [ "$FORCE" -eq 0 ] && [ -d "$slug_dir/screenshots" ] && [ "$(ls -A "$slug_dir/screenshots" 2>/dev/null)" ]; then
      echo "skip $slug — already captured (use --force to regenerate)"
      continue
    fi

    # Extract URL from source.md
    url=$(grep -m1 -E '^\*?\*?- \*\*URL:\*\*' "$src" | sed -E 's/.*\*\*URL:\*\* *//' | tr -d ' ')
    if [ -z "$url" ]; then
      echo "skip $slug — could not parse URL from source.md"
      continue
    fi

    # Try to extract sub-page paths from "Sub-pages confirmed" section
    paths=$(awk '/^## Sub-pages confirmed/,/^## /' "$src" | grep -oE '`/[a-z0-9-]*`' | tr -d '`' | sort -u | tr '\n' ' ')
    [ -z "$paths" ] && paths="/"

    # Set RWS_TYPE so the script writes to the right folder
    export RWS_TYPE="$type_dir"
    echo "→ Capturing $slug from $url (paths: $paths)"
    node "$ROOT/scripts/shoot-template.mjs" "$slug" "$url" $paths || echo "  ⚠️  capture failed for $slug, continuing..."
  done
done

echo
echo "Done. To re-screenshot a template's recreation app, run its dev server then use scripts/shoot-template.mjs against http://localhost:PORT/"
