---
command: |
  impacket-services $DOMAIN/$USER:$PASSWORD@$IP list
description: List Windows services on a remote host via impacket.
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
