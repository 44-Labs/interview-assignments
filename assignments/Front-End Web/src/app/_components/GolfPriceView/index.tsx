'use client';

import { GolfCoursePrice } from '@/types';
import GolfPriceTable from './GolfPriceTable';
import GolfPriceFilterBox from '../GolfPriceFilterBox';
import GolfPriceComparisonModal from '../GolfPriceComparisonModal';

interface GolfPriceViewProps {
  initialData: GolfCoursePrice[];
  sourceData: string[];
}

export default function GolfPriceView({ initialData, sourceData }: GolfPriceViewProps) {
  return (
    <>
      <div className="space-y-4">
        <GolfPriceFilterBox sourceData={sourceData} />
        <GolfPriceTable initialData={initialData} />
      </div>
      <GolfPriceComparisonModal />
    </>
  );
}
