---
variants:
  - label: creds
    command: |
      evil-winrm -i $IP -u $USER -p $PASSWORD
  - label: hash
    command: |
      evil-winrm -i $IP -u $USER -H $HASH
  - label: ticket
    command: |
      evil-winrm -i $IP -u $USER -k
  - label: cert
    command: |
      evil-winrm -i $IP -c pub.pem -k priv.pem -S -r $DOMAIN
description: Interactive WinRM shell, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket, cert]
service: [WinRM]
phase: [Exploitation]
references:
  - https://github.com/Hackplayers/evil-winrm
---
