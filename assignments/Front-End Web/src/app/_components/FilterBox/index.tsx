'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import FilterButtons from './FilterButtons';
import FilterSourceCheckBox from './FilterSourceCheckBox';
import FilterSearchInput from './FilterSearchInput';

export default function FilterBox({ sourceData }: { sourceData: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tempSelected, setTempSelected] = useState<string[]>(
    searchParams.get('sources')?.split(',').filter(Boolean) ?? []
  );
  const [inputValue, setInputValue] = useState(searchParams.get('golfCourseName') ?? '');

  useEffect(() => {
    setTempSelected(searchParams.get('sources')?.split(',').filter(Boolean) ?? []);
    setInputValue(searchParams.get('golfCourseName') ?? '');
  }, [searchParams]);

  const handleApplyFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (tempSelected.length) {
      params.set('sources', tempSelected.join(','));
    } else {
      params.delete('sources');
    }
    if (inputValue) {
      params.set('golfCourseName', inputValue);
    } else {
      params.delete('golfCourseName');
    }
    router.replace(`?${params.toString()}`);
  };

  const handleResetFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    setTempSelected([]);
    setInputValue('');
    params.delete('sources');
    params.delete('golfCourseName');
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <FilterSourceCheckBox uniqueSources={sourceData} tempSelected={tempSelected} setTempSelected={setTempSelected} />
      <div className="flex items-center justify-center gap-3">
        <FilterSearchInput
          value={inputValue}
          setValue={setInputValue}
          onApply={handleApplyFilter}
          placeholder="골프장을 검색해주세요."
          className="h-10"
        />
        <FilterButtons onApply={handleApplyFilter} onReset={handleResetFilter} />
      </div>
    </div>
  );
}
