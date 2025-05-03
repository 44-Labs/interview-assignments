import { GolfClubPrice } from '@/types';
import GolfPriceTableRow from './GolfPriceTableRow';

interface Props {
  data: GolfClubPrice[];
  onRowClick: (golfCourseName: string) => void;
}

export default function GolfPriceTableBody({ data, onRowClick }: Props) {
  return (
    <tbody>
      {data.map(item => (
        <GolfPriceTableRow key={item.id} item={item} onClick={() => onRowClick(item.golfCourseName)} />
      ))}
    </tbody>
  );
}
