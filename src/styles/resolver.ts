'use client';

import { CSSVariablesResolver } from '@mantine/core';

const appResolver: CSSVariablesResolver = (theme) => ({
  variables: {},

  light: {
    '--mantine-color-body': `${theme.white}`,
    '--mantine-color-dimmed': `var(--mantine-color-dark-3)`,
    '--mantine-color-text': `var(--mantine-color-dark-6)`,
    '--mantine-color-default-border': `var(--mantine-color-gray-2)`,
  },

  dark: {
    '--mantine-color-body': `${theme.black}`,
    '--mantine-color-dimmed': `var(--mantine-color-dark-3)`,
    '--mantine-color-text': `var(--mantine-color-dark-0)`,
    '--mantine-color-default-border': `var(--mantine-color-gray-2)`,
  },
});

export default appResolver;
