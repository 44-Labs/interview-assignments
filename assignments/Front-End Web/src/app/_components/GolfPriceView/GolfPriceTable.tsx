import { BaseTable } from '@/components/common/BaseTable';
import { GolfCoursePrice } from '@/types';
import { useModalStore } from '@/store/useModalStore';
import GolfPriceTableHeader from './GolfPriceTableHeader';
import GolfPriceTableBody from './GolfPriceTableBody';
import { useSortGolfData } from '@/app/_hook/useSortGolfData';
import { getGolfPrices } from '@/services/api';

export default function GolfPriceTable({ initialData }: { initialData: GolfCoursePrice[] }) {
  const { openModal } = useModalStore();
  const { data, sortField, sortOrder, handleSort } = useSortGolfData(initialData);

  const handleRowClick = async (golfCourseName: string) => {
    const data = await getGolfPrices({ golfCourseName });
    openModal(data);
  };

  return (
    <BaseTable>
      <GolfPriceTableHeader sortField={sortField} sortOrder={sortOrder} onSort={handleSort} />
      <GolfPriceTableBody data={data} onRowClick={handleRowClick} />
    </BaseTable>
  );
}
