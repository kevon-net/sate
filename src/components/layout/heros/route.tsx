import React from 'react';
import LayoutSection from '../section';
import { appName } from '@/data/app';
import {
  BackgroundImage,
  Divider,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { getRandomIntInRange } from '@/utilities/generators/number';
import { IconCircleFilled } from '@tabler/icons-react';
import { ICON_STROKE_WIDTH } from '@/data/constants';
import DividerCircle from '@/components/common/dividers/circle';

export default function Route({
  props,
}: {
  props: { title: string; desc: string };
}) {
  return (
    <LayoutSection id={'hero-home'} containerized={false}>
      <BackgroundImage
        src={images[getRandomIntInRange(1, images.length) - 1]}
        c={'var(--mantine-color-white)'}
        pos={'relative'}
      >
        <LayoutSection id={'hero-home'}>
          <Overlay backgroundOpacity={0.5} style={{ zIndex: 0 }} />

          <Stack
            mih={'70vh'}
            justify="center"
            align={'center'}
            style={{ zIndex: 1 }}
            pos={'relative'}
            gap={'lg'}
          >
            <DividerCircle />

            <div>
              <Title order={1} ta={'center'}>
                {props.title}
              </Title>

              <Text ta={'center'} mt={'xs'}>
                {props.desc}
              </Text>
            </div>
          </Stack>
        </LayoutSection>
      </BackgroundImage>
    </LayoutSection>
  );
}

const images = [
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  `https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
];
