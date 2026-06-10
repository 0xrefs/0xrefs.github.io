---
command: |
  uv run nagoyaspray.py --seasons --months --start 2020 --end 2025 -s "!" -o passwords.txt
description: Generate seasonal and monthly password lists for spraying.
os: [Linux]
category: [oscp, cli]
phase: [Cracking]
references:
  - https://github.com/strikoder/NagoyaSpray
---
