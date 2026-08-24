---
variants:
  - label: shares
    command: |
      smbmap -H $IP -u $USER -p $PASSWORD -d $DOMAIN
  - label: null-session
    command: |
      smbmap -H $IP -u '' -p ''
  - label: recursive
    command: |
      smbmap -H $IP -u $USER -p $PASSWORD -d $DOMAIN -R --depth 5
  - label: download
    command: |
      smbmap -H $IP -u $USER -p $PASSWORD -d $DOMAIN --download '$SHARE\id_rsa'
  - label: hash
    command: |
      smbmap -H $IP -u $USER -p ':$HASH' -d $DOMAIN
  - label: exec
    command: |
      smbmap -H $IP -u $USER -p $PASSWORD -d $DOMAIN -x 'whoami'
description: Enumerate SMB shares with per share read and write permissions, then pull files down
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [SMB]
phase: [Enumeration, CredAccess]
references:
  - https://www.kali.org/tools/smbmap/
  - https://github.com/ShawnDEvans/smbmap
---
