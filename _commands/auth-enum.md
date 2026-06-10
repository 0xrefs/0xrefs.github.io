---
variants:
  - label: ldap
    command: |
      auth_ldap $IP $USER -p $PASSWORD $DOMAIN [-ldap|-ldaps]
  - label: kerberos
    command: |
      auth_kerberos -u $USER -p $PASSWORD -i $DCIP -d $DOMAIN
  - label: smb
    command: |
      auth_smb -t $IP -u $USER -p $PASSWORD -d $DOMAIN
description: Authenticated enumeration helpers (OffensiveSecurityScripts), by protocol.
os: [Linux]
category: [oscp, cli]
service: [LDAP, Kerberos, SMB]
phase: [Enumeration]
references:
  - https://github.com/strikoder/OffensiveSecurityScripts
---
