#!/usr/bin/env bash
set -euo pipefail

if [[ -x /opt/homebrew/opt/ruby@3.1/bin/bundle ]]; then
  bundle_command=/opt/homebrew/opt/ruby@3.1/bin/bundle
elif command -v bundle >/dev/null 2>&1; then
  bundle_command=$(command -v bundle)
else
  echo "Ruby Bundler is not installed. Install Ruby first, then run this script again."
  exit 1
fi

"$bundle_command" config set --local path vendor/bundle
"$bundle_command" install
"$bundle_command" exec jekyll serve
