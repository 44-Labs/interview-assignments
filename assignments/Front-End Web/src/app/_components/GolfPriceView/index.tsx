'use client';

import { GolfClubPrice } from '@/types';
import { SearchInput } from './SearchInput';
import { SourceFilter } from '../SourceFilter';
import GolfPriceTable from './GolfPriceTable';
import { GolfPriceComparisonModal } from '../GolfPriceComparisonModal';

export function GolfPriceView({ initialData }: { initialData: GolfClubPrice[] }) {
  return (
    <>
      <div className="space-y-4 ">
        <SourceFilter initialData={initialData} />
        <div className="flex justify-center">
          <SearchInput className="w-full max-w-xs" placeholder="골프장을 검색해주세요." />
        </div>
        <GolfPriceTable />
      </div>
      <GolfPriceComparisonModal />
    </>
  );
}

export default GolfPriceView;
