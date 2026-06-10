---
command: |
  credspray.sh -t $IP -u findings.txt -c findings.txt
description: Spray discovered credentials across a target.
os: [Linux]
category: [oscp, cli]
phase: [InitialAccess]
references:
  - https://github.com/strikoder/CredSpray
---
