import { test } from "node:test";
import assert from "node:assert/strict";
import { extractVariables, substitute } from "../assets/js/substitute.mjs";

test("extractVariables collects each uppercase token once", () => {
  const vars = extractVariables([
    "evil-winrm -i $IP -u $USER",
    "nxc smb $IP -u $USER -p $PASSWORD",
  ]);
  assert.deepEqual(vars.sort(), ["IP", "PASSWORD", "USER"]);
});

test("extractVariables skips lowercase words and PowerShell literals", () => {
  const vars = extractVariables([
    "awk '{print $2}'",
    "Get-ADUser -Filter {Enabled -eq $True} -spn $TICKET",
  ]);
  assert.deepEqual(vars, ["TICKET"]);
});

test("substitute fills known values and leaves the rest alone", () => {
  const out = substitute("evil-winrm -i $IP -u $USER -p $PASSWORD", {
    IP: "10.10.10.5",
    USER: "amin",
  });
  assert.equal(out, "evil-winrm -i 10.10.10.5 -u amin -p $PASSWORD");
});

test("substitute does not touch $True", () => {
  const cmd = "Get-ADUser -Filter {Enabled -eq $True}";
  assert.equal(substitute(cmd, { T: "x" }), cmd);
});

test("substitute treats an empty value as unfilled", () => {
  assert.equal(substitute("ssh $USER@$IP", { USER: "", IP: "10.0.0.1" }), "ssh $USER@10.0.0.1");
});
