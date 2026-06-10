---
command: |
  SharpDump.exe
description: Minidump LSASS process memory to disk for offline credential extraction.
os: [Windows]
category: [oscp]
service: [AD]
phase: [CredAccess]
references:
  - https://github.com/GhostPack/SharpDump
---
