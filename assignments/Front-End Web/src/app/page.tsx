import GolfPriceViewSkeleton from '@/app/_components/GolfPriceViewSkeleton';
import { Suspense } from 'react';
import { getGolfPrices, getGolfSources } from '@/services/api';
import GolfPriceView from '@/app/_components/GolfPriceView';

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const paramsObj = await searchParams;
  const initialData = await getGolfPrices(paramsObj);
  const sourceData = await getGolfSources();

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<GolfPriceViewSkeleton />}>
        <GolfPriceView initialData={initialData} sourceData={sourceData} />;
      </Suspense>
    </main>
  );
}
