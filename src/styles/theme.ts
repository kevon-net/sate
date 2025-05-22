'use client';

import cx from 'clsx';
import { Container, createTheme } from '@mantine/core';
import classesContainer from './mantine/container.module.scss';

const appTheme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'sm',
  primaryShade: { light: 4, dark: 4 },
  cursorType: 'pointer',

  colors: {
    pri: [
      '#fff3e2',
      '#fee5d0',
      '#f6caa4',
      '#efad74',
      '#e88f42', // src (4)
      '#e68531',
      '#e57d22',
      '#cb6a15',
      '#b65e0e',
      '#9f4f03',
    ],
    sec: [
      '#ffe7e4',
      '#fcc0b8',
      '#f5988a',
      '#ef6f5c',
      '#eb472e',
      '#d22e15',
      '#a32310',
      '#75180a', // src (7)
      '#470c04',
      '#1d0200',
    ],
  },

  components: {
    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: unknown, { size }: { size?: unknown }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),
  },
});

export default appTheme;
