import React from 'react';
import LayoutSection from '../section';
import { ActionIcon, Anchor, Button, Group, Indicator } from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { appName } from '@/data/app';
import { navLinks } from '@/data/links';
import {
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
} from '@tabler/icons-react';
import { ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@/data/constants';
import classes from './main.module.scss';

export default function Main({ type }: { type?: 'affix' }) {
  return (
    <LayoutSection
      id={'footer-main'}
      padded={'sm'}
      className={`${classes.navbar} ${type == 'affix' ? classes.navbarAffix : ''}`}
    >
      <Group justify="space-between">
        <div>
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
        </div>

        <Group gap={'md'} justify="end">
          <Group gap={'sm'}>
            {navLinks.map((nl, i) => (
              <Anchor
                key={i}
                href={nl.link}
                underline="never"
                className={`${classes.link} ${type == 'affix' ? classes.linkAffix : ''}`}
              >
                {nl.label}
              </Anchor>
            ))}

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
            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              variant={'transparent'}
              color={
                type == 'affix'
                  ? 'var(--mantine-color-text)'
                  : 'var(--mantine-color-body)'
              }
            >
              <IconSearch size={ICON_WRAPPER_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

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
          </Group>
        </Group>
      </Group>
    </LayoutSection>
  );
}
