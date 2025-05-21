import React from 'react';
import { Box, Divider, Flex } from '@mantine/core';
import { Body as typeBody, Widths } from '@/types/layout';
import LayoutSection from './section';

export default function Body({
  children,
  bar,
  header,
  nav,
  hero,
  aside,
  footer,
}: typeBody) {
  const handleAside = (side: React.ReactNode, width?: Widths) => (
    <Box
      component="aside"
      visibleFrom="md"
      w={
        width
          ? { md: `${width.md}%`, lg: `${width.lg}%` }
          : { md: `${33}%`, lg: `${25}%` }
      }
    >
      {side}
    </Box>
  );

  const widthMain = {
    md:
      100 -
      ((aside?.left?.width?.md ? aside?.left?.width.md : 0) +
        (aside?.right?.width?.md ? aside?.right?.width.md : 0)),
    lg:
      100 -
      ((aside?.left?.width?.lg ? aside?.left?.width.lg : 0) +
        (aside?.right?.width?.lg ? aside?.right?.width.lg : 0)),
  };

  return (
    <>
      {bar && bar}
      {header && header}
      {nav && nav}
      {hero && hero}
      {aside ? (
        <LayoutSection
          component={'article'}
          id="layout-body-section"
          margined={aside.left?.withBorder || aside.right?.withBorder}
        >
          <Flex gap={aside.gap ? aside.gap : 'xl'}>
            {aside.left && handleAside(aside.left.component, aside.left.width)}
            {aside.left?.withBorder && (
              <Divider orientation="vertical" visibleFrom="md" />
            )}
            <Box
              w={{
                base: '100%',
                md: `${widthMain.md}%`,
                lg: `${widthMain.lg}%`,
              }}
            >
              {children}
            </Box>
            {aside.right?.withBorder && (
              <Divider orientation="vertical" visibleFrom="md" />
            )}
            {aside.right &&
              handleAside(aside.right.component, aside.right.width)}
          </Flex>
        </LayoutSection>
      ) : (
        children
      )}
      {footer && footer}
    </>
  );
}
