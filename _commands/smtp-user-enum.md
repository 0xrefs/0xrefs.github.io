---
variants:
  - label: vrfy
    command: |
      smtp-user-enum -M VRFY -U /usr/share/seclists/Usernames/Names/names.txt -t $IP -m 100 -w 15
  - label: rcpt
    command: |
      smtp-user-enum -M RCPT -D $DOMAIN -U users.txt -t $IP -p 25
  - label: expn
    command: |
      smtp-user-enum -M EXPN -U users.txt -t $IP
description: Validate mailbox names against an SMTP server with VRFY, RCPT, or EXPN
os: [Linux]
category: [oscp, cli]
service: [SMTP]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/smtp-user-enum/
---
