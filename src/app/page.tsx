import LayoutPage from '@/components/layout/page';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import HeroHome from '@/components/layout/heros/home';
import LayoutSection from '@/components/layout/section';
import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { ICON_STROKE_WIDTH, SECTION_SPACING } from '@/data/constants';
import IntroSection from '@/components/layout/intros/section';
import CardCtaMenu from '@/components/common/cards/cta/menu';
import { menuCtaList } from '@/data/menu';

export default function Home() {
  return (
    <LayoutPage>
      <main>
        <AffixNavbar />

        <HeroHome />

        <LayoutSection
          id={'about'}
          padded={SECTION_SPACING * 2}
          containerized={'md'}
          style={{
            backgroundImage: `url(${images.bg.pattern.menu})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Grid gutter={'xl'} align="center">
            <GridCol span={{ base: 12, md: 6 }}>
              <Flex justify={{ lg: 'end' }} pr={{ lg: 'xl' }}>
                <ImageDefault
                  src={
                    'https://images.unsplash.com/photo-1538128844159-f08f41bfb169?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt={'about image'}
                  height={{ lg: 400 }}
                  width={{ lg: '70%' }}
                  style={{
                    boxShadow: '8px 8px rgba(0,0,0,0.075)',
                  }}
                />
              </Flex>
            </GridCol>

            <GridCol span={{ base: 12, md: 6 }}>
              <IntroSection
                props={{
                  title: 'Some words about us',
                  desc: 'Cum doctus civibus efficiantur in imperdiet deterruisset.',
                  subTitle: (
                    <Group gap={0}>
                      <Divider
                        size={ICON_STROKE_WIDTH}
                        w={{ lg: 60 }}
                        color="pri"
                      />
                      <Divider size={ICON_STROKE_WIDTH} w={{ lg: 60 }} />
                    </Group>
                  ),
                }}
                options={{ alignment: 'start' }}
              />

              <Stack mt={'md'} c={'dimmed'} fz={'sm'}>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <ImageDefault
                  src={images.signature}
                  alt={'signature'}
                  height={{ lg: 40 }}
                  width={{ lg: 120 }}
                  fit={'contain'}
                  mt={'md'}
                />
              </Stack>
            </GridCol>
          </Grid>
        </LayoutSection>

        <LayoutSection
          id={'menu'}
          padded={SECTION_SPACING * 2}
          bg={'var(--mantine-color-gray-1)'}
        >
          <IntroSection
            props={{
              title: 'Our Daily Menu',
              desc: 'Cum doctus civibus efficiantur in imperdiet deterruisset.',
              subTitle: (
                <Group gap={0} justify={'center'}>
                  <Divider size={ICON_STROKE_WIDTH} w={{ lg: 30 }} />
                  <Divider
                    size={ICON_STROKE_WIDTH}
                    w={{ lg: 60 }}
                    color="pri"
                  />
                  <Divider size={ICON_STROKE_WIDTH} w={{ lg: 30 }} />
                </Group>
              ),
            }}
          />

          <Stack mt={SECTION_SPACING} gap={SECTION_SPACING}>
            <CardCtaMenu />

            <Grid gutter={'xl'}>
              {menuCtaList.map((li, i) => (
                <GridCol key={i} span={{ md: 6 }}>
                  <Card padding={0} bg={'transparent'}>
                    <Grid align="center" gutter={0}>
                      <GridCol span={2}>
                        <ImageDefault
                          src={li.image}
                          alt={li.title}
                          height={80}
                          width={80}
                          radius={'50%'}
                        />
                      </GridCol>

                      <GridCol span={10}>
                        <div>
                          <Group grow preventGrowOverflow={false} w={'100%'}>
                            <Title
                              order={2}
                              fz={'md'}
                              fw={500}
                              maw={'fit-content'}
                            >
                              {li.title}
                            </Title>

                            <Divider variant={'dashed'} color="dimmed" />

                            <Text
                              fz={'sm'}
                              fw={500}
                              ta={'end'}
                              maw={'fit-content'}
                            >
                              <NumberFormatter
                                value={li.price}
                                prefix={'$'}
                                thousandSeparator
                              />
                            </Text>
                          </Group>

                          <Text fz={'sm'} c={'dimmed'}>
                            {li.ingredients}
                          </Text>
                        </div>
                      </GridCol>
                    </Grid>
                  </Card>
                </GridCol>
              ))}
            </Grid>
          </Stack>
        </LayoutSection>

        <LayoutSection
          id={'cta-event'}
          padded={SECTION_SPACING * 2}
          c={'var(--mantine-color-white)'}
          pos={'relative'}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <Group justify="center">
            <Card
              maw={{ lg: '40%' }}
              bg={'var(--mantine-color-dark-7)'}
              c={'var(--mantine-color-white)'}
              padding={SECTION_SPACING / 1.5}
            >
              <Stack ta={'center'} align="center">
                <div>
                  <Title order={2} fz={'var(--mantine-h1-font-size)'}>
                    Celebrate
                  </Title>

                  <Text>a Special Event with us!</Text>
                </div>

                <Text c={'dimmed'}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </Text>

                <Button mt={'md'}>Contact Us</Button>
              </Stack>
            </Card>
          </Group>
        </LayoutSection>

        <FooterMain />
      </main>
    </LayoutPage>
  );
}
