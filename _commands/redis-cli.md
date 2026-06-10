---
command: |
  redis-cli -h $IP --user $USER -a $PASSWORD
description: Connect to a Redis instance with authentication.
os: [Linux]
category: [cli]
service: [Redis]
phase: [Exploitation]
references:
  - https://redis.io/docs/manual/cli/
---
