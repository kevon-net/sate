import React from 'react';
import { ICON_STROKE_WIDTH } from '@/data/constants';
import { Divider, Group } from '@mantine/core';

export default function Three() {
  return (
    <Group gap={0}>
      <Divider size={ICON_STROKE_WIDTH} w={{ base: 40, lg: 60 }} color="pri" />
      <Divider size={ICON_STROKE_WIDTH} w={{ base: 40, lg: 60 }} />
    </Group>
  );
}
