'use client';

import { GolfClubPrice } from '@/types';
import GolfPriceTable from './GolfPriceTable';
import FilterBox from '../FilterBox';
import { GolfPriceComparisonModal } from '../GolfPriceComparisonModal';

interface GolfPriceViewProps {
  initialData: GolfClubPrice[];
  allData: GolfClubPrice[];
}

export function GolfPriceView({ initialData, allData }: GolfPriceViewProps) {
  return (
    <>
      <div className="space-y-4">
        <FilterBox allData={allData} />
        <GolfPriceTable initialData={initialData} />
      </div>
      <GolfPriceComparisonModal />
    </>
  );
}

export default GolfPriceView;
