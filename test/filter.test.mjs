import { test } from "node:test";
import assert from "node:assert/strict";
import { parseQuery, matchesFilters, matchesSearch } from "../assets/js/filter.mjs";

test("parseQuery splits the search term from its +filters", () => {
  assert.deepEqual(parseQuery("nmap +linux +oscp"), {
    text: "nmap",
    filters: ["linux", "oscp"],
  });
});

test("parseQuery handles a bare term and bare filters", () => {
  assert.deepEqual(parseQuery("smb"), { text: "smb", filters: [] });
  assert.deepEqual(parseQuery("+windows +kerberos"), {
    text: "",
    filters: ["windows", "kerberos"],
  });
});

test("matchesFilters needs every active filter present", () => {
  const tags = ["linux", "smb", "enumeration"];
  assert.ok(matchesFilters(tags, ["linux", "smb"]));
  assert.ok(!matchesFilters(tags, ["linux", "rdp"]));
  assert.ok(matchesFilters(tags, []));
});

test("matchesSearch is a case-insensitive substring, empty matches all", () => {
  assert.ok(matchesSearch("Impacket-GetUserSPNs", "getuser"));
  assert.ok(!matchesSearch("nxc smb", "winrm"));
  assert.ok(matchesSearch("anything", ""));
});
