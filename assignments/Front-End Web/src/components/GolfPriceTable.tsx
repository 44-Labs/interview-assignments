'use client';

import { useGolfPriceSort } from '@/hooks/useGolfPriceSort';
import { Table, TableRow, TableCell, TableHeaderCell } from '@/components/common/Table';
import { GolfClubPrice } from '@/types';
import { formatDate } from '@/lib/util';

interface GolfPriceTableProps {
  initialData: GolfClubPrice[];
}

export default function GolfPriceTable({ initialData }: GolfPriceTableProps) {
  const { sortedData, toggleSort } = useGolfPriceSort(initialData);

  return (
    <Table>
      <thead>
        <TableRow className="bg-gray-100">
          <TableHeaderCell sortable onClick={() => toggleSort('golfCourseName')}>
            골프장명
          </TableHeaderCell>
          <TableHeaderCell sortable onClick={() => toggleSort('currentPrice')}>
            현재가
          </TableHeaderCell>
          <TableHeaderCell sortable onClick={() => toggleSort('delta')}>
            등락
          </TableHeaderCell>
          <TableHeaderCell>거래소</TableHeaderCell>
          <TableHeaderCell sortable onClick={() => toggleSort('collectedAt')}>
            수집시각
          </TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.golfCourseName}</TableCell>
            <TableCell>{item.currentPrice.toLocaleString()}원</TableCell>
            <TableCell className={item.delta > 0 ? 'text-red-500' : item.delta < 0 ? 'text-blue-500' : ''}>
              {item.delta > 0 ? '+' : ''}
              {item.delta.toLocaleString()}원
            </TableCell>
            <TableCell>{item.source}</TableCell>
            <TableCell>{formatDate(item.collectedAt)}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
