'use client';

import GolfPriceFilterApplyResetButtons from './GolfPriceFilterSourceCheckBox/GolfPriceFilterApplyResetButtons';
import GolfPriceFilterSourceCheckBox from './GolfPriceFilterSourceCheckBox';
import GolfPriceFilterSearchInput from './GolfPriceFilterSearchInput';
import { useGolfCourseNameFilter } from '@/app/_hook/useGolfCourseNameFilter';
import useGolfSourceFilter from '@/app/_hook/useGolfSourceFilter';
import { useSearchParams } from 'next/navigation';

export default function GolfPriceFilterBox({ sourceData }: { sourceData: string[] }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { tempSelected, setTempSelected, applySources, resetSources } = useGolfSourceFilter();
  const { inputValue, setInputValue, applyInput, resetInput } = useGolfCourseNameFilter();

  const handleApplyInput = () => {
    applyInput(params);
  };

  const handleApplyFilter = () => {
    applySources(params);
    applyInput(params);
  };

  const handleResetFilter = () => {
    resetSources(params);
    resetInput(params);
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
          onApply={handleApplyInput}
          placeholder="골프장을 검색해주세요."
          className="h-10"
        />
        <GolfPriceFilterApplyResetButtons onApply={handleApplyFilter} onReset={handleResetFilter} />
      </div>
    </div>
  );
}
