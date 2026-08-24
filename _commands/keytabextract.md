---
command: |
  keytabextract.py $USER.keytab
description: Pull the realm, service principal, and NTLM hash out of a captured Kerberos keytab
os: [Linux]
category: [oscp, cli]
service: [Kerberos]
phase: [CredAccess]
references:
  - https://github.com/sosdave/KeyTabExtract
---
