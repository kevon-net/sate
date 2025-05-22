import LayoutPage from '@/components/layout/page';
import { Stack } from '@mantine/core';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';

export default function Home() {
  return (
    <LayoutPage>
      <main>
        <AffixNavbar />

        <Stack
          py={'xl'}
          align="center"
          justify={'center'}
          h={'100vh'}
          bg={'gray.4'}
        >
          <p>
            Get started by editing <code>src/app/page.tsx</code>.
          </p>

          <p>Save and see your changes instantly.</p>
        </Stack>

        <FooterMain />
      </main>
    </LayoutPage>
  );
}
