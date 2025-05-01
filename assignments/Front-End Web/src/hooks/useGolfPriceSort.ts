import { useState, useMemo } from 'react';
import { GolfClubPrice, SortField, SortOrder } from '@/types';

export function useGolfPriceSort(initialData: GolfClubPrice[]) {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null);

  const sortedData = useMemo(() => {
    if (!sortField || !sortOrder) return initialData;
    return [...initialData].sort((a, b) => {
      if (sortField === 'golfCourseName') {
        return sortOrder === 'asc'
          ? a.golfCourseName.localeCompare(b.golfCourseName)
          : b.golfCourseName.localeCompare(a.golfCourseName);
      }

      if (sortField === 'currentPrice') {
        return sortOrder === 'asc' ? a.currentPrice - b.currentPrice : b.currentPrice - a.currentPrice;
      }

      return 0;
    });
  }, [initialData, sortField, sortOrder]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return {
    sortedData,
    sortField,
    sortOrder,
    toggleSort,
  };
}
