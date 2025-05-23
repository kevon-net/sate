import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import {
  BackgroundImage,
  Button,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';

export default function Home() {
  return (
    <Carousel
      withIndicators
      withControls={false}
      styles={{
        indicator: {
          width: 8,
          height: 8,
        },
      }}
    >
      {slides.map((cs, i) => (
        <CarouselSlide key={i}>
          <BackgroundImage
            src={cs.image}
            c={'var(--mantine-color-white)'}
            pos={'relative'}
          >
            <LayoutSection id={'hero-home'}>
              <Overlay backgroundOpacity={0.5} style={{ zIndex: 0 }} />

              <Stack
                mih={'100vh'}
                justify="center"
                align={cs.alignment}
                style={{ zIndex: 1 }}
                pos={'relative'}
                gap={'lg'}
              >
                <div>
                  <Title order={1} ta={cs.alignment as any} tt={'uppercase'}>
                    {cs.title}
                  </Title>

                  <Text ta={cs.alignment as any} mt={'xs'}>
                    {cs.desc}
                  </Text>
                </div>

                <Button>Read More</Button>
              </Stack>
            </LayoutSection>
          </BackgroundImage>
        </CarouselSlide>
      ))}
    </Carousel>
  );
}

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Taste Uniquie Food',
    desc: 'Cooking delicious food since 2005',
    alignment: 'start',
  },
  {
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Reserve A Table Now',
    desc: 'Cooking delicious food since 2005',
    alignment: 'center',
  },
  {
    image:
      'https://images.unsplash.com/photo-1577303935007-0d306ee638cf?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Enjoy A Friend's Dinner",
    desc: 'Cooking delicious food since 2005',
    alignment: 'end',
  },
];
