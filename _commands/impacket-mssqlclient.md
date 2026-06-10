---
command: |
  impacket-mssqlclient $USER:$PASSWORD@$IP -windows-auth
description: Connect to an MSSQL server using Windows authentication.
os: [Linux]
category: [oscp, cli]
service: [MSSQL]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
