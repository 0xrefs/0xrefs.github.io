---
variants:
  - label: full
    command: |
      snmpwalk -v2c -c public $IP 1.3.6.1.2.1
  - label: extend-objects
    command: |
      snmpwalk -v2c -c public $IP NET-SNMP-EXTEND-MIB::nsExtendObjects
  - label: extend-output
    command: |
      snmpwalk -v2c -c public $IP NET-SNMP-EXTEND-MIB::nsExtendOutputFull
  - label: slow-ascii
    command: |
      snmpwalk -t 10 -Oa -v2c -c public $IP 1.3.6.1.2
description: Walk an SNMP tree by OID or MIB name to pull processes, users, and net-snmp extend output
os: [Linux]
category: [oscp, cli]
service: [SNMP]
phase: [Enumeration]
references:
  - http://www.net-snmp.org/docs/man/snmpwalk.html
---
