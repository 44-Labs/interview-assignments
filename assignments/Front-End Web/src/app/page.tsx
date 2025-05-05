import GolfPriceViewSkeleton from '@/app/_components/GolfPriceViewSkeleton';
import { Suspense } from 'react';
import { golfApi } from '@/services/api';
import GolfPriceView from '@/app/_components/GolfPriceView';

interface HomeProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function Home({ searchParams }: HomeProps) {
  const paramsObj = await searchParams;
  const initialData = await golfApi.getGolfPrices(paramsObj);
  const sourceData = await golfApi.getGolfSources();

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<GolfPriceViewSkeleton />}>
        <GolfPriceView initialData={initialData} sourceData={sourceData} searchParams={paramsObj} />
      </Suspense>
    </main>
  );
}
