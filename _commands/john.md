---
variants:
  - label: bcrypt
    command: |
      john --wordlist=/usr/share/wordlists/rockyou.txt hashes.bcrypt
  - label: md5
    command: |
      john --wordlist=/usr/share/wordlists/rockyou.txt hashes.md5 --format=md5crypt-long
description: Crack hashes with john and a wordlist, picking the format.
os: [Linux]
category: [cli]
phase: [Cracking]
references:
  - https://www.openwall.com/john/
---
