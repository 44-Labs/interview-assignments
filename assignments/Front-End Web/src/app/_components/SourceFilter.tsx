'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { GolfClubPrice } from '@/types';

interface SourceFilterProps {
  initialData: GolfClubPrice[];
}

export function SourceFilter({ initialData }: SourceFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uniqueSources = [...new Set(initialData.map(item => item.source))];

  // 현재 쿼리스트링에서 읽은 값
  const selectedSources = searchParams.get('sources')?.split(',').filter(Boolean) ?? [];

  // 임시 상태
  const [tempSelected, setTempSelected] = useState<string[]>(selectedSources);

  // 쿼리스트링이 바뀌면 임시 상태도 동기화
  useEffect(() => {
    setTempSelected(selectedSources);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // 체크박스 토글
  const handleToggleSource = (source: string) => {
    setTempSelected(prev => (prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]));
  };

  // 적용 버튼
  const handleApplyFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (tempSelected.length) {
      params.set('sources', tempSelected.join(','));
    } else {
      params.delete('sources');
    }
    router.replace(`?${params.toString()}`);
  };

  // 초기화 버튼
  const handleResetFilter = () => {
    setTempSelected([]);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('sources');
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-2 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="flex flex-wrap justify-center gap-2">
          {uniqueSources.map(data => (
            <label
              key={data}
              className="flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors"
            >
              <input
                type="checkbox"
                checked={tempSelected.includes(data)}
                onChange={() => handleToggleSource(data)}
                className="w-4 h-4 accent-blue-500 rounded"
              />
              <span className="text-m  text-gray-700">{data}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={handleApplyFilter}
          className="px-2 py-2 text-xs rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-sm"
        >
          적용
        </button>
        <button
          onClick={handleResetFilter}
          className="px-2 py-2 text-xs rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors shadow-sm"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
