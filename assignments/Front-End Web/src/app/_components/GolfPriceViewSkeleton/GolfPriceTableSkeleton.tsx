import { BaseTable, BaseTableCell, BaseTableHeaderCell, BaseTableRow } from '@/components/common/BaseTable';

export default function GolfPriceTableSkeleton() {
  const skeletonBaseStyle = 'h-6 bg-gray-200 rounded';

  const columnWidths = {
    golfCourseName: 'w-48',
    currentPrice: 'w-36',
    delta: 'w-32',
    source: 'w-40',
    collectedAt: 'w-44',
  };

  const SkeletonCell = ({ width }: { width: string }) => <div className={`${skeletonBaseStyle} ${width}`}></div>;

  return (
    <div className="animate-pulse px-50">
      <BaseTable>
        <thead>
          <BaseTableRow className="bg-gray-100">
            {Object.values(columnWidths).map((width, index) => (
              <BaseTableHeaderCell key={index}>
                <SkeletonCell width={width} />
              </BaseTableHeaderCell>
            ))}
          </BaseTableRow>
        </thead>
        <tbody>
          {[...Array(20)].map((_, rowIndex) => (
            <BaseTableRow key={rowIndex}>
              {Object.values(columnWidths).map((width, cellIndex) => (
                <BaseTableCell key={cellIndex}>
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
