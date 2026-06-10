---
command: |
  SharpLDAPmonitor.exe /dcIP:$DCIP /user:$USER /pass:$PASSWORD
description: Monitor LDAP for real-time object creation, deletion, and modification events.
os: [Windows]
category: [oscp]
service: [LDAP]
phase: [Enumeration]
references:
  - https://github.com/p0dalirius/SharpLDAPmonitor
---
