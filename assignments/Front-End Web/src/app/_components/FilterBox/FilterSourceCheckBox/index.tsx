import FilterSourceToggleAllButton from './FilterSourceToggleAllButton';
import FilterSourceButtonList from './FilterSourceButtonList';

interface FilterSourceCheckBoxProps {
  uniqueSources: string[];
  tempSelected: string[];
  setTempSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterSourceCheckBox({
  uniqueSources,
  tempSelected,
  setTempSelected,
}: FilterSourceCheckBoxProps) {
  const handleToggleAll = () => {
    if (tempSelected.length === uniqueSources.length) {
      setTempSelected([]);
    } else {
      setTempSelected(uniqueSources);
    }
  };

  const handleToggleSource = (source: string) => {
    setTempSelected(prev => (prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]));
  };

  return (
    <div className="flex flex-col items-center gap-2 mb-4">
      <FilterSourceToggleAllButton
        allCount={uniqueSources.length}
        selectedCount={tempSelected.length}
        onClick={handleToggleAll}
      />
      <FilterSourceButtonList sources={uniqueSources} selected={tempSelected} onToggle={handleToggleSource} />
    </div>
  );
}
