import React from 'react';
import LayoutBody from '@/components/layout/body';
import AffixTop from '@/components/common/affixi/top';
import ProviderStore from '@/components/providers/store';
import AffixNavbar from '@/components/common/affixi/navbar';
import FooterMain from '@/components/layout/footers/main';

export default function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderStore>
      <LayoutBody nav={<AffixNavbar />} footer={<FooterMain />}>
        <main>{children}</main>

        <AffixTop />
      </LayoutBody>
    </ProviderStore>
  );
}
