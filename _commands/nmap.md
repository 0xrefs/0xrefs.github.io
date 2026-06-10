---
variants:
  - label: full-tcp
    command: |
      nmap -Pn -sCV -p- $IP -vv -oN nmap_full -T4 --min-rate 2000 --max-retries 20 --open
  - label: udp
    command: |
      nmap -Pn -sC -sU -p 69,123,161,162,500,4500 $IP --open -vv
description: Scan a host with nmap, by scan type.
os: [Linux]
category: [oscp, cli]
service: [SNMP]
phase: [Enumeration]
references:
  - https://nmap.org/book/man.html
---
