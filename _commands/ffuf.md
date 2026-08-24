---
variants:
  - label: dir
    command: |
      ffuf -u $URL/FUZZ -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
  - label: vhost
    command: |
      ffuf -u $URL -H "Host: FUZZ.$DOMAIN" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -fs 4242
  - label: post-login
    command: |
      ffuf -u $URL/login -X POST -d "username=admin&password=FUZZ" -w /usr/share/wordlists/rockyou.txt -fc 200
  - label: params
    command: |
      ffuf -u "$URL/?FUZZ=value" -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt
description: Fast web fuzzer for directories, vhosts, login fields, and parameters with response filtering
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/ffuf/
  - https://github.com/ffuf/ffuf
---
