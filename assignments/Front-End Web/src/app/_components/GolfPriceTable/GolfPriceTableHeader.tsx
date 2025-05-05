import { BaseTableRow, BaseTableHeaderCell } from '@/components/common/BaseTable';
import { SortOrder } from '@/types';

interface GolfPriceTableHeaderProps {
  sortField: string | null;
  sortOrder: SortOrder;
  onSort: (field: 'golfCourseName' | 'currentPrice') => void;
}

export default function GolfPriceTableHeader({ sortField, sortOrder, onSort }: GolfPriceTableHeaderProps) {
  return (
    <thead>
      <BaseTableRow className="bg-gray-100">
        <BaseTableHeaderCell
          sortable
          sortField={sortField}
          sortOrder={sortOrder}
          isActive={sortField === 'golfCourseName'}
          onClick={() => onSort('golfCourseName')}
        >
          골프장명
        </BaseTableHeaderCell>
        <BaseTableHeaderCell
          sortable
          sortField={sortField}
          sortOrder={sortOrder}
          isActive={sortField === 'currentPrice'}
          onClick={() => onSort('currentPrice')}
        >
          현재가
        </BaseTableHeaderCell>
        <BaseTableHeaderCell>등락</BaseTableHeaderCell>
        <BaseTableHeaderCell>거래소</BaseTableHeaderCell>
        <BaseTableHeaderCell>수집시각</BaseTableHeaderCell>
      </BaseTableRow>
    </thead>
  );
}
