import { TableRow, TableHeaderCell } from '@/components/common/Table';
import { SortOrder } from '@/types';

interface GolfPriceTableHeaderProps {
  sortField: string | null;
  sortOrder: SortOrder;
  onSort: (field: 'golfCourseName' | 'currentPrice') => void;
}

export default function GolfPriceTableHeader({ sortField, sortOrder, onSort }: GolfPriceTableHeaderProps) {
  return (
    <thead>
      <TableRow className="bg-gray-100">
        <TableHeaderCell
          sortable
          sortField={sortField}
          sortOrder={sortOrder}
          fieldName="golfCourseName"
          onClick={() => onSort('golfCourseName')}
        >
          골프장명
        </TableHeaderCell>
        <TableHeaderCell
          sortable
          sortField={sortField}
          sortOrder={sortOrder}
          fieldName="currentPrice"
          onClick={() => onSort('currentPrice')}
        >
          현재가
        </TableHeaderCell>
        <TableHeaderCell>등락</TableHeaderCell>
        <TableHeaderCell>거래소</TableHeaderCell>
        <TableHeaderCell>수집시각</TableHeaderCell>
      </TableRow>
    </thead>
  );
}
