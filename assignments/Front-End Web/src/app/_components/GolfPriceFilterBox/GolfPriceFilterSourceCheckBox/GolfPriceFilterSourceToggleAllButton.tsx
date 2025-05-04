import { BaseButton } from '@/components/common/BaseButton';

interface GolfPriceFilterSourceToggleAllButtonProps {
  allCount: number;
  selectedCount: number;
  onClick: () => void;
}

export default function GolfPriceFilterSourceToggleAllButton({
  allCount,
  selectedCount,
  onClick,
}: GolfPriceFilterSourceToggleAllButtonProps) {
  const isAllSelected = selectedCount === allCount;
  return (
    <div className="flex items-center gap-2 mb-1">
      <BaseButton
        type="button"
        onClick={onClick}
        className={`
          ${
            isAllSelected
              ? 'bg-blue-500 text-white border-blue-500 shadow'
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50'
          }`}
      >
        {isAllSelected ? '전체 해제' : '전체 선택'}
      </BaseButton>
      <span className="text-xs text-gray-500">
        출처 <b>{selectedCount}</b> / {allCount}
      </span>
    </div>
  );
}
