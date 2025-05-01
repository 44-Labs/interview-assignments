import { useState, useMemo } from 'react';
import { GolfClubPrice } from '@/types';

export function useGolfSearch(data: GolfClubPrice[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    return data.filter(item => item.golfCourseName.toLowerCase().includes(searchTerm.toLowerCase().trim()));
  }, [data, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
}
