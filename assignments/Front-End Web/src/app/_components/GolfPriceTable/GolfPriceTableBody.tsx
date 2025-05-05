import { GolfCoursePrice } from '@/types';
import GolfPriceTableRow from './GolfPriceTableRow';
import GolfPriceEmptyTable from './GolfPriceEmptyTable';

interface GolfPriceTableBodyProps {
  data: GolfCoursePrice[];
  onRowClick: (golfCourseName: string) => void;
}

export default function GolfPriceTableBody({ data, onRowClick }: GolfPriceTableBodyProps) {
  return (
    <tbody>
      {data.length === 0 ? (
        <GolfPriceEmptyTable colSpan={5} />
      ) : (
        data.map(item => (
          <GolfPriceTableRow key={item.id} item={item} onClick={() => onRowClick(item.golfCourseName)} />
        ))
      )}
    </tbody>
  );
}
