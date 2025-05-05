import { useCallback, useEffect, useState } from 'react';
import { GolfCoursePrice, SortOrder } from '@/types';
import { golfApi } from '@/services/api';

type SortableField = keyof GolfCoursePrice | '';

interface useGolfDataSortingProps {
  initialData: GolfCoursePrice[];
  searchParams?: Record<string, string>;
}

export function useGolfDataSorting({ initialData, searchParams }: useGolfDataSortingProps) {
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

  const handleSort = (field: SortableField) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const currentSearchTerm = searchParams?.golfCourseName || '';
    if (currentSearchTerm !== '') {
      setSortField('');
      setSortOrder('');
      setData(initialData);
    }
  }, [searchParams?.golfCourseName, initialData]);

  return {
    data,
    sortField,
    sortOrder,
    handleSort,
  };
}
