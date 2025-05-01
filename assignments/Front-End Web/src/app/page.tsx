import { Suspense } from 'react';
import { mockGolfPrices } from '@/__MOCK__';
import GolfPriceTable from '@/components/GolfPriceTable';
import GolfPriceTableSkeleton from '@/components/ui/GolfPriceTableSkeleton';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<GolfPriceTableSkeleton />}>
        <GolfPriceTableServer />
      </Suspense>
    </main>
  );
}

async function GolfPriceTableServer() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return <GolfPriceTable initialData={mockGolfPrices} />;
}
