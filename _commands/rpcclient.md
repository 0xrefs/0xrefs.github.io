---
command: |
  rpcclient -U '' -N $IP
description: Connect to RPC with a null session (no credentials).
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Enumeration]
references:
  - https://www.samba.org/samba/docs/current/man-html/rpcclient.1.html
---
