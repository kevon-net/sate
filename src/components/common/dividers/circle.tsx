import React from 'react';
import { ICON_STROKE_WIDTH } from '@/data/constants';
import { Divider, Group } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';

export default function Circle() {
  return (
    <Group gap={5}>
      <Group gap={0}>
        <IconCircleFilled size={4} />
        <Divider w={32} h={ICON_STROKE_WIDTH} />
        <IconCircleFilled size={4} />
      </Group>

      <IconCircleFilled size={16} />

      <Group gap={0}>
        <IconCircleFilled size={4} />
        <Divider w={32} h={ICON_STROKE_WIDTH} />
        <IconCircleFilled size={4} />
      </Group>
    </Group>
  );
}
