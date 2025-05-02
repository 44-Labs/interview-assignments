import { Suspense } from 'react';
import { GolfPriceView } from '@/components/GolfPriceView';
import GolfPriceTableSkeleton from '@/components/ui/GolfPriceTableSkeleton';
import { getGolfPrices } from '@/lib/api';
import { GolfClubPrice } from '@/types';

export default async function Home() {
  const initialData = await getGolfPrices();

  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<GolfPriceTableSkeleton />}>
        <GolfPriceTableServer initialData={initialData.data} />
      </Suspense>
    </main>
  );
}

async function GolfPriceTableServer({ initialData }: { initialData: GolfClubPrice[] }) {
  return <GolfPriceView initialData={initialData} />;
}
