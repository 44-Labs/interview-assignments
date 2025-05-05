import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export function useGolfSourceFilter() {
  const searchParams = useSearchParams();
  const initialSources = useMemo(() => searchParams.get('sources')?.split(',').filter(Boolean) ?? [], [searchParams]);
  const [tempSelected, setTempSelected] = useState<string[]>(initialSources);

  useEffect(() => {
    setTempSelected(initialSources);
  }, [initialSources]);

  const applySources = (params: URLSearchParams) => {
    if (tempSelected.length) {
      params.set('sources', tempSelected.join(','));
    } else {
      params.delete('sources');
    }
  };

  const resetSources = (params: URLSearchParams) => {
    setTempSelected([]);
    params.delete('sources');
  };

  return { tempSelected, setTempSelected, applySources, resetSources };
}

export default useGolfSourceFilter;
