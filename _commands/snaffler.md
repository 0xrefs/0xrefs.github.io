---
command: |
  Snaffler.exe -s -d $DOMAIN -o snaffler.log -v data
description: Search accessible SMB shares across the domain for interesting files and credentials.
os: [Windows]
category: [oscp]
service: [SMB]
phase: [Enumeration]
references:
  - https://github.com/SnaffCon/Snaffler
---
