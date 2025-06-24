'use client';

import { AppProviders } from '@/providers';
import MainLayout from '@/components/MainLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html >
  );
}
