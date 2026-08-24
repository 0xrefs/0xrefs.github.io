---
variants:
  - label: quick
    command: |
      rustscan -a $IP --ulimit 5000 -b 500 -t 2000 -g
  - label: full-nmap
    command: |
      rustscan -r 1-65535 --ulimit 5000 -t 2000 -b 2000 -a $IP -- -Pn -sVC -A --min-rate=5000 --min-parallelism=100
  - label: common-ports
    command: |
      rustscan -a $IP --ulimit 5000 -b 500 -t 2000 -p 21,22,25,53,80,110,135,139,143,389,443,445,993,995,1433,1521,2049,3268,3306,3389,5432,5985,5986,8080,8443 -g
  - label: ports-csv
    command: |
      rustscan -r 1-65535 --ulimit 5000 -t 2000 -b 2000 -a $IP | tee rustscan.txt
      grep '^Open' rustscan.txt | awk -F: '{print $2}' | tr '\n' ',' | sed 's/,$/\n/'
description: Fast port sweep that hands the open ports straight to nmap for service detection
os: [Linux]
category: [oscp, cli]
phase: [Enumeration]
references:
  - https://github.com/bee-san/RustScan
---
