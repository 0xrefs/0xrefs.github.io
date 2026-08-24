---
variants:
  - label: get
    command: |
      curl -i $URL
  - label: headers
    command: |
      curl -I $URL
  - label: post-json
    command: |
      curl -X POST -H "Content-Type: application/json" -d '{"user":"admin"}' $URL
  - label: put-upload
    command: |
      curl -X PUT --data-binary @shell.php $URL/shell.php
  - label: proxy
    command: |
      curl -k -x http://127.0.0.1:8080 $URL
description: Transfer data over HTTP for manual web testing, file upload, and proxying through Burp
os: [Linux]
category: [oscp, cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://www.kali.org/tools/curl/
---
