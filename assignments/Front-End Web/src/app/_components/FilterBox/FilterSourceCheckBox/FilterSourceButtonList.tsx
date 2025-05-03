import FilterSourceButton from './FilterSourceButton';

interface Props {
  sources: string[];
  selected: string[];
  onToggle: (source: string) => void;
}

export default function FilterSourceButtonList({ sources, selected, onToggle }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sources.map(source => (
        <FilterSourceButton
          key={source}
          source={source}
          selected={selected.includes(source)}
          onClick={() => onToggle(source)}
        />
      ))}
    </div>
  );
}
