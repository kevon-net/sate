import { Grid, GridCol, Textarea, TextInput } from '@mantine/core';
import React from 'react';

export default function Contact() {
  return (
    <Grid>
      <GridCol span={12}>
        <TextInput placeholder="First and Last Name" />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <TextInput placeholder="Your Email" />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <TextInput placeholder="Your Phone" />
      </GridCol>

      <GridCol span={12}>
        <Textarea rows={6} placeholder="Please provide any additional info" />
      </GridCol>
    </Grid>
  );
}
