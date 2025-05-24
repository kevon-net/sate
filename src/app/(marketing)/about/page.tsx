import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intros/page';
import { companyName } from '@/data/app';
import HeroRoute from '@/components/layout/heros/route';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import IntroSection from '@/components/layout/intros/section';
import { images } from '@/assets/images';
import {
  Box,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import DividerFlatThree from '@/components/common/dividers/flat/three';
import DividerFlatTwo from '@/components/common/dividers/flat/two';
import CarouselQuotes from '@/components/common/carousels/quotes';

export const metadata: Metadata = { title: 'About' };

export default async function About() {
  return (
    <LayoutPage>
      <HeroRoute
        props={{ title: 'About Us', desc: 'Cooking delicious food since 2005' }}
      />

      <LayoutSection
        id={'about'}
        padded={SECTION_SPACING * 2}
        containerized={'sm'}
        style={{
          backgroundImage: `url(${images.bg.pattern.menu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <IntroSection
          props={{
            title: 'Our Story',
            desc: 'Cum doctus civibus efficiantur in ex paulo elaboraret.',
            subTitle: (
              <Group justify="center">
                <DividerFlatThree />
              </Group>
            ),
          }}
        />

        <Stack mt={'md'} c={'dimmed'} fz={'sm'} ta={'center'}>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Group justify="center">
            <ImageDefault
              src={images.signature}
              alt={'signature'}
              height={{ lg: 40 }}
              width={{ lg: 120 }}
              fit={'contain'}
              mt={'md'}
            />
          </Group>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id={'why'}
        padded={SECTION_SPACING * 2}
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={{ base: 'xl', md: 0 }} align="center">
          <GridCol span={{ base: 12, md: 6 }}>
            <Grid>
              <GridCol span={{ md: 6 }}>
                <Stack>
                  <WhyCard props={whyUs[0]} />
                  <WhyCard props={whyUs[1]} />
                </Stack>
              </GridCol>
              <GridCol span={{ md: 6 }}>
                <Stack>
                  <WhyCard props={whyUs[2]} />
                </Stack>
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }} pl={{ lg: SECTION_SPACING * 2 }}>
            <IntroSection
              props={{
                title: 'Why Choose Foore',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.',
                subTitle: <DividerFlatTwo />,
              }}
              options={{ alignment: 'start' }}
            />

            <Stack mt={'md'} c={'dimmed'} fz={'sm'} align="start">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <Button mt={'md'}>Reserve a Table</Button>
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id={'quote'}
        padded={SECTION_SPACING * 2}
        c={'var(--mantine-color-white)'}
        pos={'relative'}
        containerized={'sm'}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Overlay backgroundOpacity={0.5} style={{ zIndex: 0 }} />

        <Box style={{ position: 'relative', zIndex: 1 }}>
          <IntroSection
            props={{ title: 'What Our Clients Say' }}
            options={{ spacing: true }}
          />

          <CarouselQuotes />
        </Box>
      </LayoutSection>
    </LayoutPage>
  );
}

function WhyCard({ props }: { props: (typeof whyUs)[0] }) {
  return (
    <Card padding={'xl'} shadow="sm">
      <Stack align="center" ta={'center'}>
        <ImageDefault
          src={props.image}
          alt={props.title}
          height={{ lg: 80 }}
          width={{ lg: 80 }}
          fit={'contain'}
        />

        <Title order={2} fz={'xl'} fw={500}>
          {props.title}
        </Title>

        <Text fz={'sm'} c={'dimmed'}>
          {props.desc}
        </Text>
      </Stack>
    </Card>
  );
}

const whyUs = [
  {
    image:
      'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/256/external-Cook-Book-books-bearicons-detailed-outline-bearicons.png',
    title: 'For Every Taste',
    desc: 'Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.',
  },
  {
    image: 'https://img.icons8.com/parakeet-line/144/rice-bowl.png',
    title: 'Fresh Ingredients',
    desc: 'Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum.',
  },
  {
    image: 'https://img.icons8.com/parakeet-line/256/cook-male.png',
    title: 'Experienced Chefs',
    desc: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.',
  },
];
