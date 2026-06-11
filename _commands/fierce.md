---
command: |
  fierce --domain $DOMAIN --dns-servers $IP
description: Locate non-contiguous IP space and hostnames for a domain via DNS scanning
os: [Linux]
category: [oscp, cli]
service: [DNS]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/fierce/
---
