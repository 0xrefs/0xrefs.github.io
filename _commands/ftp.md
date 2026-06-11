---
variants:
  - label: connect
    command: |
      ftp $IP
  - label: anonymous
    command: |
      ftp anonymous@$IP
description: Connect to an FTP service to test anonymous access and browse the file store
os: [Linux]
category: [oscp, cli]
service: [FTP]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/tnftp/
---
