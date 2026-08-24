---
variants:
  - label: userenum
    command: |
      kerbrute userenum -d $DOMAIN --dc $DCIP /usr/share/seclists/Usernames/xato-net-10-million-usernames.txt
  - label: passwordspray
    command: |
      kerbrute passwordspray -d $DOMAIN --dc $DCIP users.txt $PASSWORD
  - label: bruteuser
    command: |
      kerbrute bruteuser -d $DOMAIN --dc $DCIP /usr/share/wordlists/rockyou.txt $USER
description: Brute force and enumerate AD accounts through Kerberos pre-auth without locking on userenum
os: [Linux]
category: [oscp, cli]
service: [Kerberos]
phase: [CredAccess, Enumeration]
references:
  - https://github.com/ropnop/kerbrute
---
