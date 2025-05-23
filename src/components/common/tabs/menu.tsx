'use client';

import {
  Button,
  Card,
  ChipGroup,
  Divider,
  Group,
  Stack,
  Tabs,
  TabsPanel,
  Text,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { DatePicker, TimeGrid } from '@mantine/dates';
import FormContact from '@/components/form/contact';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<string | null>('date');
  const [valueDate, setValueDate] = useState<string | null>(
    new Date().toISOString()
  );
  const [valuePeople, setValuePeople] = useState('2');

  return (
    <Tabs
      value={activeTab}
      onChange={setActiveTab}
      styles={{
        panel: {
          padding: 'var(--mantine-spacing-xl)',
          backgroundColor: 'var(--mantine-color-gray-1)',
        },
      }}
    >
      <TabsPanel value="date">
        <Stack gap={'lg'}>
          <Title order={2} fz={'md'} fw={500}>
            <Text component={'span'} inherit c={'dimmed'}>
              1/3
            </Text>{' '}
            Please Select a date
          </Title>

          <Card w={'100%'}>
            <Group justify="center">
              <DatePicker size="md" value={valueDate} onChange={setValueDate} />
            </Group>
          </Card>

          <Divider />

          <Group justify="end" gap={'xs'}>
            <Button onClick={() => setActiveTab('time-people')}>Next</Button>
          </Group>
        </Stack>
      </TabsPanel>

      <TabsPanel value="time-people">
        <Stack gap={'lg'}>
          <Title order={2} fz={'md'} fw={500}>
            <Text component={'span'} inherit c={'dimmed'}>
              2/3
            </Text>{' '}
            Select time and guests
          </Title>

          <Card>
            <Title
              order={3}
              fz={'sm'}
              tt={'uppercase'}
              fw={500}
              ta={'center'}
              mb={'xs'}
            >
              Time
            </Title>

            <TimeGrid
              data={[
                '12:00',
                '12:30',
                '1:00',
                '1:30',
                '8:00',
                '8:30',
                '9:00',
                '9:30',
              ]}
              simpleGridProps={{
                type: 'container',
                cols: { base: 1, '180px': 2, '320px': 4 },
                spacing: 'xs',
              }}
              withSeconds={false}
            />
          </Card>

          <Card>
            <Title
              order={3}
              fz={'sm'}
              tt={'uppercase'}
              fw={500}
              ta={'center'}
              mb={'xs'}
            >
              How Many People?
            </Title>

            <ChipGroup
              multiple={false}
              value={valuePeople}
              onChange={setValuePeople}
            ></ChipGroup>
            <Group gap={'xs'} grow>
              <Button
                value="1"
                onClick={() => setValuePeople('1')}
                variant={valuePeople != '1' ? 'outline' : undefined}
                color={valuePeople != '1' ? 'gray' : undefined}
                c={valuePeople != '1' ? 'var(--mantine-color-text)' : undefined}
              >
                1
              </Button>
              <Button
                value="2"
                onClick={() => setValuePeople('2')}
                variant={valuePeople != '2' ? 'outline' : undefined}
                color={valuePeople != '2' ? 'gray' : undefined}
                c={valuePeople != '2' ? 'var(--mantine-color-text)' : undefined}
              >
                2
              </Button>
              <Button
                value="3"
                onClick={() => setValuePeople('3')}
                variant={valuePeople != '3' ? 'outline' : undefined}
                color={valuePeople != '3' ? 'gray' : undefined}
                c={valuePeople != '3' ? 'var(--mantine-color-text)' : undefined}
              >
                3
              </Button>
              <Button
                value="4"
                onClick={() => setValuePeople('4')}
                variant={valuePeople != '4' ? 'outline' : undefined}
                color={valuePeople != '4' ? 'gray' : undefined}
                c={valuePeople != '4' ? 'var(--mantine-color-text)' : undefined}
              >
                4
              </Button>
            </Group>
          </Card>

          <Divider />

          <Group justify="end" gap={'xs'}>
            <Button
              color={'black'}
              variant={'light'}
              onClick={() => setActiveTab('date')}
            >
              Prev
            </Button>
            <Button onClick={() => setActiveTab('form')}>Next</Button>
          </Group>
        </Stack>
      </TabsPanel>

      <TabsPanel value="form">
        <Stack gap={'lg'}>
          <Title order={2} fz={'md'} fw={500}>
            <Text component={'span'} inherit c={'dimmed'}>
              3/3
            </Text>{' '}
            Please fill with your details
          </Title>

          <FormContact />

          <Divider />

          <Group justify="end" gap={'xs'}>
            <Button
              color={'black'}
              variant={'light'}
              onClick={() => setActiveTab('time-people')}
            >
              Prev
            </Button>
            <Button onClick={() => console.log('submitted')}>Submit</Button>
          </Group>
        </Stack>
      </TabsPanel>
    </Tabs>
  );
}
