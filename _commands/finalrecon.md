---
variants:
  - label: full
    command: |
      finalrecon --full --url $URL
  - label: headers-whois
    command: |
      finalrecon --headers --whois --url $URL
description: All in one web recon covering headers, SSL, whois, DNS, subdomains, and crawling
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/finalrecon/
  - https://github.com/thewhiteh4t/FinalRecon
---
