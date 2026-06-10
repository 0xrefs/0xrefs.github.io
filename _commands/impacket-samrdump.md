---
command: |
  impacket-samrdump $DOMAIN/$USER:$PASSWORD@$IP
description: Enumerate users, groups, and shares via SAMR protocol.
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
