---
command: |
  scp nc.exe $USER@$IP:"C:\\users\\$USER"
description: Upload a file to a remote Windows host via SCP.
os: [Linux]
category: [cli]
service: [SSH]
phase: [Exploitation]
references:
  - https://man.openbsd.org/scp
---
