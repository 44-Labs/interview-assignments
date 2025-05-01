import { useState, useMemo } from 'react';
import { GolfClubPrice, SortField, SortOrder } from '@/types';

export function useGolfPriceSort(initialData: GolfClubPrice[]) {
  const [sortField, setSortField] = useState<SortField>('golfCourseName');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedData = useMemo(() => {
    return [...initialData].sort((a, b) => {
      if (sortField === 'golfCourseName') {
        return sortOrder === 'asc'
          ? a.golfCourseName.localeCompare(b.golfCourseName)
          : b.golfCourseName.localeCompare(a.golfCourseName);
      }

      if (sortField === 'currentPrice' || sortField === 'delta') {
        return sortOrder === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
      }

      if (sortField === 'collectedAt') {
        return sortOrder === 'asc'
          ? new Date(a.collectedAt).getTime() - new Date(b.collectedAt).getTime()
          : new Date(b.collectedAt).getTime() - new Date(a.collectedAt).getTime();
      }

      return 0;
    });
  }, [initialData, sortField, sortOrder]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return {
    sortedData,
    sortField,
    sortOrder,
    toggleSort,
  };
}
