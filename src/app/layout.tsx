'use client';
/**
 * RootLayout wraps the entire application with global providers and layout.
 * It includes the HTML structure and applies global providers like Chakra UI,
 * Apollo Client, and User Context via AppProviders.
 */

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
