---
command: |
  uv run FindUncommonShares.py --dc-ip $IP -u '$USER' -d '$DOMAIN' -p '$PASSWORD'
description: Find uncommon SMB shares across the domain (PowerView-equivalent).
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://github.com/p0dalirius/FindUncommonShares
---
