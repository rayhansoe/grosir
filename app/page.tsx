import Grid from '@/components/grid';
import ProductGridItems from '@/components/layout/product-grid-items';
import Collections from '@/components/layout/search/collections';
import FilterList from '@/components/layout/search/filter';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';
import { Suspense } from 'react';
import ChildrenWrapper from './search/children-wrapper';
import Footer from '@/components/layout/footer';
import SearchPage from '@/components/layout/search';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function HomePage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <>
      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>
              <SearchPage searchParams={searchParams} />
            </ChildrenWrapper>
          </Suspense>
        </div>
        <div className="order-0 flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </>
  );
}
