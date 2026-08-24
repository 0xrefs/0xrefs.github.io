---
variants:
  - label: wordlist
    command: |
      onesixtyone -c /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings-onesixtyone.txt $IP
  - label: single
    command: |
      onesixtyone -c <(echo public) $IP
  - label: loop
    command: |
      for c in public private community snmp backup; do onesixtyone -c <(echo $c) $IP; done
description: Brute force SNMP community strings fast before walking the tree
os: [Linux]
category: [oscp, cli]
service: [SNMP]
phase: [Enumeration, CredAccess]
references:
  - https://www.kali.org/tools/onesixtyone/
---
