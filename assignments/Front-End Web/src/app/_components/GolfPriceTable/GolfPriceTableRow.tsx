import { BaseTableRow, BaseTableCell } from '@/components/common/BaseTable';
import { GolfCoursePrice } from '@/types';
import { formatDate, isOldData } from '@/lib/util';

interface GolfPriceTableRowProps {
  item: GolfCoursePrice;
  onClick: () => void;
}

export default function GolfPriceTableRow({ item, onClick }: GolfPriceTableRowProps) {
  return (
    <BaseTableRow className={`cursor-pointer ${isOldData(item.collectedAt) ? 'opacity-50' : ''}`} onClick={onClick}>
      <BaseTableCell>{item.golfCourseName}</BaseTableCell>
      <BaseTableCell>
        {item.currentPrice.toLocaleString()}원
        {item.isWarning && (
          <span className="ml-2 text-xs text-yellow-600 font-bold">
            ⚠️ {item.diffPercent > 0 ? '+' : ''}
            {item.diffPercent.toFixed(1)}%
          </span>
        )}
      </BaseTableCell>
      <BaseTableCell className={item.delta > 0 ? 'text-red-500' : item.delta < 0 ? 'text-blue-500' : ''}>
        {item.delta > 0 ? '+' : ''}
        {item.delta.toLocaleString()}원
      </BaseTableCell>
      <BaseTableCell>{item.source}</BaseTableCell>
      <BaseTableCell>{formatDate(item.collectedAt)}</BaseTableCell>
    </BaseTableRow>
  );
}
