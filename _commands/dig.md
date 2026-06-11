---
variants:
  - label: a-record
    command: |
      dig $DOMAIN @$IP
  - label: any
    command: |
      dig ANY $DOMAIN @$IP
  - label: zone-transfer
    command: |
      dig AXFR $DOMAIN @$IP
  - label: reverse
    command: |
      dig -x $IP @$IP
  - label: ns
    command: |
      dig NS $DOMAIN @$IP
description: Query a DNS server for records and attempt a zone transfer against the target nameserver
os: [Linux]
category: [oscp, cli]
service: [DNS]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/bind9/#dig
---
