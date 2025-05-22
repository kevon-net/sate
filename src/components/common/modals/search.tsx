'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Divider, Group, Input, Modal, Stack } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@/data/constants';
import { IconSearch, IconX } from '@tabler/icons-react';

export default function Search({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        fullScreen
        padding={0}
        styles={{
          content: { backgroundColor: 'transparent' },
          body: {
            backgroundColor: 'rgba(0,0,0,0.8)',
          },
        }}
      >
        <LayoutSection
          id={'modal-search'}
          containerized={'sm'}
          pos={'relative'}
        >
          <Stack justify="center" h={'100vh'}>
            <Group
              pos={'absolute'}
              justify="end"
              left={'2.5rem'}
              top={'2.5rem'}
              right={'2.5rem'}
            >
              <ActionIcon
                size={ICON_WRAPPER_SIZE}
                variant="transparent"
                color="gray"
                onClick={close}
              >
                <IconX
                  size={ICON_WRAPPER_SIZE * 1.5}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            </Group>

            <Group grow preventGrowOverflow={false}>
              <Input
                placeholder="Search"
                variant="unstyled"
                size="xl"
                styles={{
                  input: {
                    color: 'var(--mantine-color-body)',
                  },
                }}
              />

              <ActionIcon size={60} maw={60} variant="transparent" color="gray">
                <IconSearch
                  size={ICON_WRAPPER_SIZE * 1.5}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            </Group>

            <Divider />
          </Stack>
        </LayoutSection>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}
