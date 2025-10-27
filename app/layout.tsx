// biome-ignore assist/source/organizeImports: <explanation>
import { GeistSans } from 'geist/font/sans';
import { Suspense, type ReactNode } from 'react';
import './globals.css';
import { baseUrl } from '@/lib/utils';
import RootLayout from '@/components/layout/root-layout';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function Layout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Suspense>
          <RootLayout>
            {children}
          </RootLayout>
        </Suspense>
      </body>
    </html>
  );
}
