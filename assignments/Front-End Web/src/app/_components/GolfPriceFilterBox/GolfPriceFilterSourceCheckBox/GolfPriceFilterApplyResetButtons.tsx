'use client';

import { BaseButton } from '@/components/common/BaseButton';

interface GolfPriceFilterApplyResetButtonsProps {
  onApply: () => void;
  onReset: () => void;
}

export default function GolfPriceFilterApplyResetButtons({ onApply, onReset }: GolfPriceFilterApplyResetButtonsProps) {
  return (
    <div className="flex gap-2 flex-nowrap">
      <BaseButton
        className=" bg-blue-500 text-white hover:bg-blue-600 transition shadow min-h-[40px] whitespace-nowrap"
        onClick={onApply}
      >
        적용
      </BaseButton>
      <BaseButton
        className=" bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow min-h-[40px] whitespace-nowrap"
        onClick={onReset}
      >
        초기화
      </BaseButton>
    </div>
  );
}
