#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
version=$(python3 -c 'import json; print(json.load(open("extension/manifest.json"))["version"])')
mkdir -p dist
rm -f "dist/ctrl-fixer-teams-$version.zip"
(cd extension && zip -qrX "../dist/ctrl-fixer-teams-$version.zip" manifest.json content.js icons)
echo "dist/ctrl-fixer-teams-$version.zip"
