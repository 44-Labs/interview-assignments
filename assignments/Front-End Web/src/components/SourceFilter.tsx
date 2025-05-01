import { Button } from './common/Button';

interface SourceFilterProps {
  sources: string[];
  selectedSources: string[];
  setSelectedSources: (source: string) => void;
  handleApplyFilter: () => void;
  handleResetFilter: () => void;
}

export function SourceFilter({
  sources,
  selectedSources,
  setSelectedSources,
  handleApplyFilter,
  handleResetFilter,
}: SourceFilterProps) {
  return (
    <div className="max-w-2xl mx-auto p-2 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-m font-medium text-gray-600">거래소</span>
        <div className="flex flex-wrap justify-center gap-2">
          {sources.map(source => (
            <label
              key={source}
              className="flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedSources.includes(source)}
                onChange={() => setSelectedSources(source)}
                className="w-4 h-4 accent-blue-500 rounded"
              />
              <span className="text-m  text-gray-700">{source}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          onClick={handleApplyFilter}
          className="px-2 py-2 text-xs rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-sm"
        >
          적용
        </Button>
        <Button
          onClick={handleResetFilter}
          className="px-2 py-2 text-xs rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors shadow-sm"
        >
          초기화
        </Button>
      </div>
    </div>
  );
}
