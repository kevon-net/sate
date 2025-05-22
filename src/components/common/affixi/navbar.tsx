'use client';

import React from 'react';
import { Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import NavbarMain from '@/components/layout/navbars/main';

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [scroll] = useWindowScroll();

  return (
    <Affix position={{ left: 0, top: 0, right: 0 }}>
      <Transition transition={'slide-down'} mounted={true}>
        {(styles) => (
          <div style={styles}>
            {children || (
              <NavbarMain type={scroll.y > 0 ? 'affix' : undefined} />
            )}
          </div>
        )}
      </Transition>
    </Affix>
  );
}
