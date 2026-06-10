---
command: |
  mysql -h $IP -P 3306 -u root -p"" --skip-ssl
description: Connect to a MySQL server as root with no password.
os: [Linux]
category: [cli]
service: [MySQL]
phase: [Exploitation]
references:
  - https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html
---
