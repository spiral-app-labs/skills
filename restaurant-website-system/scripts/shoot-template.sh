#!/usr/bin/env bash
# Wrapper that ensures playwright is available, then runs the deep-capture script.
# Usage:
#   ./shoot-template.sh <slug> <base-url> [path1 path2 ...]
# Example:
#   ./shoot-template.sh qitchen-01 https://qitchen-template.framer.website / /menu /about /reservation

set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: $0 <slug> <base-url> [path1 path2 ...]"
  echo "Example: $0 qitchen-01 https://qitchen-template.framer.website / /menu /about /reservation"
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPT="$ROOT/scripts/shoot-template.mjs"

# Ensure playwright is installed (in /tmp to keep this skill clean)
WORK=/tmp/rws-playwright
mkdir -p "$WORK"
cd "$WORK"
if [ ! -d node_modules/playwright ]; then
  echo "Installing playwright..."
  npm init -y >/dev/null 2>&1
  npm install playwright --silent
  npx playwright install chromium
fi

cd "$ROOT"
node --experimental-vm-modules \
  -e "process.chdir('$WORK'); require('module').createRequire('$WORK/')('$SCRIPT')" \
  2>/dev/null || \
NODE_PATH="$WORK/node_modules" node "$SCRIPT" "$@"
