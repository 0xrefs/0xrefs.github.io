---
variants:
  - label: ack-probe
    command: |
      sudo hping3 -c 1 -A -p 445 $IP
  - label: rst-probe
    command: |
      sudo hping3 -c 1 -R -p 445 $IP
  - label: syn-source-port
    command: |
      sudo hping3 -S -s 53 -p 50000 $IP
description: Craft single TCP probes to test firewall rules and source port filtering
os: [Linux]
category: [oscp, cli]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/hping3/
---
