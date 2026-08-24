---
variants:
  - label: dir
    command: |
      gobuster dir -u $URL -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
  - label: dns
    command: |
      gobuster dns -d $DOMAIN -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
  - label: vhost
    command: |
      gobuster vhost -u $URL -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt --append-domain
description: Brute force web content, DNS subdomains, and virtual hosts by mode
os: [Linux]
category: [oscp, cli]
service: [HTTP, DNS]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/gobuster/
  - https://github.com/OJ/gobuster
---
