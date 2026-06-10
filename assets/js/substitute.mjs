const TOKEN = /\$[A-Z][A-Z0-9_]*(?![a-zA-Z0-9_])/g;

export function extractVariables(commands) {
  const names = new Set();
  for (const command of commands) {
    const matches = command.match(TOKEN);
    if (matches) for (const m of matches) names.add(m.slice(1));
  }
  return [...names];
}

export function substitute(command, values) {
  return command.replace(TOKEN, (token) => {
    const value = values[token.slice(1)];
    return value ? value : token;
  });
}
