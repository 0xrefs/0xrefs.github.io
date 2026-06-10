---
command: |
  impacket-GetADUsers -dc-ip $IP -all $DOMAIN/$USER:$PASSWORD
description: Enumerate domain users and their email addresses via Kerberos.
os: [Linux]
category: [oscp, cli]
service: [Kerberos]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
