---
command: |
  impacket-rpcdump $DOMAIN/$USER:$PASSWORD@$IP
description: Dump RPC endpoints from a remote Windows host.
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
