---
variants:
  - label: search
    command: |
      searchsploit apache 2.4
  - label: mirror
    command: |
      searchsploit -m 50064
  - label: examine
    command: |
      searchsploit -x 50064
  - label: update
    command: |
      searchsploit -u
description: Search the local Exploit-DB copy and mirror a chosen exploit into the working directory
os: [Linux]
category: [oscp, cli]
phase: [Exploitation]
references:
  - https://www.kali.org/tools/exploitdb/
---
