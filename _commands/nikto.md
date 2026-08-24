---
command: |
  nikto -h $URL
description: Scan a web server for known vulnerabilities, dangerous files, and misconfigurations
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/nikto/
---
