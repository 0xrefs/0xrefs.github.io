---
variants:
  - label: config
    command: |
      # point proxychains at the SOCKS port your tunnel opened, one entry, last line wins
      echo 'socks5 127.0.0.1 1080' | sudo tee -a /etc/proxychains4.conf
      tail -n 3 /etc/proxychains4.conf
  - label: nmap
    command: |
      # proxychains cannot carry raw sockets, so no -sS, no -sU, and no ICMP host discovery
      proxychains -q nmap -Pn -sT -sV -oN proxychains_nmap.txt $IP
  - label: wrap-a-tool
    command: |
      # any TCP client works the same way, prefix it and keep -q to mute the per connection noise
      proxychains -q ssh $USER@$IP
description: Send a TCP tool through a SOCKS proxy from a foothold, with the scanning limits that come with it
os: [Linux]
category: [oscp, cli]
phase: [Pivoting]
references:
  - https://www.kali.org/tools/proxychains-ng/
---
