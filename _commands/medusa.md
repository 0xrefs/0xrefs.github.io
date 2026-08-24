---
variants:
  - label: ssh
    command: |
      medusa -h $IP -u $USER -P /usr/share/wordlists/rockyou.txt -M ssh
  - label: ftp
    command: |
      medusa -h $IP -u $USER -P /usr/share/wordlists/rockyou.txt -M ftp
  - label: smb
    command: |
      medusa -h $IP -u $USER -P /usr/share/wordlists/rockyou.txt -M smbnt
description: Parallel network login brute forcer, by service module, for SSH, FTP, and SMB
os: [Linux]
category: [oscp, cli]
service: [SSH, FTP, SMB]
phase: [CredAccess]
references:
  - https://www.kali.org/tools/medusa/
---
