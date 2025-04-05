import React from 'react';
import LayoutBody from '@/components/layout/body';
import AffixTop from '@/components/common/affixi/top';
import ProviderStore from '@/components/providers/store';

export default function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderStore>
      <LayoutBody>
        <main>{children}</main>

        <AffixTop />
      </LayoutBody>
    </ProviderStore>
  );
}
