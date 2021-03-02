const fs = require('fs');
const cssbeautify = require('cssbeautify');
const spacingValues = [0, 4, 8, 12, 16, 24, 32, 40, 48, 72];

const generateVars = measure => {
  return `--spacing-${measure}: ${measure / 16}rem;`;
};

const genSpacingElement = (d, m, bp, type) => {
  const typeLetter = type.charAt(0);
  switch (d) {
    case 'l':
      return `.${typeLetter}${d}${m}${bp} { ${type}-left: var(--spacing-${m}); }`;
      break;
    case 'r':
      return `.${typeLetter}${d}${m}${bp} { ${type}-right: var(--spacing-${m}); }`;
      break;
    case 'b':
      return `.${typeLetter}${d}${m}${bp} { ${type}-bottom: var(--spacing-${m}); }`;
      break;
    case 't':
      return `.${typeLetter}${d}${m}${bp} { ${type}-top: var(--spacing-${m}); }`;
      break;
    case 'v':
      return `.${typeLetter}${d}${m}${bp} {
        ${type}-top: var(--spacing-${m});
        ${type}-bottom: var(--spacing-${m});
      }`;
      break;
    case 'h':
      return `.${typeLetter}${d}${m}${bp} {
        ${type}-left: var(--spacing-${m});
        ${type}-right: var(--spacing-${m});
      }`;
      break;
    default:
      return `.${typeLetter}${d}${m}${bp} { ${type}: var(--spacing-${m}); }`;
  }
};

const genSpacing = (bp = '', type = 'padding') => {
  const directions = ['a', 'l', 'r', 'b', 't', 'v', 'h'];
  const pd = directions.map(d => spacingValues.map(it => genSpacingElement(d, it, bp, type)).join('\n'));
  return pd.join('\n');
};

const generateHeaders = () => {
  return `/* Variables */

  :root {
    ${spacingValues.map(generateVars).join('\n')}
  }

  ${genSpacing('')}

  ${genSpacing('', 'margin')}

  @media (--breakpoint-not-small) {
    ${genSpacing('-ns')}

    ${genSpacing('-ns', 'margin')}
  }

  @media (--breakpoint-medium) {
    ${genSpacing('-m')}

    ${genSpacing('-m', 'margin')}
  }

  @media (--breakpoint-large) {
    ${genSpacing('-l')}

    ${genSpacing('-l', 'margin')}
  }
`;
};

const source = cssbeautify(generateHeaders());
fs.writeFileSync('./src/_spacing-gen.css', source, 'utf-8');
