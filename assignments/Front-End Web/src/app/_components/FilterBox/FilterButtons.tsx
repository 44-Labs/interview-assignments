'use client';

import { Button } from '@/components/common/Button';

interface FilterButtonsProps {
  onApply: () => void;
  onReset: () => void;
}

export default function FilterButtons({ onApply, onReset }: FilterButtonsProps) {
  return (
    <div className="flex gap-2 flex-nowrap">
      <Button
        className=" bg-blue-500 text-white hover:bg-blue-600 transition shadow min-h-[40px] whitespace-nowrap"
        onClick={onApply}
      >
        적용
      </Button>
      <Button
        className=" bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow min-h-[40px] whitespace-nowrap"
        onClick={onReset}
      >
        초기화
      </Button>
    </div>
  );
}
