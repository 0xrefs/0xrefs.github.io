---
variants:
  - label: listener
    command: |
      nc -lvnp $LPORT
  - label: rlwrap-listener
    command: |
      rlwrap -cAr nc -lvnp $LPORT
  - label: port-check
    command: |
      nc -zv $IP 1-1024
  - label: banner
    command: |
      nc -v $IP $RPORT
  - label: through-socks
    command: |
      nc -x 127.0.0.1:1080 -X connect $IP 80
  - label: pull-file
    command: |
      nc -q 5 $IP $RPORT > loot.txt
description: Catch reverse shells, probe ports, and move files, with rlwrap for a usable shell history
os: [Linux]
category: [oscp, cli]
phase: [Exploitation]
references:
  - https://www.kali.org/tools/netcat/
---
