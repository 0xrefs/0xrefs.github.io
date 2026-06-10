---
command: |
  uv run bloodhound.py -u $USER -p $PASSWORD -d $DOMAIN -v --zip -c All -dc $DOMAIN -ns $IP
description: Remotely collect BloodHound data using credentials.
os: [Linux]
category: [oscp, cli]
service: [LDAP]
phase: [Enumeration]
references:
  - https://github.com/fox-it/BloodHound.py
---
