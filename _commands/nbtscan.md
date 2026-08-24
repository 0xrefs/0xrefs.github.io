---
command: |
  nbtscan $IP/24
description: Scan a subnet for NetBIOS names to map hostnames, workgroups, and logged in users
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/nbtscan/
---
