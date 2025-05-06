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
          width="w-2/5"
          sortable
          sortField={sortField}
          sortOrder={sortOrder}
          isActive={sortField === 'golfCourseName'}
          onClick={() => onSort('golfCourseName')}
        >
          골프장명
        </BaseTableHeaderCell>
        <BaseTableHeaderCell
          width="w-1/5"
          sortable
          sortField={sortField}
          sortOrder={sortOrder}
          isActive={sortField === 'currentPrice'}
          onClick={() => onSort('currentPrice')}
        >
          현재가
        </BaseTableHeaderCell>
        <BaseTableHeaderCell width="w-1/5">등락</BaseTableHeaderCell>
        <BaseTableHeaderCell width="w-1/5">거래소</BaseTableHeaderCell>
        <BaseTableHeaderCell width="w-1/5">수집시각</BaseTableHeaderCell>
      </BaseTableRow>
    </thead>
  );
}
