import { BaseTable, BaseTableCell, BaseTableHeaderCell, BaseTableRow } from '@/components/common/BaseTable';

export default function GolfPriceTableSkeleton() {
  const skeletonBaseStyle = 'h-6 bg-gray-200 rounded animate-pulse';

  const columnWidths = {
    golfCourseName: 'w-32',
    currentPrice: 'w-24',
    delta: 'w-20',
    source: 'w-28',
    collectedAt: 'w-32',
  };

  const SkeletonCell = ({ width }: { width: string }) => <div className={`${skeletonBaseStyle} ${width}`} />;

  return (
    <div className="overflow-x-auto">
      <BaseTable>
        <thead>
          <BaseTableRow className="bg-gray-100">
            {Object.entries(columnWidths).map(([key, width]) => (
              <BaseTableHeaderCell key={key}>
                <SkeletonCell width={width} />
              </BaseTableHeaderCell>
            ))}
          </BaseTableRow>
        </thead>
        <tbody>
          {[...Array(20)].map((_, rowIndex) => (
            <BaseTableRow key={rowIndex}>
              {Object.entries(columnWidths).map(([key, width]) => (
                <BaseTableCell key={key}>
                  <div className="flex justify-center">
                    <SkeletonCell width={width} />
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
