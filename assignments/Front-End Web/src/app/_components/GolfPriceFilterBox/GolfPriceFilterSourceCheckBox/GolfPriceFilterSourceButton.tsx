import { BaseButton } from '@/components/common/BaseButton';

interface GolfPriceFilterSourceButtonProps {
  source: string;
  selected: boolean;
  onClick: () => void;
}

export default function GolfPriceFilterSourceButton({ source, selected, onClick }: GolfPriceFilterSourceButtonProps) {
  return (
    <BaseButton
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full border font-medium transition
        ${
          selected
            ? 'bg-blue-500 text-white border-blue-500 shadow'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
        }`}
      aria-pressed={selected}
    >
      {source}
    </BaseButton>
  );
}
