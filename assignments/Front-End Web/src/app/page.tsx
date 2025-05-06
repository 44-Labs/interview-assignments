import { Suspense } from 'react';
import GolfPriceComparisonModal from './_components/GolfPriceComparisonModal';
import GolfPriceView from './_components/GolfPriceView';
import GolfPriceViewSkeleton from './_components/GolfPriceViewSkeleton';

interface HomeProps {
  searchParams: Promise<Record<string, string>>;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="container mx-auto p-4">
      <Suspense fallback={<GolfPriceViewSkeleton />}>
        <GolfPriceView searchParams={searchParams} />
      </Suspense>
      <GolfPriceComparisonModal />
    </main>
  );
}
