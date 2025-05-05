import { useCallback, useEffect, useState } from 'react';
import { GolfCoursePrice, SortOrder } from '@/types';
import { golfApi } from '@/services/api';

type SortableField = keyof GolfCoursePrice | '';

interface UseSortGolfDataProps {
  initialData: GolfCoursePrice[];
  searchParams?: Partial<Record<string, string>>;
}

export function useSortGolfData({ initialData, searchParams = {} }: UseSortGolfDataProps) {
  const [data, setData] = useState<GolfCoursePrice[]>(initialData);
  const [sortField, setSortField] = useState<SortableField>('');
  const [sortOrder, setSortOrder] = useState<SortOrder | ''>('');

  const fetchData = useCallback(async () => {
    const data = await golfApi.getGolfPrices({
      ...searchParams,
      sortField,
      sortOrder,
    });
    setData(data);
  }, [searchParams, sortField, sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSort = (field: SortableField) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return {
    data,
    sortField,
    sortOrder,
    handleSort,
  };
}
