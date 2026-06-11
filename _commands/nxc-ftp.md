---
variants:
  - label: auth
    command: |
      nxc ftp $IP -u $USER -p $PASSWORD
  - label: list
    command: |
      nxc ftp $IP -u $USER -p $PASSWORD --ls
description: NetExec over FTP to validate credentials and list the remote directory
os: [Linux]
category: [oscp, cli]
service: [FTP]
phase: [Enumeration]
references:
  - https://www.netexec.wiki/
---
