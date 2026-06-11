---
variants:
  - label: auth
    command: |
      nxc ssh $IP -u $USER -p $PASSWORD
  - label: exec
    command: |
      nxc ssh $IP -u $USER -p $PASSWORD -x "id"
description: NetExec over SSH to spray credentials and run a command on success
os: [Linux]
category: [oscp, cli]
service: [SSH]
phase: [Exploitation, CredAccess]
references:
  - https://www.netexec.wiki/
---
