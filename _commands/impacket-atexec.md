---
variants:
  - label: creds
    command: |
      impacket-atexec $DOMAIN/$USER:$PASSWORD@$IP whoami
  - label: hash
    command: |
      impacket-atexec -hashes :$HASH $DOMAIN/$USER@$IP whoami
description: Run a command via Task Scheduler with impacket, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [SMB]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
