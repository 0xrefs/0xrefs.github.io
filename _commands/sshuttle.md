---
variants:
  - label: subnets
    command: |
      sshuttle -r $USER@$IP 10.10.10.0/24 172.16.5.0/24
  - label: key-and-port
    command: |
      sshuttle -r $USER@$IP:2222 172.16.5.0/24 --ssh-cmd 'ssh -i id_rsa'
  - label: with-dns
    command: |
      sshuttle -r $USER@$IP 0.0.0.0/0 --dns
description: Transparent VPN over a plain SSH login, routes whole subnets without a SOCKS proxy
os: [Linux]
category: [oscp, cli]
service: [SSH]
phase: [Pivoting]
references:
  - https://github.com/sshuttle/sshuttle
---
