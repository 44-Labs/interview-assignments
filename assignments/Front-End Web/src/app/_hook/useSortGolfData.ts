import { useCallback, useEffect, useState } from 'react';
import { GolfCoursePrice, SortOrder } from '@/types';
import { golfApi } from '@/services/api';

type SortableField = keyof GolfCoursePrice | '';

interface UseSortGolfDataProps {
  initialData: GolfCoursePrice[];
  searchParams?: Record<string, string>;
}

export function useSortGolfData({ initialData, searchParams }: UseSortGolfDataProps) {
  const [data, setData] = useState<GolfCoursePrice[]>(initialData);
  const [sortField, setSortField] = useState<SortableField>('');
  const [sortOrder, setSortOrder] = useState<SortOrder | ''>('');

  const fetchData = useCallback(async () => {
    if (!sortField) {
      setData(initialData);
      return;
    }

    const data = await golfApi.getGolfPrices({
      ...searchParams,
      sortField,
      sortOrder,
    });
    setData(data);
  }, [sortField, searchParams, sortOrder, initialData]);

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
