import React from 'react';
import {
  Menu,
  Text,
  MenuTarget,
  MenuDropdown,
  MenuDivider,
  Group,
  Title,
  Button,
  Stack,
  Grid,
  GridCol,
  NumberFormatter,
  ActionIcon,
  Divider,
} from '@mantine/core';
import ImageDefault from '../images/default';
import { IconTrash } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Cart({ children }: { children: React.ReactNode }) {
  return (
    <Menu shadow="md" width={280} position="bottom-end">
      <MenuTarget>
        <div>{children}</div>
      </MenuTarget>

      <MenuDropdown p={'sm'}>
        <Stack gap={'xs'}>
          {cartItems.map((ci, i) => (
            <React.Fragment key={i}>
              <Grid>
                <GridCol span={2.5}>
                  <ImageDefault
                    src={ci.image}
                    alt={ci.title}
                    height={40}
                    radius={'sm'}
                  />
                </GridCol>

                <GridCol span={7.5}>
                  <div>
                    <Title order={2} fz={'sm'} fw={'normal'}>
                      <span>
                        <NumberFormatter
                          value={ci.qty}
                          prefix="x"
                          thousandSeparator
                        />
                      </span>{' '}
                      - {ci.title}
                    </Title>

                    <Text fw={'500'} fz={'sm'}>
                      <NumberFormatter
                        value={ci.price}
                        prefix="$ "
                        thousandSeparator
                      />
                    </Text>
                  </div>
                </GridCol>

                <GridCol span={2}>
                  <Group justify="end">
                    <ActionIcon
                      size={ICON_SIZE}
                      variant="transparent"
                      color="var(--mantine-color-text)"
                      onClick={close}
                    >
                      <IconTrash size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                    </ActionIcon>
                  </Group>
                </GridCol>
              </Grid>

              {i >= 0 && <Divider />}
            </React.Fragment>
          ))}
        </Stack>

        <Stack gap={'xs'} mt={'xs'}>
          <div>
            <Group justify="space-between" mb={'xs'} align="end">
              <Title order={1} fz={'md'}>
                Total
              </Title>

              <Text fz={'md'} inherit ta={'end'} fw={500}>
                $458
              </Text>
            </Group>
          </div>

          <Stack gap={5}>
            <Button variant="outline" color="black">
              View Cart
            </Button>
            <Button>Checkout</Button>
          </Stack>
        </Stack>
      </MenuDropdown>
    </Menu>
  );
}

const cartItems = [
  {
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    qty: 1,
    title: 'Pizza Napoli',
    price: 12,
  },
  {
    image:
      'https://images.unsplash.com/photo-1626711934535-9749ea30dba8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    qty: 1,
    title: 'Hamburgher Maxi',
    price: 10,
  },
  {
    image:
      'https://images.unsplash.com/photo-1556040220-4096d522378d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    qty: 1,
    title: 'Red Wine Bottle',
    price: 20,
  },
];
