---
variants:
  - label: cas
    command: |
      Certify.exe cas
  - label: vulnerable
    command: |
      Certify.exe find /vulnerable
description: Enumerate certificate authorities and vulnerable ADCS templates.
os: [Windows]
category: [oscp]
service: [ADCS]
phase: [Enumeration]
references:
  - https://github.com/GhostPack/Certify
---
