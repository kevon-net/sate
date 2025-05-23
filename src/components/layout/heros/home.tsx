import React from 'react';
import LayoutSection from '../section';
import CarouselHome from '@/components/common/carousels/home';
import { appName } from '@/data/app';
import CardHero from '@/components/common/cards/hero';
import { Anchor, Grid, GridCol } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <LayoutSection id={'hero-home'} containerized={false}>
      <CarouselHome />

      <Grid gutter={0} mt={5}>
        {cardContent.map((cc, i) => (
          <GridCol
            key={i}
            span={{ md: 4 }}
            py={{ base: i == 1 ? 5 : 0, md: 0 }}
            px={{ md: i == 1 ? 5 : 0 }}
          >
            <Anchor component={Link} href={cc.link} underline="never">
              <CardHero props={cc} />
            </Anchor>
          </GridCol>
        ))}
      </Grid>
    </LayoutSection>
  );
}

const cardContent = [
  {
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Our Menu',
    desc: 'View Our Specialities',
    link: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Delivery',
    desc: 'Home Delivery or Take Away Food',
    link: '',
  },
  {
    image: `https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    title: `Inside ${appName}`,
    desc: 'View the Gallery',
    link: '',
  },
];
