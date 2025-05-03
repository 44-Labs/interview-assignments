import PageSkeleton from '@/app/_components/PageSkeleton';
import { Suspense } from 'react';
import { GolfPriceView } from '@/app/_components/GolfPriceView';
import { getGolfPrices } from '@/services/api';
import { GolfClubPrice } from '@/types';

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const paramsObj = await searchParams;
  const allData = await getGolfPrices();
  const initialData = await getGolfPrices(paramsObj);

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<PageSkeleton />}>
        <GolfPriceTableServer initialData={initialData} allData={allData} />
      </Suspense>
    </main>
  );
}

async function GolfPriceTableServer({
  initialData,
  allData,
}: {
  initialData: GolfClubPrice[];
  allData: GolfClubPrice[];
}) {
  return <GolfPriceView initialData={initialData} allData={allData} />;
}
