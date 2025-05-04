'use client';

import { GolfClubPrice } from '@/types';
import GolfPriceTable from './GolfPriceTable';
import FilterBox from '../FilterBox';
import { GolfPriceComparisonModal } from '../GolfPriceComparisonModal';

interface GolfPriceViewProps {
  initialData: GolfClubPrice[];
  sourceData: string[];
}

export function GolfPriceView({ initialData, sourceData }: GolfPriceViewProps) {
  return (
    <>
      <div className="space-y-4">
        <FilterBox sourceData={sourceData} />
        <GolfPriceTable initialData={initialData} />
      </div>
      <GolfPriceComparisonModal />
    </>
  );
}

export default GolfPriceView;
