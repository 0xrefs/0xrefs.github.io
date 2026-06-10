---
command: |
  impacket-ticketConverter ticket.kirbi ticket.ccache
  export KRB5CCNAME=ticket.ccache
description: Convert a Kerberos ticket between .kirbi and .ccache, then load it for pass-the-ticket.
os: [Linux]
category: [oscp, cli]
have: [ticket]
service: [Kerberos]
phase: [LateralMovement]
references:
  - https://github.com/fortra/impacket
---
