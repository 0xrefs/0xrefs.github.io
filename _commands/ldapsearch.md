---
variants:
  - label: creds
    command: |
      ldapsearch -h $DOMAIN -D '$USER@$DOMAIN' -w $PASSWORD -b 'dc=$DOMAIN,dc=local'
  - label: anonymous
    command: |
      ldapsearch -H ldap://$IP -LLL -x -b'' -s base '(objectclass=*)'
description: Query LDAP, by auth method.
os: [Linux]
category: [oscp, cli]
service: [LDAP]
phase: [Enumeration]
references:
  - https://linux.die.net/man/1/ldapsearch
---
