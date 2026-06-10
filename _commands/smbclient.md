---
variants:
  - label: native
    command: |
      smbclient \\\\$IP\\IT -U $USER%$PASSWORD
  - label: hash
    command: |
      smbclient \\\\$IP\\IT -U $USER --pw-nt-hash $HASH
  - label: impacket
    command: |
      impacket-smbclient $DOMAIN/$USER:$PASSWORD@$IP
  - label: ticket
    command: |
      impacket-smbclient -k -no-pass $DOMAIN/$USER@$IP
description: Connect to SMB shares interactively, native client or impacket, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket]
service: [SMB]
phase: [Exploitation]
references:
  - https://www.samba.org/samba/docs/current/man-html/smbclient.1.html
  - https://github.com/fortra/impacket
---
