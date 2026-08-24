---
variants:
  - label: range
    command: |
      sudo netdiscover -i tun0 -r $SUBNET
  - label: passive
    command: |
      sudo netdiscover -i tun0 -p
description: ARP sweep a local subnet to find live hosts, actively or passively
os: [Linux]
category: [oscp, cli]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/netdiscover/
---
