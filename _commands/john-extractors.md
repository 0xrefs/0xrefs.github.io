---
variants:
  - label: ssh2john
    command: |
      ssh2john id_rsa > hash.txt
  - label: zip2john
    command: |
      zip2john secret.zip > hash.txt
  - label: rar2john
    command: |
      rar2john secret.rar > hash.txt
  - label: office2john
    command: |
      office2john document.docx > hash.txt
  - label: bitlocker2john
    command: |
      bitlocker2john -i drive.img > hash.txt
  - label: keepass2john
    command: |
      keepass2john database.kdbx > hash.txt
  - label: pdf2john
    command: |
      pdf2john document.pdf > hash.txt
  - label: crack
    command: |
      john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
description: Extract a crackable hash from an encrypted file with the 2john helpers, then crack it with John
os: [Linux]
category: [oscp, cli]
service: [Files]
phase: [Cracking]
references:
  - https://www.kali.org/tools/john/#bitlocker2john
---
