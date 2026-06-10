---
command: |
  wpscan --url http://$IP --enumerate ap,u,t
description: Enumerate WordPress plugins, users, and themes.
os: [Linux]
category: [cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://github.com/wpscanteam/wpscan
---
