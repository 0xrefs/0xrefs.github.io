---
variants:
  - label: all-null
    command: |
      enum4linux -a $IP
  - label: all-creds
    command: |
      enum4linux -a -u $USER -p $PASSWORD $IP
description: Enumerate SMB shares, users, groups, and policy over null or authenticated sessions
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/enum4linux/
---
