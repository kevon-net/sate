import React from 'react';
import {
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  MenuDivider,
} from '@mantine/core';
import { NavLink } from '@/data/links';
import Link from 'next/link';

export default function Navbar({
  children,
  links,
}: {
  children: React.ReactNode;
  links: NavLink[];
}) {
  return (
    <Menu
      shadow="md"
      width={200}
      trigger="click-hover"
      position="bottom-start"
      withArrow
      arrowOffset={16}
      styles={{
        dropdown: { padding: 0 },
        item: {
          borderRadius: 0,
          paddingTop: 'var(--mantine-spacing-xs)',
          paddingBottom: 'var(--mantine-spacing-xs)',
        },
      }}
    >
      <MenuTarget>
        <div>{children}</div>
      </MenuTarget>

      <MenuDropdown>
        {links.map((sl, i) => (
          <React.Fragment key={i}>
            {i > 0 && <MenuDivider my={0} />}
            <MenuItem component={Link} href={sl.link}>
              {sl.label}
            </MenuItem>
          </React.Fragment>
        ))}
      </MenuDropdown>
    </Menu>
  );
}
