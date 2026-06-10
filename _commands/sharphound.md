---
variants:
  - label: All
    command: SharpHound.exe --CollectionMethods All --ZipFileName output.zip
  - label: DCOnly
    command: SharpHound.exe --CollectionMethods DCOnly --Domain $DOMAIN --ZipFileName output.zip
description: Collect BloodHound data from a domain-joined Windows host (All) or via DC-only LDAP queries (DCOnly).
os: [Windows]
category: [oscp]
service: [LDAP]
phase: [Enumeration]
references:
  - https://bloodhound.specterops.io/collect-data/ce-collection/sharphound
---
