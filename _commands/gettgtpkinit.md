---
command: |
  uv run gettgtpkinit.py $DOMAIN/$DC -cert-pfx crt.pfx -pfx-pass $PASSWORD out.ccache
description: Request a TGT using a PFX certificate via PKINIT.
os: [Linux]
category: [oscp, cli]
have: [cert]
service: [Kerberos]
phase: [Exploitation]
references:
  - https://github.com/dirkjanm/PKINITtools
---
