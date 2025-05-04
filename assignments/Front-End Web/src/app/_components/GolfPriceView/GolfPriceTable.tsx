import { Table } from '@/components/common/Table';
import { GolfClubPrice } from '@/types';
import { useModalStore } from '@/store/useModalStore';
import GolfPriceTableHeader from './GolfPriceTableHeader';
import GolfPriceTableBody from './GolfPriceTableBody';
import { useSortGolfData } from '@/hook/useSortGolfData';

export default function GolfPriceTable({ initialData }: { initialData: GolfClubPrice[] }) {
  const { openModal } = useModalStore();
  const { data, sortField, sortOrder, handleSort } = useSortGolfData(initialData);

  const handleRowClick = async (golfCourseName: string) => {
    const res = await fetch(`/api/golf-prices?golfCourseName=${golfCourseName}`);
    const { data: prices } = await res.json();
    openModal(prices);
  };

  return (
    <Table>
      <GolfPriceTableHeader sortField={sortField} sortOrder={sortOrder} onSort={handleSort} />
      <GolfPriceTableBody data={data} onRowClick={handleRowClick} />
    </Table>
  );
}
