---
variants:
  - label: creds
    command: |
      xfreerdp3 /v:$IP /u:$USER /p:$PASSWORD /dynamic-resolution /cert:ignore
  - label: hash
    command: |
      xfreerdp3 /v:$IP /u:$USER /pth:$HASH /dynamic-resolution /cert:ignore /sec:tls /d:$DOMAIN
description: Connect to a Windows RDP session, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [RDP]
phase: [Exploitation]
references:
  - https://github.com/FreeRDP/FreeRDP
---
