import React from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from './menu.module.scss';
import ImageDefault from '../../images/default';
import { SECTION_SPACING } from '@/data/constants';
import { images } from '@/assets/images';

export default function Menu() {
  return (
    <Card className={classes.card} padding={0}>
      <BackgroundImage
        src={
          'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        p={{ base: 'md', md: SECTION_SPACING }}
      >
        <Overlay backgroundOpacity={0.5} style={{ zIndex: 1 }} />

        <Box className={classes.content} c={'var(--mantine-color-body)'}>
          <Grid align={'center'}>
            <GridCol span={{ lg: 6 }}>
              <Stack>
                <div>
                  <Text component={'span'}>Special Offer</Text>

                  <Title
                    order={1}
                    fz={{
                      base: 'xl',
                      md: 'var(--mantine-h2-font-size)',
                      lg: 'var(--mantine-h1-font-size)',
                    }}
                    tt={'uppercase'}
                    my={{ base: 'md', md: 0 }}
                  >
                    Burgher Menu $18 only
                  </Title>

                  <Text fz={{ base: 'sm', md: 'md' }}>
                    Hamburgher, Chips, Mix Sausages, Beer, Muffin
                  </Text>
                </div>

                <Group>
                  <Button>Reserve Now</Button>
                </Group>
              </Stack>
            </GridCol>

            <GridCol span={{ lg: 6 }}>
              <Flex justify={{ lg: 'end' }}>
                <ImageDefault
                  src={images.bannerCtaMenu}
                  alt={'banner cta image'}
                  height={{ lg: 180 }}
                  width={{ lg: 180 }}
                  fit={'contain'}
                />
              </Flex>
            </GridCol>
          </Grid>
        </Box>
      </BackgroundImage>
    </Card>
  );
}
