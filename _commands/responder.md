---
command: |
  Responder -I eth0 -A
description: Run Responder in analyze mode, listen and log without poisoning.
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://github.com/lgandx/Responder
---
