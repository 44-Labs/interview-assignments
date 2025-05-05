import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export function useGolfCourseNameFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialValue = useMemo(() => searchParams.get('golfCourseName') ?? '', [searchParams]);
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const applyInput = (params: URLSearchParams) => {
    if (inputValue) {
      params.set('golfCourseName', inputValue);
    } else {
      params.delete('golfCourseName');
    }
    router.replace(`?${params.toString()}`);
  };

  const resetInput = (params: URLSearchParams) => {
    setInputValue('');
    params.delete('golfCourseName');
    router.replace(`?${params.toString()}`);
  };

  return { inputValue, setInputValue, applyInput, resetInput };
}
