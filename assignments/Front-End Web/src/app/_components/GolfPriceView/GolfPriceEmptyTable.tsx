import { TableCell, TableRow } from '@/components/common/Table';

interface Props {
  colSpan: number;
  message?: string;
}

export default function GolfPriceEmptyTable({ colSpan, message = '데이터가 없습니다.' }: Props) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="py-20 text-center text-gray-400">
        {message}
      </TableCell>
    </TableRow>
  );
}
