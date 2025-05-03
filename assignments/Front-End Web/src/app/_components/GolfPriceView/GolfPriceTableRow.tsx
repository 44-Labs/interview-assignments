import { TableRow, TableCell } from '@/components/common/Table';
import { GolfClubPrice } from '@/types';
import { formatDate, isOldData } from '@/lib/util';

interface Props {
  item: GolfClubPrice;
  onClick: () => void;
}

export default function GolfPriceTableRow({ item, onClick }: Props) {
  return (
    <TableRow className={`cursor-pointer ${isOldData(item.collectedAt) ? 'opacity-50' : ''}`} onClick={onClick}>
      <TableCell>{item.golfCourseName}</TableCell>
      <TableCell>
        {item.currentPrice.toLocaleString()}원
        {item.isWarning && (
          <span className="ml-2 text-xs text-yellow-600 font-bold">
            ⚠️ {item.diffPercent > 0 ? '+' : ''}
            {item.diffPercent.toFixed(1)}%
          </span>
        )}
      </TableCell>
      <TableCell className={item.delta > 0 ? 'text-red-500' : item.delta < 0 ? 'text-blue-500' : ''}>
        {item.delta > 0 ? '+' : ''}
        {item.delta.toLocaleString()}원
      </TableCell>
      <TableCell>{item.source}</TableCell>
      <TableCell>{formatDate(item.collectedAt)}</TableCell>
    </TableRow>
  );
}
