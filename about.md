---
layout: default
title: About 0xrefs
permalink: /about/
---
{% include page-title.html title="about" %}

0xrefs is an interactive, WADComs/GTFOBins-style cheat sheet of offensive-security
commands, developed by [strikoder](https://github.com/Strikoder).

If you are also an offsec cert taker, and/or a proud AI hater, then make sure to
star this repo :3

The idea is simple: stop re-googling the same `impacket`, `netexec`, or `hashcat`
invocation for the hundredth time. Fill in your variables once (`$IP`, `$USER`,
`$PASSWORD`, ...), copy the command, or load the whole curated set straight into
your shell history.

## Special thanks

This project stands on the shoulders of two excellent references, and borrows
heavily from their clean, no-nonsense template and spirit:

- [WADComs](https://wadcoms.github.io/), the Windows/AD offensive command cheat sheet.
- [GTFOBins](https://gtfobins.github.io/), Unix binaries for bypassing local restrictions.

Go star them (and me please :D).

## Contribute a command

Missing a command? [Contribute one on GitHub](https://github.com/0xrefs/0xrefs.github.io/tree/main/_commands).

Every command is a single Markdown file under
[`_commands/`](https://github.com/0xrefs/0xrefs.github.io/tree/main/_commands).
Add one by dropping in a file with this front matter (use `$UPPERCASE` tokens for
anything that should become a fill-in variable):

```yaml
---
command: |
  nxc smb $IP -u $USER -p $PASSWORD --shares
description: Enumerate SMB shares with credentials.
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://www.netexec.wiki/
---
```

Open a pull request and it shows up on the cheat sheet (and, if it is a Linux
command, in the install sets) automatically.

