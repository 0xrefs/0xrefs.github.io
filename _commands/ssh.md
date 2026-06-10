---
variants:
  - label: local-forward
    command: |
      ssh -L 1234:127.0.0.1:1234 $USER@$IP
  - label: ticket
    command: |
      ssh -K $USER@$IP
description: SSH local port forward or Kerberos (GSSAPI) login.
os: [Linux]
category: [oscp, cli]
have: [ticket]
service: [SSH]
phase: [Pivoting]
references:
  - https://man.openbsd.org/ssh
---
