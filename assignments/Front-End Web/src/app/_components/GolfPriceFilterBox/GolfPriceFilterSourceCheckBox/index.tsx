import GolfPriceFilterSourceToggleAllButton from './GolfPriceFilterSourceToggleAllButton';
import GolfPriceFilterSourceButtonList from './GolfPriceFilterSourceButtonList';

interface FilterSourceCheckBoxProps {
  uniqueSources: string[];
  tempSelected: string[];
  setTempSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function GolfPriceFilterSourceCheckBox({
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
      <GolfPriceFilterSourceToggleAllButton
        allCount={uniqueSources.length}
        selectedCount={tempSelected.length}
        onClick={handleToggleAll}
      />
      <GolfPriceFilterSourceButtonList sources={uniqueSources} selected={tempSelected} onToggle={handleToggleSource} />
    </div>
  );
}
