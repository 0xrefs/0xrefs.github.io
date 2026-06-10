---
variants:
  - label: crack
    command: |
      pfx2john administrator.pfx > pfx.hash
      john --wordlist=/usr/share/wordlists/rockyou.txt pfx.hash
  - label: to-pem
    command: |
      openssl pkcs12 -in cert.pfx -out pub.pem -clcerts -nokeys
      openssl pkcs12 -in cert.pfx -out priv.pem -nocerts -nodes
description: Crack a PFX password or split it into PEM cert and key (for evil-winrm).
os: [Linux]
category: [oscp, cli]
have: [cert]
service: [ADCS]
phase: [CredAccess]
references:
  - https://github.com/openwall/john
---
