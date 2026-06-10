export function parseQuery(query) {
  const parts = query.toLowerCase().trim().split("+").map((p) => p.trim());
  return { text: parts[0] || "", filters: parts.slice(1).filter(Boolean) };
}

export function matchesFilters(tags, activeFilters) {
  return activeFilters.every((f) => tags.includes(f));
}

export function matchesSearch(text, query) {
  if (!query) return true;
  return text.toLowerCase().includes(query.toLowerCase());
}
