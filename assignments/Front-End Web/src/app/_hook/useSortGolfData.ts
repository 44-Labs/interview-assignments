import { useCallback, useEffect, useState } from 'react';
import { GolfCoursePrice, SortOrder } from '@/types';
import { golfApi } from '@/services/api';

export function useSortGolfData(initialData: GolfCoursePrice[]) {
  const [data, setData] = useState<GolfCoursePrice[]>(initialData);
  const [sortField, setSortField] = useState<'golfCourseName' | 'currentPrice' | ''>('');
  const [sortOrder, setSortOrder] = useState<SortOrder | ''>('');

  const fetchData = useCallback(async () => {
    const params = new URLSearchParams(window.location.search);
    const sources = params.get('sources') ?? '';
    const golfCourseName = params.get('golfCourseName') ?? '';
    const data = await golfApi.getGolfPrices({ sources, golfCourseName, sortField, sortOrder });
    setData(data);
  }, [sortField, sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setData(initialData);
    setSortField('');
    setSortOrder('');
  }, [initialData]);

  const handleSort = (field: 'golfCourseName' | 'currentPrice') => {
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
