'use client';

import { Table } from '@/components/common/Table';
import { GolfClubPrice, SortOrder } from '@/types';
import { sortGolfPrices } from '@/lib/util';
import { useModalStore } from '@/store/useModalStore';
import { useState } from 'react';
import GolfPriceTableHeader from './GolfPriceTableHeader';
import GolfPriceTableBody from './GolfPriceTableBody';

export default function GolfPriceTable({ initialData }: { initialData: GolfClubPrice[] }) {
  const { openModal } = useModalStore();
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null);
  const sortedData = sortGolfPrices(initialData, sortField as 'golfCourseName' | 'currentPrice', sortOrder);

  const handleRowClick = async (golfCourseName: string) => {
    const res = await fetch(`/api/golf-prices?golfCourseName=${golfCourseName}`);
    const { data: prices } = await res.json();
    openModal(prices);
  };

  const handleSort = (field: 'golfCourseName' | 'currentPrice') => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <Table>
      <GolfPriceTableHeader sortField={sortField} sortOrder={sortOrder} onSort={handleSort} />
      <GolfPriceTableBody data={sortedData} onRowClick={handleRowClick} />
    </Table>
  );
}
