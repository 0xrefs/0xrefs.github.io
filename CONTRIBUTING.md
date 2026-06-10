# Contributing to 0xrefs

Thanks for helping grow 0xrefs! The project is a curated, interactive cheat sheet
of offensive-security commands. Almost all contributions come down to **adding or
fixing a command**, which is a single small file.

- Want a command added but don't want to write it yourself? Open a
  [Command request](https://github.com/0xrefs/0xrefs.github.io/issues/new?template=command_request.yml).
- Found a bug on the site? Open a
  [Bug report](https://github.com/0xrefs/0xrefs.github.io/issues/new?template=bug_report.yml).
- Have an idea for the site itself? Open a
  [Feature request](https://github.com/0xrefs/0xrefs.github.io/issues/new?template=feature_request.yml).

## Adding a command

Every command is one Markdown file in [`_commands/`](_commands/). The cheat sheet
and the install manifests (`/commands/oscp.txt`, `/commands/cli.txt`) are both
generated from these files, so adding one file is all it takes.

Create `_commands/<short-kebab-name>.md`:

```yaml
---
command: |
  nxc smb $IP -u $USER -p $PASSWORD --shares
description: Enumerate SMB shares with credentials.
os: [Linux]
category: [oscp, cli]
service: [SMB]
phase: [Enumeration]
references:
  - https://www.netexec.wiki/
---
```

### Field reference

| Field         | Required | Notes |
|---------------|----------|-------|
| `command`     | yes*     | Use the `\|` block form. Multiple lines are allowed. |
| `variants`    | yes*     | Alternative to `command`: a labelled list of forms (see below). |
| `description` | yes      | One short sentence, no trailing period needed. |
| `os`          | yes      | `Linux` and/or `Windows`. |
| `category`    | yes      | `oscp` and/or `cli`. |
| `service`     | yes      | One or more services (see below). |
| `phase`       | yes      | One or more phases (see below). |
| `references`  | no       | List of URLs to docs/tooling. |

\* Provide **either** `command` or `variants`, not both.

### Variants

When one tool has several closely related forms (hashcat by hash type, nxc by
protocol, evil-winrm by auth method), put them in a single file as `variants`
instead of many files. The cheat sheet shows small tabs on top of the command
block to switch between them; the first variant is the default. Each variant's
`command` can be multi-line, and every variant is loaded into the install set.

```yaml
---
variants:
  - label: password
    command: |
      evil-winrm -i $IP -u $USER -p $PASSWORD
  - label: pth
    command: |
      evil-winrm -i $IP -u $USER -H $HASH
description: Interactive WinRM shell, by auth method.
os: [Linux]
category: [oscp, cli]
service: [WinRM]
phase: [Exploitation]
references:
  - https://github.com/Hackplayers/evil-winrm
---
```

`os`, `category`, `service`, and `phase` are shared across the whole entry, so
list the union of what the variants need.

### Variables

Anything a user should fill in must be an **`$UPPERCASE`** token, for example
`$IP`, `$USER`, `$PASSWORD`, `$DOMAIN`, `$DCIP`, `$HASH`, `$LHOST`, `$LPORT`.
They are discovered automatically and get a live input box on the site, so reuse
existing names where you can. Lowercase `$word` and PowerShell literals like
`$True` are left untouched.

Do **not** turn fixed paths into variables. Wordlists, for instance, are written
out in full: `/usr/share/wordlists/rockyou.txt`.

### Allowed values

- **os:** `Linux`, `Windows`
- **category:** `oscp`, `cli`
- **service:** `SMB`, `LDAP`, `Kerberos`, `WinRM`, `RDP`, `MSSQL`, `HTTP`, `SNMP`,
  `DNS`, `RPC`, `Redis`, `MySQL`, `SSH`, `AD`, `ADCS`, `WMI`
- **phase:** `Enumeration`, `Exploitation`, `PrivEsc`, `Persistence`, `Cracking`,
  `Pivoting`, `LateralMovement`, `CredAccess`, `InitialAccess`

Need a value that isn't listed? Add it to the matching file in
[`_data/`](_data/) (`os.yml`, `category.yml`, `service.yml`, `phase.yml`) in the
same PR.

### Install-set rules

- `os: [Linux]` means the command is installable and lands in `cli.txt`.
- `os: [Windows]` is cheat-sheet only and is **never** written to a history
  manifest.
- `category: [oscp]` additionally includes it in the OSCP/CPTS install set.

## Running it locally

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
node --test test/          # unit tests for the JS modules, requires Node 18+
```

Please make sure the site builds and the tests pass before opening a PR.

## Style

- Keep commands copy-paste ready and minimal.
- Prefer widely available tooling; link a reference when it isn't obvious.
- No em dashes in any text. Use a comma or a hyphen.
- One command per file; keep the filename short and descriptive.

By contributing you agree that your contribution is licensed under the project's
[LICENSE](LICENSE).
