import GolfPriceFilterBoxSkeleton from './GolfPriceFilterBoxSkeleton';
import GolfPriceTableSkeleton from './GolfPriceTableSkeleton';

export default function GolfPriceViewSkeleton() {
  return (
    <div className="space-y-4">
      <GolfPriceFilterBoxSkeleton />
      <GolfPriceTableSkeleton />
    </div>
  );
}
