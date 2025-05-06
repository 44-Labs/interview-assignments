import GolfPriceFilterSourceButton from './GolfPriceFilterSourceButton';

interface GolfPriceFilterSourceButtonListProps {
  sources: string[];
  selected: string[];
  onToggle: (source: string) => void;
}

export default function GolfPriceFilterSourceButtonList({
  sources,
  selected,
  onToggle,
}: GolfPriceFilterSourceButtonListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sources.map(source => (
        <GolfPriceFilterSourceButton
          key={source}
          source={source}
          selected={selected.includes(source)}
          onClick={() => onToggle(source)}
        />
      ))}
    </div>
  );
}
