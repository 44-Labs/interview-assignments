import { BaseTable, BaseTableCell, BaseTableHeaderCell, BaseTableRow } from '@/components/common/BaseTable';

export default function GolfPriceTableSkeleton() {
  const skeletonBaseStyle = 'h-6 bg-gray-200 rounded';

  const columnWidths = {
    golfCourseName: 'w-24 xs:w-32 sm:w-36 md:w-40 lg:w-48',
    currentPrice: 'w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36',
    delta: 'w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32',
    source: 'w-20 xs:w-28 sm:w-32 md:w-36 lg:w-40',
    collectedAt: 'w-24 xs:w-32 sm:w-36 md:w-40 lg:w-44',
  };

  const SkeletonCell = ({ width }: { width: string }) => <div className={`${skeletonBaseStyle} ${width}`}></div>;

  return (
    <div className="animate-pulse mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-40 overflow-x-auto">
      <BaseTable className="min-w-[640px]">
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
