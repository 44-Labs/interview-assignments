import { useSearchParams } from 'next/navigation';
import { useMemo, useState, useCallback } from 'react';

export function useGolfCourseNameFilter() {
  const searchParams = useSearchParams();
  const initialValue = useMemo(() => searchParams.get('golfCourseName') ?? '', [searchParams]);
  const [inputValue, setInputValue] = useState(initialValue);

  const applyInput = useCallback(
    (params: URLSearchParams) => {
      if (inputValue) {
        params.set('golfCourseName', inputValue);
      } else {
        params.delete('golfCourseName');
      }
    },
    [inputValue]
  );

  const resetInput = useCallback((params: URLSearchParams) => {
    setInputValue('');
    params.delete('golfCourseName');
  }, []);

  return { inputValue, setInputValue, applyInput, resetInput };
}
