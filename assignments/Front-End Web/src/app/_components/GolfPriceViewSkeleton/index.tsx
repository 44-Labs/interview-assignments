import GolfPriceFilterBoxSkeleton from './GolfPriceFilterBoxSkeleton';
import GolfPriceTableSkeleton from './GolfPriceTableSkeleton';

export default function GolfPriceViewSkeleton() {
  return (
    <div className="items-center justify-center mt-10">
      <GolfPriceFilterBoxSkeleton />
      <GolfPriceTableSkeleton />
    </div>
  );
}
