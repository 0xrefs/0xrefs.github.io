---
command: |
  autorecon $IP
variants:
  - label: single
    command: |
      autorecon $IP
  - label: targets-file
    command: |
      autorecon -t targets.txt
  - label: all-ports
    command: |
      autorecon $IP --port-scans top-100-ports --service-scans default
description: Multi-threaded recon wrapper that runs nmap then per-service enumeration automatically
os: [Linux]
category: [oscp, cli]
service: [SMB, HTTP, DNS]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/autorecon/
  - https://github.com/Tib3rius/AutoRecon
---
