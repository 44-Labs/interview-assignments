import { golfApi } from '@/services/api';
import GolfPriceFilterBox from '../GolfPriceFilterBox';
import GolfPriceTable from '../GolfPriceTable';

interface GolfPriceViewProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function GolfPriceView({ searchParams }: GolfPriceViewProps) {
  const paramsObj = await searchParams;
  const [sourceData, initialData] = await Promise.all([golfApi.getGolfSources(), golfApi.getGolfPrices(paramsObj)]);

  return (
    <div className="space-y-4">
      <GolfPriceFilterBox sourceData={sourceData} />
      <GolfPriceTable initialData={initialData} searchParams={paramsObj} />
    </div>
  );
}
