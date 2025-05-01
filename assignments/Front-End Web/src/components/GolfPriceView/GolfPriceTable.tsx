'use client';

import { Table, TableRow, TableCell, TableHeaderCell } from '@/components/common/Table';
import { GolfClubPrice, SortField, SortOrder } from '@/types';
import { formatDate } from '@/lib/util';

export default function GolfPriceTable({
  sortedData,
  toggleSort,
  sortField,
  sortOrder,
}: {
  sortedData: GolfClubPrice[];
  toggleSort: (field: SortField) => void;
  sortField: SortField | null;
  sortOrder: SortOrder | null;
}) {
  return (
    <Table>
      <thead>
        <TableRow className="bg-gray-100">
          <TableHeaderCell
            sortable
            sortField={sortField}
            sortOrder={sortOrder}
            onClick={() => toggleSort('golfCourseName')}
            fieldName="golfCourseName"
          >
            골프장명
          </TableHeaderCell>
          <TableHeaderCell
            sortable
            sortField={sortField}
            sortOrder={sortOrder}
            onClick={() => toggleSort('currentPrice')}
            fieldName="currentPrice"
          >
            현재가
          </TableHeaderCell>
          <TableHeaderCell>등락</TableHeaderCell>
          <TableHeaderCell>거래소</TableHeaderCell>
          <TableHeaderCell>수집시각</TableHeaderCell>
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
