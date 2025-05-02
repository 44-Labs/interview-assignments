'use client';

import { GolfClubPrice } from '@/types';
import { SearchInput } from './SearchInput';
import { useGolfSearch } from '@/hooks/useGolfSearch';
import { useGolfPriceSort } from '@/hooks/useGolfPriceSort';
import { useSourceFilter } from '@/hooks/useSourceFilter';
import { SourceFilter } from '../../../components/SourceFilter';
import GolfPriceTable from './GolfPriceTable';

export function GolfPriceView({ initialData }: { initialData: GolfClubPrice[] }) {
  //1. 출처별 필터링
  const {
    sources,
    selectedSources,
    setSelectedSources,
    filteredData: filteredSourceData,
    handleApplyFilter,
    handleResetFilter,
  } = useSourceFilter(initialData);

  //2. 검색
  const { setSearchTerm, filteredData } = useGolfSearch(filteredSourceData);

  //3. 정렬
  const { sortedData, sortField, sortOrder, toggleSort } = useGolfPriceSort(filteredData);

  return (
    <div className="space-y-4 ">
      <SourceFilter
        sources={sources}
        selectedSources={selectedSources}
        setSelectedSources={setSelectedSources}
        handleApplyFilter={handleApplyFilter}
        handleResetFilter={handleResetFilter}
      />
      <div className="flex justify-end">
        <SearchInput onSearch={setSearchTerm} className="w-full max-w-xs" placeholder="골프장을 검색해주세요." />
      </div>
      <GolfPriceTable sortedData={sortedData} sortField={sortField} sortOrder={sortOrder} toggleSort={toggleSort} />
    </div>
  );
}
