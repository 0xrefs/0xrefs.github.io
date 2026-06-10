---
command: |
  impacket-getPac -targetUser $TARGET_USER $DOMAIN/$USER:$PASSWORD
description: Retrieve the PAC of a target user (useful for privilege analysis).
os: [Linux]
category: [oscp, cli]
service: [Kerberos]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
