import React from 'react';
import LayoutSection from '../section';
import {
  ActionIcon,
  Anchor,
  Burger,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Indicator,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { appName } from '@/data/app';
import { navLinks } from '@/data/links';
import { IconSearch, IconShoppingBag } from '@tabler/icons-react';
import { ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@/data/constants';
import ModalSearch from '@/components/common/modals/search';
import MenuCart from '@/components/common/menu/cart';
import DrawerNavbar from '@/components/common/drawers/navbar';
import MenuNavbar from '@/components/common/menu/navbar';
import classes from './main.module.scss';

export default function Main({ type }: { type?: 'affix' }) {
  return (
    <LayoutSection
      id={'footer-main'}
      padded={'sm'}
      className={`${classes.navbar} ${type == 'affix' ? classes.navbarAffix : ''}`}
    >
      <Grid align="center" gutter={0}>
        <GridCol span={3} hiddenFrom="md">
          <Group>
            <DrawerNavbar>
              <Burger
                p={0}
                size={'sm'}
                color={
                  type == 'affix'
                    ? 'var(--mantine-color-text)'
                    : 'var(--mantine-color-body)'
                }
              />
            </DrawerNavbar>
          </Group>
        </GridCol>

        <GridCol span={{ base: 6, md: 3 }}>
          <Flex justify={{ base: 'center', md: 'start' }}>
            <ImageDefault
              src={
                type == 'affix'
                  ? images.brand.logo.meta.light
                  : images.brand.logo.meta.dark
              }
              alt={appName}
              height={45}
              width={130}
              fit={'contain'}
            />
          </Flex>
        </GridCol>

        <GridCol span={{ base: 3, md: 9 }}>
          <Group gap={'md'} justify="end">
            <Group visibleFrom="md">
              {navLinks.map((nl, i) => {
                const link = (
                  <Anchor
                    key={i}
                    href={nl.link}
                    underline="never"
                    className={`${classes.link} ${type == 'affix' ? classes.linkAffix : ''}`}
                  >
                    {nl.label}
                  </Anchor>
                );

                if (!nl.subLinks) return link;

                return (
                  <MenuNavbar key={i} links={nl.subLinks}>
                    {link}
                  </MenuNavbar>
                );
              })}

              <Button
                color={
                  type == 'affix'
                    ? 'var(--mantine-color-text)'
                    : 'var(--mantine-color-body)'
                }
                variant={type == 'affix' ? 'filled' : 'outline'}
                size="xs"
              >
                Reservations
              </Button>
            </Group>

            <Group gap={5}>
              <ModalSearch>
                <Group>
                  <ActionIcon
                    size={ICON_WRAPPER_SIZE}
                    variant={'transparent'}
                    color={
                      type == 'affix'
                        ? 'var(--mantine-color-text)'
                        : 'var(--mantine-color-body)'
                    }
                  >
                    <IconSearch
                      size={ICON_WRAPPER_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>
                </Group>
              </ModalSearch>

              <MenuCart>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE}
                  variant={'transparent'}
                  style={{ overflow: 'visible' }}
                  color={
                    type == 'affix'
                      ? 'var(--mantine-color-text)'
                      : 'var(--mantine-color-body)'
                  }
                >
                  <Indicator
                    inline
                    label="5"
                    size={16}
                    position="bottom-end"
                    offset={4}
                  >
                    <Group>
                      <IconShoppingBag
                        size={ICON_WRAPPER_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </Group>
                  </Indicator>
                </ActionIcon>
              </MenuCart>
            </Group>
          </Group>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
