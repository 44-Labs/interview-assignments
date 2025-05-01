import { Table, TableCell, TableHeaderCell, TableRow } from '@/components/common/Table';

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
    <div className="animate-pulse">
      <Table>
        <thead>
          <TableRow className="bg-gray-100">
            {Object.values(columnWidths).map((width, index) => (
              <TableHeaderCell key={index}>
                <SkeletonCell width={width} />
              </TableHeaderCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {[...Array(20)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(columnWidths).map((width, cellIndex) => (
                <TableCell key={cellIndex}>
                  <SkeletonCell width={width} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
