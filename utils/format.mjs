export const formatMenu = (alternatives, logo) =>
  `\n${alternatives.map(
    e => `${logo ? '%c' : ''}\n ${e.name} command: ${e.command}`
  )}`;
