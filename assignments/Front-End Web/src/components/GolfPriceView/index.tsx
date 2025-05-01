'use client';

import { GolfClubPrice } from '@/types';
import { SearchInput } from './SearchInput';
import { useGolfSearch } from '@/hooks/useGolfSearch';
import { useGolfPriceSort } from '@/hooks/useGolfPriceSort';
import GolfPriceTable from './GolfPriceTable';

interface GolfPriceViewProps {
  initialData: GolfClubPrice[];
}

export function GolfPriceView({ initialData }: GolfPriceViewProps) {
  const { setSearchTerm, filteredData } = useGolfSearch(initialData);
  const { sortedData, sortField, sortOrder, toggleSort } = useGolfPriceSort(filteredData);

  return (
    <div className="space-y-4 ">
      <div className="flex justify-end">
        <SearchInput onSearch={setSearchTerm} className="w-full max-w-xs" placeholder="골프장을 검색해주세요." />
      </div>
      <GolfPriceTable sortedData={sortedData} sortField={sortField} sortOrder={sortOrder} toggleSort={toggleSort} />
    </div>
  );
}
