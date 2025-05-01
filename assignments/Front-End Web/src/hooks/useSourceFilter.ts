import { useMemo, useState } from 'react';
import { GolfClubPrice } from '@/types';

export function useSourceFilter(data: GolfClubPrice[]) {
  const sources = useMemo(() => Array.from(new Set(data.map(item => item.source))), [data]);

  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [tempSelectedSources, setTempSelectedSources] = useState<string[]>([]);
  const [isApplied, setIsApplied] = useState(false);

  const handleSourceToggle = (source: string) => {
    setTempSelectedSources(prev => (prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]));
  };

  const handleApplyFilter = () => {
    setSelectedSources(tempSelectedSources);
    setIsApplied(true);
  };

  const handleResetFilter = () => {
    setSelectedSources([]);
    setTempSelectedSources([]);
    setIsApplied(false);
  };

  const filteredData = useMemo(() => {
    if (selectedSources.length === 0) return data;
    return data.filter(item => selectedSources.includes(item.source));
  }, [data, selectedSources]);

  return {
    sources,
    selectedSources: tempSelectedSources,
    setSelectedSources: handleSourceToggle,
    filteredData,
    handleApplyFilter,
    handleResetFilter,
    isApplied,
  };
}
