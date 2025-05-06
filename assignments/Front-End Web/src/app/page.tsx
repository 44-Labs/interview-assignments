import { Suspense } from 'react';
import { golfApi } from '@/services/api';
import GolfPriceComparisonModal from './_components/GolfPriceComparisonModal';
import GolfPriceFilterBox from './_components/GolfPriceFilterBox';
import GolfPriceTable from './_components/GolfPriceTable';
import GolfPriceFilterBoxSkeleton from './_components/GolfPriceViewSkeleton/GolfPriceFilterBoxSkeleton';
import GolfPriceTableSkeleton from './_components/GolfPriceViewSkeleton/GolfPriceTableSkeleton';

export const dynamic = 'force-dynamic';

interface HomeProps {
  searchParams: Promise<Record<string, string>>;
}

async function GolfPriceFilterBoxLoader() {
  const sourceData = await golfApi.getGolfSources();
  return <GolfPriceFilterBox sourceData={sourceData} />;
}

async function GolfPriceTableLoader({ searchParams }: HomeProps) {
  const paramsObj = await searchParams;
  const initialData = await golfApi.getGolfPrices(paramsObj);
  return <GolfPriceTable initialData={initialData} searchParams={paramsObj} />;
}

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className="container mx-auto p-4">
      <div className="space-y-4">
        <Suspense fallback={<GolfPriceFilterBoxSkeleton />}>
          <GolfPriceFilterBoxLoader />
        </Suspense>
        <Suspense fallback={<GolfPriceTableSkeleton />}>
          <GolfPriceTableLoader searchParams={searchParams} />
        </Suspense>
      </div>
      <GolfPriceComparisonModal />
    </main>
  );
}
