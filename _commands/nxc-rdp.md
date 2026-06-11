---
variants:
  - label: auth
    command: |
      nxc rdp $IP -u $USER -p $PASSWORD
  - label: screenshot
    command: |
      nxc rdp $IP -u $USER -p $PASSWORD --screenshot
  - label: nla-screenshot
    command: |
      nxc rdp $IP -u '' -p '' --nla-screenshot
description: NetExec over RDP to test access and screenshot the logon or session desktop
os: [Linux]
category: [oscp, cli]
service: [RDP]
phase: [Enumeration]
references:
  - https://www.netexec.wiki/
---
