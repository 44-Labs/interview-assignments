'use client';

import { KeyboardEvent, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

interface GolfPriceFilterSearchInputProps {
  value: string;
  setValue: (v: string) => void;
  onApply: () => void;
  placeholder?: string;
  className?: string;
}

export default function GolfPriceFilterSearchInput({
  value,
  setValue,
  onApply,
  placeholder,
  className,
}: GolfPriceFilterSearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter' && inputRef.current) {
      e.preventDefault();
      onApply();
    }
  };

  return (
    <div className={`relative w-full max-w-xs ${className}`}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <FiSearch size={18} />
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
        <button onClick={() => setValue('')} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          <FiX size={18} />
        </button>
      )}
    </div>
  );
}
