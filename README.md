# 0xrefs

Interactive offensive-security command cheatsheet. Pick the category, fill in the
variables once, and copy ready-to-run commands, or load them straight into your
shell history through curl.

<img width="1014" height="849" alt="0xrefs" src="https://github.com/user-attachments/assets/4d130457-2565-4182-9395-a25c34e6ab04" />


---

## Why I built this?

I built 0xrefs after running into the same issue over and over:

- My notes keep growing. Over time, I prefer to keep them focused on methodology and exploitation techniques rather than repeating the same commands dozens of times.
- I often knew the command I needed, but not the exact syntax, flags, or argument order I had used before.
- For many older tools and binaries, especially standalone .exe files, the built-in help is limited or nonexistent, making it difficult to remember the correct usage months later.

0xrefs gives US <3 a single place to store those commands as reusable templates: fill in the variables once, copy the command, and move on.

---

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
