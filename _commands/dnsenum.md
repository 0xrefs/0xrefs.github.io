---
command: |
  dnsenum --dnsserver $IP $DOMAIN
description: Enumerate DNS records, attempt zone transfers, and brute force subdomains for a domain
os: [Linux]
category: [oscp, cli]
service: [DNS]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/dnsenum/
---
