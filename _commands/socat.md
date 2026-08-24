---
variants:
  - label: port-forward
    command: |
      socat tcp-listen:4141,fork,reuseaddr tcp-connect:$IP:3389 &
  - label: source-port
    command: |
      socat TCP4-SOURCEPORT=53 TCP4:$IP:50000
  - label: listener
    command: |
      socat -d -d TCP-LISTEN:$LPORT,fork,reuseaddr -
  - label: tty-shell
    command: |
      socat file:`tty`,raw,echo=0 TCP-LISTEN:$LPORT
description: Relay TCP between two endpoints for port forwarding, spoofed source ports, and full tty shells
os: [Linux]
category: [oscp, cli]
phase: [Pivoting]
references:
  - https://www.kali.org/tools/socat/
---
