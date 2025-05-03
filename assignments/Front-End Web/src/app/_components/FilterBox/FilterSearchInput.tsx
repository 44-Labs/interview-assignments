'use client';

import { KeyboardEvent } from 'react';
import { useRef } from 'react';

interface FilterSearchInputProps {
  value: string;
  setValue: (v: string) => void;
  onApply: () => void;
  placeholder?: string;
  className?: string;
}

export default function FilterSearchInput({
  value,
  setValue,
  onApply,
  placeholder,
  className,
}: FilterSearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onApply();
    }
  };

  return (
    <div className={`relative w-full max-w-xs ${className}`}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M20 20l-3.5-3.5" />
        </svg>
      </span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
      />
      {value && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={() => {
            setValue('');
            inputRef.current?.focus();
          }}
          aria-label="검색어 지우기"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#f3f4f6" />
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M9 9l6 6m0-6l-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
