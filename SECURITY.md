# Security Policy

## Intended use

0xrefs is an educational cheat sheet of offensive-security commands. It is meant
for **authorized** security testing, certification practice (OSCP/CPTS and
similar), CTFs, and learning in environments you own or have explicit, written
permission to test. Using these commands against systems without authorization is
illegal and is not condoned by this project.

## Reporting a vulnerability

If you find a security issue **in the site itself** (for example an XSS in the
command rendering, or a problem with the `install.sh` script), please report it
privately rather than opening a public issue:

- Use GitHub's [private vulnerability reporting](https://github.com/0xrefs/0xrefs.github.io/security/advisories/new), or
- Email **strikoder@gmail.com**.

Please include steps to reproduce and the affected URL or file. You can expect an
acknowledgement within a few days.

## Out of scope

Reports about third-party tools referenced in commands (impacket, netexec,
hashcat, etc.) should go to those projects directly.
