import LayoutPage from '@/components/layout/page';
import { Stack } from '@mantine/core';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import HeroHome from '@/components/layout/heros/home';

export default function Home() {
  return (
    <LayoutPage>
      <main>
        <AffixNavbar />

        <HeroHome />

        <FooterMain />
      </main>
    </LayoutPage>
  );
}
