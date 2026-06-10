import { extractVariables, substitute } from "./substitute.mjs";
import { parseQuery, matchesFilters, matchesSearch } from "./filter.mjs";

const STORAGE_KEY = "0xrefs.vars";
const THEME_KEY = "0xrefs.theme";
const PRIORITY = ["IP", "USER", "PASSWORD", "DOMAIN", "DCIP", "HASH", "LHOST", "LPORT"];

const rows = [...document.querySelectorAll(".cmd-row")];
const cmdTexts = [...document.querySelectorAll(".cmd-text")];
const variantTabs = [...document.querySelectorAll(".variant-tab")];
const values = loadValues();
const activeFilters = new Set();

const allTemplates = [...cmdTexts.map(templateOf), ...variantTabs.map((t) => t.dataset.command)];
const discovered = extractVariables(allTemplates);
const varPattern = discovered.length
  ? new RegExp("\\$(" + discovered.join("|") + ")(?![A-Za-z0-9_])", "g")
  : null;

init();

function init() {
  wireTheme();
  buildVariableBar();
  wireCopyButtons();
  wireInstall();
  wireVariants();
  wireFilters();
  wireSearch();
  wireShortcuts();
  applyHashFilters();
  renderCommands();
  applyFilters();
}

function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
}

function loadValues() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveValues() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

function templateOf(el) {
  return el.dataset.command || el.closest("[data-command]")?.dataset.command || "";
}

function buildVariableBar() {
  const bar = document.getElementById("variable-bar");
  if (!bar) return;
  const ordered = [
    ...PRIORITY.filter((v) => discovered.includes(v)),
    ...discovered.filter((v) => !PRIORITY.includes(v)).sort(),
  ];

  for (const name of ordered) {
    const field = document.createElement("label");
    field.className = "var-field";
    field.innerHTML = `<span>$${name}</span>`;
    const input = document.createElement("input");
    input.type = "text";
    input.value = values[name] || "";
    input.placeholder = name.toLowerCase();
    input.addEventListener("input", () => {
      values[name] = input.value;
      saveValues();
      renderCommands();
    });
    field.appendChild(input);
    bar.appendChild(field);
  }

  if (ordered.length) {
    const clear = document.createElement("button");
    clear.id = "clear-vars";
    clear.type = "button";
    clear.className = "pill clear-vars";
    clear.textContent = "clear vars";
    clear.hidden = true;
    clear.addEventListener("click", () => {
      for (const name of Object.keys(values)) values[name] = "";
      saveValues();
      for (const input of bar.querySelectorAll("input")) input.value = "";
      renderCommands();
    });
    bar.appendChild(clear);
  }
}

function renderOne(el) {
  const filled = substitute(templateOf(el), values);
  let html = escapeHtml(filled);
  if (varPattern) {
    html = html.replace(varPattern, (m) => `<span class="var-token">${m}</span>`);
  }
  el.innerHTML = html;
}

function renderCommands() {
  for (const el of cmdTexts) renderOne(el);
  const clear = document.getElementById("clear-vars");
  if (clear) clear.hidden = !Object.values(values).some((v) => v && v.trim());
}

function activateVariant(tab) {
  const group = tab.closest(".cmd-group");
  const cmdText = group?.querySelector(".cmd-text");
  if (!cmdText) return;
  cmdText.dataset.command = tab.dataset.command;
  for (const t of group.querySelectorAll(".variant-tab")) {
    const on = t === tab;
    t.classList.toggle("active", on);
    t.setAttribute("aria-pressed", on);
  }
  renderOne(cmdText);
}

function wireVariants() {
  for (const tab of variantTabs) {
    tab.addEventListener("click", () => activateVariant(tab));
  }
}

// Indicators that a single command line uses a given credential material.
const HAVE_PATTERNS = {
  hash: /-hashes|--pw-nt-hash|\/pth:|\s-H(\s|$)|\$HASH/,
  ticket: /-no-pass|--ccache|\.ccache|\.kirbi|KRB5CCNAME|ssh -K/,
  cert: /\.pfx|\.pem/,
};

// When a "what you have" filter is on, switch each visible command to the
// variant tab that actually uses that credential.
function autoSelectVariant() {
  const haves = [...activeFilters].filter((v) => HAVE_PATTERNS[v]);
  if (!haves.length) return;
  for (const row of rows) {
    if (row.hidden) continue;
    const tabs = [...row.querySelectorAll(".variant-tab")];
    if (!tabs.length) continue;
    for (const have of haves) {
      const tab = tabs.find((t) => HAVE_PATTERNS[have].test(t.dataset.command));
      if (tab) {
        activateVariant(tab);
        break;
      }
    }
  }
}

function wireCopyButtons() {
  for (const btn of document.querySelectorAll(".copy-btn")) {
    btn.addEventListener("click", async () => {
      const target = btn.dataset.copyTarget
        ? document.getElementById(btn.dataset.copyTarget)
        : btn.closest(".cmd-row")?.querySelector(".cmd-text") ||
          document.querySelector(".cmd-text");
      if (!target) return;
      await navigator.clipboard.writeText(target.textContent);
      btn.textContent = "copied";
      setTimeout(() => (btn.textContent = "copy"), 1200);
    });
  }
}

function wireInstall() {
  const box = document.getElementById("install");
  if (!box) return;
  const cmdEl = document.getElementById("install-cmd");
  const baseUrl = box.dataset.baseUrl || location.origin;
  const choice = { set: "cli", shell: "zsh" };

  const update = () => {
    cmdEl.textContent = `curl -s ${baseUrl}/install.sh | bash -s -- ${choice.set} ${choice.shell}`;
  };

  for (const attr of ["set", "shell"]) {
    const buttons = [...box.querySelectorAll(`[data-${attr}]`)];
    const mark = () => {
      for (const btn of buttons) {
        const on = btn.dataset[attr] === choice[attr];
        btn.classList.toggle("active", on);
        btn.setAttribute("aria-pressed", on);
      }
    };
    for (const btn of buttons) {
      btn.addEventListener("click", () => {
        choice[attr] = btn.dataset[attr];
        mark();
        update();
      });
    }
    mark();
  }

  update();
}

function wireFilters() {
  for (const cb of document.querySelectorAll('#filters input[type="checkbox"]')) {
    cb.addEventListener("change", () => setFilter(cb.dataset.value, cb.checked));
  }
  for (const pill of document.querySelectorAll(".filter-list .pill")) {
    pill.addEventListener("click", () => {
      const row = pill.closest(".cmd-row");
      if (row) {
        const link = row.querySelector(".cmd-link");
        if (link) location.href = link.href;
      } else {
        location.href = "/#+" + pill.dataset.value;
      }
    });
  }
  document.getElementById("clear-filters")?.addEventListener("click", clearAllFilters);
}

function clearAllFilters() {
  activeFilters.clear();
  const search = document.getElementById("search");
  if (search) search.value = "";
  history.replaceState(null, "", location.pathname);
  syncFilterUI();
  applyFilters();
}

function setFilter(value, on) {
  if (!value) return;
  if (on) activeFilters.add(value);
  else activeFilters.delete(value);
  syncFilterUI();
  applyFilters();
}

function toggleFilter(value) {
  setFilter(value, !activeFilters.has(value));
}

function syncFilterUI() {
  for (const cb of document.querySelectorAll('#filters input[type="checkbox"]')) {
    cb.checked = activeFilters.has(cb.dataset.value);
  }
  for (const pill of document.querySelectorAll(".filter-list .pill")) {
    pill.classList.toggle("active", activeFilters.has(pill.dataset.value));
  }
}

function applyHashFilters() {
  const hash = decodeURIComponent(location.hash.slice(1));
  for (const token of hash.split("+")) {
    const value = token.trim().toLowerCase();
    if (value) activeFilters.add(value);
  }
  syncFilterUI();
}

function wireSearch() {
  const search = document.getElementById("search");
  if (search) search.addEventListener("input", applyFilters);
}

function applyFilters() {
  if (!rows.length) return;
  const search = document.getElementById("search");
  const { text, filters } = parseQuery(search ? search.value : "");
  const allFilters = [...new Set([...activeFilters, ...filters])];

  let visible = 0;
  for (const row of rows) {
    const tags = row.dataset.tags.split(/\s+/).filter(Boolean);
    const cmdText = row.querySelector(".cmd-text").textContent;
    const show = matchesFilters(tags, allFilters) && matchesSearch(cmdText, text);
    row.hidden = !show;
    if (show) visible++;
  }
  const empty = document.getElementById("no-results");
  if (empty) empty.hidden = visible !== 0;

  const count = document.getElementById("result-count");
  if (count) count.textContent = `showing ${visible} of ${rows.length}`;
  const clear = document.getElementById("clear-filters");
  if (clear) {
    const active = activeFilters.size > 0 || (search && search.value.trim().length > 0);
    clear.hidden = !active;
  }

  autoSelectVariant();
}

function wireShortcuts() {
  const search = document.getElementById("search");
  if (!search) return;
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      clearAllFilters();
      search.blur();
      return;
    }
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length === 1) search.focus();
  });
}

function wireTheme() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  const setLabel = () =>
    (toggle.textContent =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  setLabel();
  toggle.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    if (dark) document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem(THEME_KEY, dark ? "light" : "dark");
    setLabel();
  });
}
