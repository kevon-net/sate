export type Link = {
  link: string;
  label: string;
};

export type NavLink = {
  link: string;
  label: string;
  subLinks?: Link[];
};

export const navLinks: NavLink[] = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/blog',
    label: 'Blog',
  },
  {
    link: '/shop',
    label: 'Shop',
  },
  {
    link: '/levels',
    label: 'Levels',
    subLinks: [
      {
        link: '/level1',
        label: 'Level1',
      },
      {
        link: '/level2',
        label: 'Level2',
      },
    ],
  },
];
