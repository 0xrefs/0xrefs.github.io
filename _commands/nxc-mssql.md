---
variants:
  - label: auth
    command: |
      nxc mssql $IP -u $USER -p $PASSWORD --local-auth
  - label: query
    command: |
      nxc mssql $IP -u $USER -p $PASSWORD -q "SELECT @@version"
  - label: exec
    command: |
      nxc mssql $IP -u $USER -p $PASSWORD -x "whoami"
description: NetExec over MSSQL to authenticate, run queries, and execute commands via xp_cmdshell
os: [Linux]
category: [oscp, cli]
service: [MSSQL]
phase: [Exploitation]
references:
  - https://www.netexec.wiki/
---
