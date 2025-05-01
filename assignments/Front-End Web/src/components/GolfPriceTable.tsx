'use client';

import { useState } from 'react';
import { GolfClubPrice } from '@/types';
import { Table, TableCell, TableHeaderCell, TableRow } from '@/components/common/Table';
import { formatDate } from '@/lib/util';

interface GolfPriceTableProps {
  initialData: GolfClubPrice[];
}

export default function GolfPriceTable({ initialData }: GolfPriceTableProps) {
  const [data] = useState<GolfClubPrice[]>(initialData);

  return (
    <Table>
      <thead>
        <TableRow className="bg-gray-100">
          <TableHeaderCell>골프장명</TableHeaderCell>
          <TableHeaderCell>현재가</TableHeaderCell>
          <TableHeaderCell>등락</TableHeaderCell>
          <TableHeaderCell>거래소</TableHeaderCell>
          <TableHeaderCell>수집시각</TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        {data.map(item => (
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
