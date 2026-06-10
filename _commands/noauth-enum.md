---
variants:
  - label: dns
    command: |
      noauth_dns $IP $DOMAIN [subdomains.txt]
  - label: kerberos
    command: |
      noauth_kerberos -t $DCIP -d $DOMAIN
  - label: smb
    command: |
      noauth_smb $IP
  - label: ldap
    command: |
      noauth_ldap $IP $DOMAIN [ldap|ldaps]
description: Unauthenticated enumeration helpers (OffensiveSecurityScripts), by protocol.
os: [Linux]
category: [oscp, cli]
service: [DNS, Kerberos, SMB, LDAP]
phase: [Enumeration]
references:
  - https://github.com/strikoder/OffensiveSecurityScripts
---
