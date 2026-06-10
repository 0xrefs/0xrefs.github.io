---
variants:
  - label: kpasswd
    command: |
      impacket-changepasswd -protocol kpasswd '$DOMAIN/$USER:$PASSWORD'@$DCIP -newpass $NEWPASSWORD
  - label: smb
    command: |
      impacket-changepasswd -protocol smb '$DOMAIN/$USER:$PASSWORD'@$DCIP -newpass $NEWPASSWORD
  - label: rpc
    command: |
      net rpc password '$USER' '$NEWPASSWORD' -U '$DOMAIN/$USER%$PASSWORD' -S $DCIP
description: Change an AD user's password, by protocol.
os: [Linux]
category: [oscp, cli]
service: [Kerberos, SMB]
phase: [Exploitation]
references:
  - https://github.com/fortra/impacket
---
