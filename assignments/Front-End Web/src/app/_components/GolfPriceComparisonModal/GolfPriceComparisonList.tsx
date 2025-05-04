import { GolfCoursePrice } from '@/types';

interface GolfPriceComparisonListProps {
  data: GolfCoursePrice[];
}

export default function GolfPriceComparisonList({ data }: GolfPriceComparisonListProps) {
  return (
    <ul className="space-y-4">
      {data.map(item => {
        return (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg font-medium text-gray-700">{item.source}</span>
            <span className="text-xl font-semibold text-gray-700">{item.currentPrice.toLocaleString()}원</span>
          </li>
        );
      })}
    </ul>
  );
}
