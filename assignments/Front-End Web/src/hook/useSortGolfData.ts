import { useCallback, useEffect, useState } from 'react';
import { GolfClubPrice, SortOrder } from '@/types';

export function useSortGolfData(initialData: GolfClubPrice[]) {
  const [data, setData] = useState<GolfClubPrice[]>(initialData);
  const [sortField, setSortField] = useState<'golfCourseName' | 'currentPrice' | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null);

  const fetchData = useCallback(async () => {
    const params = new URLSearchParams(window.location.search);
    const sources = params.get('sources') ?? '';
    const golfCourseName = params.get('golfCourseName') ?? '';
    const res = await fetch(
      `/api/golf-prices?sources=${sources}&golfCourseName=${golfCourseName}&sortField=${sortField}&sortOrder=${sortOrder}`
    );
    const { data } = await res.json();
    setData(data);
  }, [sortField, sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setData(initialData);
    setSortField(null);
    setSortOrder(null);
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
