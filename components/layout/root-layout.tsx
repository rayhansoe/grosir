// biome-ignore assist/source/organizeImports: <explanation>
import { CartProvider } from '@/components/cart/cart-context';
import { Navbar } from '@/components/layout/navbar';
import { getCart } from '@/lib/shopify';
import Link from 'next/link';
import { Suspense, type ReactNode } from 'react';
import { Toaster } from 'sonner';
import LogoSquare from '../logo-square';
import Search, { SearchSkeleton } from './navbar/search';
import CartModal from '../cart/modal';

const { SITE_NAME } = process.env;

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
   <CartProvider cartPromise={cart}>
    <Suspense fallback={
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
    }>
      <Navbar />
    </Suspense>
    <main>
      <Suspense>
        {children}
      </Suspense>
      <Toaster closeButton />
    </main>
    </CartProvider>
  );
}
