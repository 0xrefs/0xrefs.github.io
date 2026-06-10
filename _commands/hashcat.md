---
variants:
  - label: NTLM
    command: |
      hashcat -m 1000 hashes.ntlm2 /usr/share/wordlists/rockyou.txt --username
  - label: NTLMv2
    command: |
      hashcat -m 5600 hashes.ntlm2 /usr/share/wordlists/rockyou.txt
  - label: Kerberoast
    command: |
      hashcat -m 13100 hashes.kerberoast /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best66.rule
  - label: ASREP
    command: |
      hashcat -m 18200 hashes.asrep /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best66.rule
  - label: MD5
    command: |
      hashcat -m 0 hashes.md5 /usr/share/wordlists/rockyou.txt
  - label: SHA1
    command: |
      hashcat -m 100 hashes.sha1 /usr/share/wordlists/rockyou.txt -O
  - label: KeePass
    command: |
      hashcat -m 13400 database.kdbx /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/rockyou-30000.rule
  - label: PSK
    command: |
      hashcat -m 5400 presharedkey.psk /usr/share/wordlists/rockyou.txt
  - label: htpasswd
    command: |
      hashcat -m 1600 hashes.htpasswd /usr/share/wordlists/rockyou.txt -O
description: Crack hashes with hashcat, picking the mode by hash type.
os: [Linux]
category: [oscp, cli]
phase: [Cracking]
references:
  - https://hashcat.net/wiki/doku.php?id=example_hashes
---
