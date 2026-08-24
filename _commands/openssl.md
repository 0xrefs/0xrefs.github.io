---
variants:
  - label: imaps
    command: |
      openssl s_client -connect $IP:993 -quiet
  - label: pop3
    command: |
      openssl s_client -starttls pop3 -connect $IP:110 -crlf -quiet
  - label: smtp
    command: |
      openssl s_client -starttls smtp -connect $IP:25 -crlf -quiet
  - label: cert-names
    command: |
      openssl s_client -connect $IP:443 </dev/null 2>/dev/null | openssl x509 -noout -text
description: Open a TLS session to a mail service to read banners, or pull hostnames out of a certificate
os: [Linux]
category: [oscp, cli]
service: [SMTP, IMAP, POP3]
phase: [Enumeration]
references:
  - https://docs.openssl.org/master/man1/openssl-s_client/
---
