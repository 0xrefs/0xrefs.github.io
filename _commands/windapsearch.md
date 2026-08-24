---
variants:
  - label: users
    command: |
      windapsearch -d $DOMAIN --dc-ip $DCIP -u $USER -p $PASSWORD -m users
  - label: anonymous
    command: |
      windapsearch -d $DOMAIN --dc-ip $DCIP -m users
  - label: privileged
    command: |
      windapsearch -d $DOMAIN --dc-ip $DCIP -u $USER -p $PASSWORD -m privileged-users
  - label: computers
    command: |
      windapsearch -d $DOMAIN --dc-ip $DCIP -u $USER -p $PASSWORD -m computers
  - label: unconstrained
    command: |
      windapsearch -d $DOMAIN --dc-ip $DCIP -u $USER -p $PASSWORD -m unconstrained-users
description: Query LDAP for users, computers, and privileged groups without writing raw filters
os: [Linux]
category: [oscp, cli]
service: [LDAP, AD]
phase: [Enumeration]
references:
  - https://github.com/ropnop/windapsearch
---
