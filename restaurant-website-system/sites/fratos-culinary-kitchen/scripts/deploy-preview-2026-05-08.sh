#!/usr/bin/env bash
set -euo pipefail

# Frato's Culinary Kitchen guarded preview deploy script.
# Do not run without explicit founder/operator approval: this creates/updates a public Vercel preview artifact.

SITE_DIR="/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen"
cd "$SITE_DIR"

if [ ! -f package.json ]; then
  echo "Not in the Frato's site directory" >&2
  exit 1
fi

npm run build
npm run typecheck

# This site is not currently linked under .vercel/project.json.
# If prompted, select the intended Ethan account/project; do not create/link under the wrong org.
npx --yes vercel deploy
