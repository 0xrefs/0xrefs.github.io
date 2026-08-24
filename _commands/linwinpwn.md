---
variants:
  - label: auto
    command: |
      ./linWinPwn.sh -t $DCIP -d $DOMAIN -u $USER -p $PASSWORD --auto
  - label: hash
    command: |
      ./linWinPwn.sh -t $DCIP -d $DOMAIN -u $USER -H $HASH --auto
  - label: no-creds
    command: |
      ./linWinPwn.sh -t $DCIP --auto
description: Chain the usual AD enumeration and attack scripts against a DC in one automated pass
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [AD, LDAP, SMB]
phase: [Enumeration]
references:
  - https://github.com/lefayjey/linWinPwn
---
