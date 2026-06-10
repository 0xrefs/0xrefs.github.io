---
variants:
  - label: creds
    command: |
      impacket-getTGT -dc-ip $DCIP $DOMAIN/$USER:$PASSWORD
  - label: hash
    command: |
      impacket-getTGT -dc-ip $DCIP $DOMAIN/$USER -hashes :$HASH
description: Request a Kerberos TGT with impacket, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [Kerberos]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
