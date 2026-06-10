---
command: |
  impacket-lookupsid $DOMAIN/$USER:$PASSWORD@$IP
description: Brute-force domain SIDs to enumerate users and groups (SID walker).
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
