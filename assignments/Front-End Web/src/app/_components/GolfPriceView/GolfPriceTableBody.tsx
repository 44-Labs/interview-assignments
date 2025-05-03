import { GolfClubPrice } from '@/types';
import GolfPriceTableRow from './GolfPriceTableRow';
import GolfPriceEmptyTable from './GolfPriceEmptyTable';
interface Props {
  data: GolfClubPrice[];
  onRowClick: (golfCourseName: string) => void;
}

export default function GolfPriceTableBody({ data, onRowClick }: Props) {
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
