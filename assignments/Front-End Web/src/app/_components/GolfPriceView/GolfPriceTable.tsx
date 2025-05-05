import { BaseTable } from '@/components/common/BaseTable';
import { GolfCoursePrice } from '@/types';
import { useModalStore } from '@/store/useModalStore';
import GolfPriceTableHeader from './GolfPriceTableHeader';
import GolfPriceTableBody from './GolfPriceTableBody';
import { useSortGolfData } from '@/app/_hook/useSortGolfData';

export default function GolfPriceTable({
  initialData,
  searchParams,
}: {
  initialData: GolfCoursePrice[];
  searchParams: Record<string, string>;
}) {
  const { openModal } = useModalStore();
  const { data, sortField, sortOrder, handleSort } = useSortGolfData({
    initialData,
    searchParams,
  });

  const handleRowClick = (golfCourseName: string) => {
    const filteredData = data.filter(item => item.golfCourseName === golfCourseName);
    openModal(filteredData);
  };

  return (
    <BaseTable>
      <GolfPriceTableHeader sortField={sortField} sortOrder={sortOrder} onSort={handleSort} />
      <GolfPriceTableBody data={data} onRowClick={handleRowClick} />
    </BaseTable>
  );
}
