---
variants:
  - label: from-names
    command: |
      crunch 1 1 -f fullnames.txt -t ,@^ -o usernames.txt 1
  - label: charset
    command: |
      crunch 6 8 -f /usr/share/crunch/charset.lst mixalpha-numeric -o wordlist.txt
  - label: pattern
    command: |
      crunch 8 8 -t Pass@,%% -o wordlist.txt
description: Generate a targeted wordlist by length, charset, or pattern instead of reaching for rockyou
os: [Linux]
category: [oscp, cli]
phase: [CredAccess, Cracking]
references:
  - https://www.kali.org/tools/crunch/
---
