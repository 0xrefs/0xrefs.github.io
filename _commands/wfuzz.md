---
command: |
  wfuzz -u http://$IP -H "Host: FUZZ.$DOMAIN" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt --hh 315
description: Fuzz virtual hostnames using a wordlist.
os: [Linux]
category: [cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://github.com/xmendez/wfuzz
---
