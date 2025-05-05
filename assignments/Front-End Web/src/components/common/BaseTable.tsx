import { SortButton } from '../SortButton';
import { SortOrder } from '@/types';

interface BaseTableProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  colSpan?: number;
}

interface BaseTableHeaderCellProps extends BaseTableProps {
  sortable?: boolean;
  onClick?: () => void;
  sortField?: string | null;
  sortOrder?: SortOrder;
  fieldName?: string;
  isActive?: boolean;
  width?: string;
}

export function BaseTable({ children, className = '' }: BaseTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full table-fixed ${className}`}>{children}</table>
    </div>
  );
}

export function BaseTableRow({ children, className = '', onClick }: BaseTableProps) {
  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-50 ${className}`} onClick={onClick}>
      {children}
    </tr>
  );
}

export function BaseTableCell({ children, className = '', colSpan }: BaseTableProps) {
  return (
    <td colSpan={colSpan} className={`px-4 py-3 text-center ${className}`}>
      {children}
    </td>
  );
}

export function BaseTableHeaderCell({
  children,
  className = '',
  sortable,
  sortOrder,
  isActive,
  onClick,
  width = 'w-1/5',
}: BaseTableHeaderCellProps) {
  return (
    <th
      className={`
          ${width} px-4 py-2 text-center 
          ${sortable ? 'cursor-pointer hover:bg-gray-200 group' : ''} 
          ${className}
        `}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-1">
        {children}
        {sortable && onClick && <SortButton active={isActive} sortOrder={sortOrder ?? ''} onClick={onClick} />}
      </div>
    </th>
  );
}
