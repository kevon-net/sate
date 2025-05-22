'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  ActionIcon,
  Divider,
  Drawer,
  Group,
  NavLink,
  Paper,
} from '@mantine/core';
import ImageDefault from '../images/default';
import { images } from '@/assets/images';
import { appName } from '@/data/app';
import { ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@/data/constants';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { navLinks } from '@/data/links';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{ body: { padding: 0 } }}
      >
        <Paper bg={'pri'} radius={0} pos={'relative'}>
          <Group justify="center" py={'md'}>
            <ImageDefault
              src={images.brand.logo.meta.dark}
              alt={appName}
              height={45}
              width={130}
              fit={'contain'}
            />
          </Group>

          <ActionIcon
            size={ICON_WRAPPER_SIZE}
            variant="transparent"
            color="white"
            onClick={close}
            pos={'absolute'}
            top={'0.75rem'}
            right={'0.75rem'}
          >
            <IconX size={ICON_WRAPPER_SIZE * 1.5} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        </Paper>

        <div>
          {navLinks.map((nl, i) => {
            if (!nl.subLinks)
              return (
                <React.Fragment key={i}>
                  {i > 0 && <Divider />}

                  <NavLink
                    component={Link}
                    href={nl.link}
                    label={nl.label}
                    py={'md'}
                    fw={500}
                  />
                </React.Fragment>
              );

            const sublinks = nl.subLinks.map((sl, sli) => (
              <React.Fragment key={sli}>
                {sli > 0 && <Divider />}

                <NavLink
                  component={Link}
                  href={sl.link}
                  label={sl.label}
                  py={'md'}
                  fw={500}
                />
              </React.Fragment>
            ));

            return (
              <React.Fragment key={i}>
                {i > 0 && <Divider />}

                <NavLink
                  component={Link}
                  href={nl.link}
                  label={nl.label}
                  py={'md'}
                  fw={500}
                >
                  {sublinks}
                </NavLink>
              </React.Fragment>
            );
          })}
        </div>
      </Drawer>

      <div onClick={open}>{children}</div>
    </>
  );
}
