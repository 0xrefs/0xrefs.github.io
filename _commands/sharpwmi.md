---
command: |
  SharpWMI.exe computername=$IP action=exec command="cmd.exe /c whoami > C:\Temp\out.txt"
description: Execute a command on a remote host via WMI from Windows.
os: [Windows]
category: [oscp]
service: [WMI]
phase: [LateralMovement]
references:
  - https://github.com/GhostPack/SharpWMI
---
