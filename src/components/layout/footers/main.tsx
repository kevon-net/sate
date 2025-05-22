import React from 'react';
import LayoutSection from '../section';
import {
  ActionIcon,
  Anchor,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { appName, emails, phones, socials } from '@/data/app';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconChevronRight,
  IconClock,
  IconMapPin,
  IconTag,
} from '@tabler/icons-react';

export default function Main() {
  return (
    <LayoutSection
      id={'footer-main'}
      padded
      bg={'dark.7'}
      c={'dark.1'}
      fz={'sm'}
    >
      <Grid gutter={{ base: 'xl', lg: 'md' }}>
        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <Group align={'start'}>
            <IconMapPin size={ICON_WRAPPER_SIZE} stroke={ICON_STROKE_WIDTH} />

            <Stack>
              <Title order={2} fz={'lg'} fw={'500'} c={'white'}>
                Address
              </Title>

              <div>
                <Text inherit>
                  97845 Baker st. 567
                  <br />
                  Los Angeles - US
                </Text>
              </div>
            </Stack>
          </Group>
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <Group align={'start'}>
            <IconTag size={ICON_WRAPPER_SIZE} stroke={ICON_STROKE_WIDTH} />

            <Stack>
              <Title order={2} fz={'lg'} fw={'500'} c={'white'}>
                Reservations
              </Title>

              <div>
                <div>
                  <Anchor inherit c={'dark.1'} href={`tel:${phones.main}`}>
                    {phones.main}
                  </Anchor>
                </div>

                <div>
                  <Anchor inherit c={'dark.1'} href={`mailto:${emails.info}`}>
                    {emails.info}
                  </Anchor>
                </div>
              </div>
            </Stack>
          </Group>
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <Group align={'start'}>
            <IconClock size={ICON_WRAPPER_SIZE} stroke={ICON_STROKE_WIDTH} />

            <Stack>
              <Title order={2} fz={'lg'} fw={'500'} c={'white'}>
                Opening Hours
              </Title>

              <div>
                <Text inherit>
                  Mon - Sat: 10am - 11pm
                  <br />
                  Sunday: Closed
                </Text>
              </div>
            </Stack>
          </Group>
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
          <Stack>
            <Title order={2} fz={'lg'} fw={'500'} c={'white'}>
              Keep in Touch
            </Title>

            <Group gap={0} grow preventGrowOverflow={false}>
              <TextInput
                placeholder="Your Email"
                variant="filled"
                styles={{
                  input: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              />

              <ActionIcon
                size={36}
                maw={36}
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <IconChevronRight size={ICON_SIZE} />
              </ActionIcon>
            </Group>
          </Stack>
        </GridCol>
      </Grid>

      <Divider mt={SECTION_SPACING} mb={SECTION_SPACING / 2} color="dark.4" />

      <Flex
        gap={{ base: 'md', lg: 0 }}
        direction={{ base: 'column', xs: 'row' }}
        justify={{ xs: 'space-between' }}
      >
        <div>
          <Text fz={'sm'} c={'dark.1'}>
            &copy; {appName} - All rights reserved
          </Text>
        </div>

        <Group gap={'xs'}>
          {socialLinks.map((sl, i) => (
            <ActionIcon
              key={i}
              size={ICON_SIZE + 4}
              variant="transparent"
              component={'a'}
              href={sl.link}
              target="_blank"
              color="dark.1"
            >
              <sl.icon size={ICON_SIZE + 4} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          ))}
        </Group>
      </Flex>
    </LayoutSection>
  );
}

const socialLinks = [
  {
    link: socials[0].link,
    label: socials[0].label,
    icon: IconBrandX,
  },
  {
    link: socials[1].link,
    label: socials[1].label,
    icon: IconBrandFacebook,
  },
  {
    link: socials[2].link,
    label: socials[2].label,
    icon: IconBrandInstagram,
  },
  {
    link: socials[3].link,
    label: socials[3].label,
    icon: IconBrandLinkedin,
  },
];
