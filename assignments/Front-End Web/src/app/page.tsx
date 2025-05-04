import PageSkeleton from '@/app/_components/PageSkeleton';
import { Suspense } from 'react';
import { GolfPriceView } from '@/app/_components/GolfPriceView';
import { getGolfPrices, getGolfSources } from '@/services/api';
import { GolfClubPrice } from '@/types';

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const paramsObj = await searchParams;
  const initialData = await getGolfPrices(paramsObj);
  const sourceData = await getGolfSources();

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<PageSkeleton />}>
        <GolfPriceTableServer initialData={initialData} sourceData={sourceData} />
      </Suspense>
    </main>
  );
}

async function GolfPriceTableServer({
  initialData,
  sourceData,
}: {
  initialData: GolfClubPrice[];
  sourceData: string[];
}) {
  return <GolfPriceView initialData={initialData} sourceData={sourceData} />;
}
