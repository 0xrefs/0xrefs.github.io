---
command: |
  snmpbulkwalk -v2c -c public $IP NET-SNMP-EXTEND-MIB::nsExtendObjects
description: Enumerate SNMP extend objects (often used for RCE via net-snmp extensions).
os: [Linux]
category: [oscp, cli]
service: [SNMP]
phase: [Enumeration]
references:
  - http://www.net-snmp.org/docs/man/snmpbulkwalk.html
---
