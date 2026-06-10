---
command: |
  ffuf -u http://$IP/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -t 300 -fs 3142
description: Directory fuzz a web server filtering by response size.
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://github.com/ffuf/ffuf
---
