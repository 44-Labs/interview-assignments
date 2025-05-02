import { Suspense } from 'react';
import { GolfPriceView } from '@/app/_components/GolfPriceView';
import { getGolfPrices } from '@/services/api';
import { GolfClubPrice } from '@/types';
import GolfPriceTableSkeleton from '@/app/_components/ui/HomePageSkeleton.tsx/GolfPriceTableSkeleton';

export default async function Home() {
  const initialData = await getGolfPrices();

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<GolfPriceTableSkeleton />}>
        <GolfPriceTableServer initialData={initialData} />
      </Suspense>
    </main>
  );
}

async function GolfPriceTableServer({ initialData }: { initialData: GolfClubPrice[] }) {
  return <GolfPriceView initialData={initialData} />;
}
