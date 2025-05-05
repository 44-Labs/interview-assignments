import { BaseTableCell, BaseTableRow } from '@/components/common/BaseTable';

interface GolfPriceEmptyTableProps {
  colSpan: number;
  message?: string;
}

export default function GolfPriceEmptyTable({ colSpan, message = '데이터가 없습니다.' }: GolfPriceEmptyTableProps) {
  return (
    <BaseTableRow>
      <BaseTableCell colSpan={colSpan} className="py-20 text-center text-gray-400">
        {message}
      </BaseTableCell>
    </BaseTableRow>
  );
}
