'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Table, TableRow, TableCell, TableHeaderCell } from '@/components/common/Table';
import { GolfClubPriceWithWarning, SortOrder } from '@/types';
import { formatDate, isOldData } from '@/lib/util';
import { useModalStore } from '@/store/useModalStore';

export default function GolfPriceTable() {
  const [data, setData] = useState<GolfClubPriceWithWarning[]>([]);
  const { openModal } = useModalStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const sortField = searchParams.get('sortField');
  const sortOrder = searchParams.get('sortOrder') as SortOrder;

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    fetch(`/api/golf-prices?${params.toString()}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, [searchParams]);

  const handleRowClick = async (golfCourseName: string) => {
    const res = await fetch(`/api/golf-prices?golfCourseName=${golfCourseName}`);
    const { data: prices } = await res.json();
    openModal(prices);
  };

  const handleSort = (field: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sortField === field) {
      params.set('sortOrder', sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      params.set('sortField', field);
      params.set('sortOrder', 'desc');
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <Table>
      <thead>
        <TableRow className="bg-gray-100">
          <TableHeaderCell
            sortable
            sortField={sortField}
            sortOrder={sortOrder}
            fieldName="golfCourseName"
            onClick={() => handleSort('golfCourseName')}
          >
            골프장명
          </TableHeaderCell>
          <TableHeaderCell
            sortable
            sortField={sortField}
            sortOrder={sortOrder}
            fieldName="currentPrice"
            onClick={() => handleSort('currentPrice')}
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
          return (
            <TableRow
              key={item.id}
              className={`cursor-pointer ${isOldData(item.collectedAt) ? 'opacity-50' : ''}`}
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
