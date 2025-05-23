import React from 'react';
import { Card, Center, Overlay, Stack, Text, Title } from '@mantine/core';
import ImageDefault from '../images/default';
import classes from './hero.module.scss';

export default function Hero({
  props,
}: {
  props: { title: string; desc: string; image: string };
}) {
  return (
    <Card className={classes.card} padding={0} radius={0}>
      <Center className={classes.image}>
        <ImageDefault
          src={props.image}
          alt={props.title}
          height={320}
          width={'100%'}
        />
      </Center>

      <Overlay backgroundOpacity={0.5} style={{ zIndex: 1 }} />

      <Stack
        className={classes.content}
        c={'var(--mantine-color-body)'}
        py={'xl'}
        mih={260}
        justify="center"
        gap={'xs'}
      >
        <Title
          order={1}
          ta={'center'}
          fz={'var(--mantine-h2-font-size)'}
          tt={'uppercase'}
        >
          {props.title}
        </Title>

        <Text ta={'center'}>{props.desc}</Text>
      </Stack>
    </Card>
  );
}
