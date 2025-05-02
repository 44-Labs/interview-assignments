'use client';

import { useState, KeyboardEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchInput({ placeholder, className }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (inputValue) {
      params.set('golfCourseName', inputValue);
    } else {
      params.delete('golfCourseName');
    }
    router.push(`?${params.toString()}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`mb-4 relative ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || '검색어를 입력해주세요.'}
        className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={() => router.push(`?golfCourseName=${inputValue}`)}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        검색
      </button>
    </div>
  );
}
