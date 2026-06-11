---
variants:
  - label: password
    command: |
      impacket-smbclient $DOMAIN/$USER:$PASSWORD@$IP
  - label: pth
    command: |
      impacket-smbclient $DOMAIN/$USER@$IP -hashes :$HASH
description: Interactive SMB client to list shares and get or put files, with pass the hash support
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration, LateralMovement]
references:
  - https://www.kali.org/tools/impacket-scripts/
  - https://github.com/fortra/impacket
---
