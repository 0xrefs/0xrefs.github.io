---
command: |
  cewl -d 2 -m 5 -w words.txt $URL
description: Spider a site to depth 2 and build a custom wordlist of words 5 chars or longer
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Cracking]
references:
  - https://www.kali.org/tools/cewl/
---
