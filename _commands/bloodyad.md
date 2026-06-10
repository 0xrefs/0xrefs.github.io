---
command: |
  bloodyAD --host $IP -d $DOMAIN -u $USER -p $PASSWORD get writable --detail
description: List AD objects and properties the current user can write to.
os: [Linux]
category: [oscp, cli]
service: [LDAP]
phase: [Enumeration]
references:
  - https://github.com/CravateRouge/bloodyAD
---
