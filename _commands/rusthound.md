---
command: |
  rusthound-ce -d $DOMAIN -u $USER@$DOMAIN -p $PASSWORD -z
description: Collect BloodHound data from a domain remotely using RustHound.
os: [Linux]
category: [oscp, cli]
service: [LDAP]
phase: [Enumeration]
references:
  - https://github.com/NH-RED-TEAM/RustHound
---
