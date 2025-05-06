import { BaseTable, BaseTableCell, BaseTableHeaderCell, BaseTableRow } from '@/components/common/BaseTable';

export default function GolfPriceTableSkeleton() {
  const skeletonBaseStyle = 'h-6 bg-gray-200 rounded animate-pulse';

  const columnWidths = {
    golfCourseName: 'w-2/5',
    currentPrice: 'w-1/5',
    delta: 'w-1/5',
    source: 'w-1/5',
    collectedAt: 'w-1/5',
  };

  const SkeletonCell = ({ width }: { width: string }) => <div className={`${skeletonBaseStyle} ${width}`} />;

  return (
    <div className="overflow-x-auto">
      <BaseTable>
        <thead>
          <BaseTableRow className="bg-gray-100">
            {Object.entries(columnWidths).map(([key, width]) => (
              <BaseTableHeaderCell key={key} width={width}>
                <SkeletonCell width="w-24" />
              </BaseTableHeaderCell>
            ))}
          </BaseTableRow>
        </thead>
        <tbody>
          {[...Array(20)].map((_, rowIndex) => (
            <BaseTableRow key={rowIndex}>
              {Object.entries(columnWidths).map(([key]) => (
                <BaseTableCell key={key}>
                  <div className="flex justify-center">
                    <SkeletonCell width="w-24" />
                  </div>
                </BaseTableCell>
              ))}
            </BaseTableRow>
          ))}
        </tbody>
      </BaseTable>
    </div>
  );
}
