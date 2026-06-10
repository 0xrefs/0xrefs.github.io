# 0xrefs

Interactive offensive-security command cheatsheet. Pick your context, fill in the
variables once, and copy ready-to-run commands, or load them straight into your
shell history.

Live site: https://0xrefs.github.io

## Install commands into your shell history

```sh
# OSCP/CPTS exam-prep set
curl -s https://0xrefs.github.io/install.sh | bash -s -- oscp

# Full CLI set (everything installable)
curl -s https://0xrefs.github.io/install.sh | bash -s -- cli
```

Then reload history: `fc -R` (zsh) or `history -r` (bash).

## Local development

```sh
bundle install
bundle exec jekyll serve
node --test test/      # run the unit tests
```

## How it works

Every command is one file in `_commands/`. The cheatsheet and the install
manifests (`/commands/oscp.txt`, `/commands/cli.txt`) are both generated from it.
See [CONTRIBUTING.md](CONTRIBUTING.md) to add a command.
