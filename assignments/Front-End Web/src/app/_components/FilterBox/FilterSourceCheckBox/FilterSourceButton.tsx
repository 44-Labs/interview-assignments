import { Button } from '@/components/common/Button';

interface Props {
  source: string;
  selected: boolean;
  onClick: () => void;
}

export default function FilterSourceButton({ source, selected, onClick }: Props) {
  return (
    <Button
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
    </Button>
  );
}
