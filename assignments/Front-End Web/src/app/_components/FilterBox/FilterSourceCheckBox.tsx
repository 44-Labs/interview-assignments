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
      <div className="flex items-center gap-2 mb-1">
        <button
          type="button"
          onClick={handleToggleAll}
          className={`px-3 py-1 rounded-full text-xs font-semibold border transition
            ${
              tempSelected.length === uniqueSources.length
                ? 'bg-blue-500 text-white border-blue-500 shadow'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50'
            }`}
        >
          {tempSelected.length === uniqueSources.length ? '전체 해제' : '전체 선택'}
        </button>
        <span className="text-xs text-gray-500">
          출처 <b>{tempSelected.length}</b> / {uniqueSources.length}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {uniqueSources.map(data => {
          const selected = tempSelected.includes(data);
          return (
            <button
              key={data}
              type="button"
              onClick={() => handleToggleSource(data)}
              className={`px-3 py-1 rounded-full border font-medium transition
                ${
                  selected
                    ? 'bg-blue-500 text-white border-blue-500 shadow'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                }`}
              aria-pressed={selected}
            >
              {data}
            </button>
          );
        })}
      </div>
    </div>
  );
}
