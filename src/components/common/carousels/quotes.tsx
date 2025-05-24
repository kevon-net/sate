import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import {
  BackgroundImage,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '../images/default';
import { SECTION_SPACING } from '@/data/constants';

export default function Quotes() {
  return (
    <Carousel
      withIndicators
      withControls={false}
      styles={{
        indicator: {
          width: 10,
          height: 10,
        },
      }}
    >
      {slides.map((cs, i) => (
        <CarouselSlide key={i} px={5} pb={SECTION_SPACING}>
          <Card
            bg={'var(--mantine-color-dark-7)'}
            c={'var(--mantine-color-white)'}
            padding={SECTION_SPACING / 1.5}
          >
            <Grid>
              <GridCol span={{ base: 12, md: 4 }}>
                <Group>
                  <ImageDefault
                    src={cs.image}
                    alt={'signature'}
                    height={{ lg: 80 }}
                    width={{ lg: 80 }}
                    radius={'50%'}
                  />

                  <div>
                    <Title order={2} fz={'sm'} fw={500}>
                      {cs.title}
                    </Title>
                    <Text fz={'xs'}>{cs.date}</Text>
                  </div>
                </Group>
              </GridCol>

              <GridCol span={{ base: 12, md: 0.5 }}>
                <Flex h={'100%'}>
                  <Divider hiddenFrom="md" />
                  <Divider orientation="vertical" visibleFrom="md" h={'100%'} />
                </Flex>
              </GridCol>

              <GridCol span={{ base: 12, md: 7.5 }}>
                <Text>{cs.desc}</Text>
              </GridCol>
            </Grid>
          </Card>
        </CarouselSlide>
      ))}
    </Carousel>
  );
}

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Roberta',
    date: '19 May',
    desc: 'No nam indoctum accommodare, vix ei discere civibus philosophia. Vis ea dicant diceret ocurreret.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1625642003187-573001b8a881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mike',
    date: '12 Jan',
    desc: 'No nam indoctum accommodare, vix ei discere civibus philosophia. Vis ea dicant diceret ocurreret.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Richard',
    date: '26 Oct',
    desc: 'No nam indoctum accommodare, vix ei discere civibus philosophia. Vis ea dicant diceret ocurreret.',
  },
];
