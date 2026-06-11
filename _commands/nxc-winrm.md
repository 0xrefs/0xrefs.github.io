---
variants:
  - label: auth
    command: |
      nxc winrm $IP -u $USER -p $PASSWORD
  - label: pth
    command: |
      nxc winrm $IP -u $USER -H $HASH
  - label: exec
    command: |
      nxc winrm $IP -u $USER -p $PASSWORD -x "whoami"
description: NetExec over WinRM to validate access and run commands, with pass the hash support
os: [Linux]
category: [oscp, cli]
service: [WinRM]
phase: [Exploitation, LateralMovement]
references:
  - https://www.netexec.wiki/
---
