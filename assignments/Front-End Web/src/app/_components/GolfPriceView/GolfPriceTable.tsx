'use client';

import { Table, TableRow, TableCell, TableHeaderCell } from '@/components/common/Table';
import { GolfClubPriceWithWarning, SortField, SortOrder } from '@/types';
import { formatDate } from '@/lib/util';
import { isOldData } from '@/lib/util';
import { useModalStore } from '@/store/useModalStore';

export default function GolfPriceTable({
  data,
  toggleSort,
  sortField,
  sortOrder,
}: {
  data: GolfClubPriceWithWarning[];
  toggleSort: (field: SortField) => void;
  sortField: SortField | null;
  sortOrder: SortOrder | null;
}) {
  const { openModal } = useModalStore();

  const handleRowClick = async (golfCourseName: string) => {
    const res = await fetch(`/api/golf-prices/${golfCourseName}`);
    const { data: prices } = await res.json();
    openModal(prices);
  };

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
        {data.map(item => {
          const isOld = isOldData(item.collectedAt);
          return (
            <TableRow
              key={item.id}
              className={` cursor-pointer ${isOld ? 'opacity-50' : ''}`}
              onClick={() => handleRowClick(item.golfCourseName)}
            >
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
        })}
      </tbody>
    </Table>
  );
}
