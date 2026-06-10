---
variants:
  - label: default
    command: |
      nuclei -target http://$IP -fr
  - label: headless
    command: |
      nuclei -target http://$IP -fr --headless
description: Run a nuclei vulnerability scan, optionally with headless browser templates.
os: [Linux]
category: [cli]
service: [HTTP]
phase: [Enumeration]
references:
  - https://github.com/projectdiscovery/nuclei
---
