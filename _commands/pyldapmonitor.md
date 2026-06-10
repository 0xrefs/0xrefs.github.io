---
command: |
  uv run ldapmonitor.py --dc-ip $IP -u '$USER' -d '$DOMAIN' -p '$PASSWORD'
description: Monitor AD for LDAP changes in real time (creates, deletes, modifications).
os: [Linux]
category: [oscp, cli]
service: [LDAP]
phase: [Enumeration]
references:
  - https://github.com/p0dalirius/LDAPmonitor
---
