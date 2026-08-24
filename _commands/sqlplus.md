---
variants:
  - label: sysdba
    command: |
      sqlplus '$USER/$PASSWORD'@$IP/XE as sysdba
  - label: user
    command: |
      sqlplus '$USER/$PASSWORD'@$IP:1521/XE
  - label: list-tables
    command: |
      echo 'select table_name from all_tables;' | sqlplus -s '$USER/$PASSWORD'@$IP/XE
description: Connect to an Oracle instance to run queries, optionally as sysdba
os: [Linux]
category: [oscp, cli]
service: [Oracle]
phase: [Exploitation]
references:
  - https://www.oracle.com/database/technologies/instant-client.html
---
