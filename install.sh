#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${OXREFS_BASE_URL:-https://0xrefs.github.io}"
SET="${1:-}"
SHELL_KIND="${2:-}"

case "$SET" in
  oscp|cli) ;;
  *)
    echo "Usage: curl -s ${BASE_URL}/install.sh | bash -s -- <oscp|cli> [bash|zsh|fish]" >&2
    exit 1
    ;;
esac

if [ -z "$SHELL_KIND" ]; then
  if [ -n "${ZSH_VERSION:-}" ] || [ "$(basename "${SHELL:-}")" = "zsh" ]; then
    SHELL_KIND="zsh"
  elif [ "$(basename "${SHELL:-}")" = "fish" ]; then
    SHELL_KIND="fish"
  else
    SHELL_KIND="bash"
  fi
fi

case "$SHELL_KIND" in
  zsh)
    HISTORY_FILE="${HISTFILE:-$HOME/.zsh_history}"
    RELOAD_HINT="fc -R"
    ;;
  fish)
    HISTORY_FILE="${HOME}/.local/share/fish/fish_history"
    RELOAD_HINT="history merge"
    ;;
  bash)
    HISTORY_FILE="${HISTFILE:-$HOME/.bash_history}"
    RELOAD_HINT="history -r"
    ;;
  *)
    echo "Unknown shell '${SHELL_KIND}'. Use bash, zsh, or fish." >&2
    exit 1
    ;;
esac

mkdir -p "$(dirname "$HISTORY_FILE")"
touch "$HISTORY_FILE"
manifest="$(curl -fsSL "${BASE_URL}/commands/${SET}.txt")"

added=0
while IFS= read -r cmd; do
  [ -z "$cmd" ] && continue
  if [ "$SHELL_KIND" = "fish" ]; then
    if ! grep -qF -- "- cmd: ${cmd}" "$HISTORY_FILE"; then
      printf -- '- cmd: %s\n  when: %s\n' "$cmd" "$(date +%s)" >> "$HISTORY_FILE"
      added=$((added + 1))
    fi
  else
    if ! grep -qxF -- "$cmd" "$HISTORY_FILE"; then
      printf '%s\n' "$cmd" >> "$HISTORY_FILE"
      added=$((added + 1))
    fi
  fi
done <<< "$manifest"

echo "0xrefs: added ${added} command(s) to ${HISTORY_FILE} (set: ${SET}, shell: ${SHELL_KIND})."
echo "Reload history with: '${RELOAD_HINT}'."
