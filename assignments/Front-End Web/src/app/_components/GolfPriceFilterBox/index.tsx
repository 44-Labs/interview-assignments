'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import GolfPriceFilterApplyResetButtons from './GolfPriceFilterSourceCheckBox/GolfPriceFilterApplyResetButtons';
import GolfPriceFilterSourceCheckBox from './GolfPriceFilterSourceCheckBox';
import GolfPriceFilterSearchInput from './GolfPriceFilterSearchInput';

export default function GolfPriceFilterBox({ sourceData }: { sourceData: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sources = useMemo(() => searchParams.get('sources')?.split(',').filter(Boolean) ?? [], [searchParams]);
  const golfCourseName = useMemo(() => searchParams.get('golfCourseName') ?? '', [searchParams]);
  const [tempSelected, setTempSelected] = useState<string[]>(sources);
  const [inputValue, setInputValue] = useState(golfCourseName);

  useEffect(() => {
    setTempSelected(sources);
    setInputValue(golfCourseName);
  }, [sources, golfCourseName]);

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
      <GolfPriceFilterSourceCheckBox
        uniqueSources={sourceData}
        tempSelected={tempSelected}
        setTempSelected={setTempSelected}
      />
      <div className="flex items-center justify-center gap-3">
        <GolfPriceFilterSearchInput
          value={inputValue}
          setValue={setInputValue}
          onApply={handleApplyFilter}
          placeholder="골프장을 검색해주세요."
          className="h-10"
        />
        <GolfPriceFilterApplyResetButtons onApply={handleApplyFilter} onReset={handleResetFilter} />
      </div>
    </div>
  );
}
