---
command: |
  uv run pywhisker.py --dc-ip "$IP" -d "$DOMAIN" -u "$USER" -p "$PASSWORD" --target "$TARGET_USER" --action "list"
description: Manipulate msDS-KeyCredentialLink for shadow credential attacks.
os: [Linux]
category: [oscp, cli]
service: [LDAP]
phase: [PrivEsc]
references:
  - https://github.com/ShutdownRepo/pywhisker
---
