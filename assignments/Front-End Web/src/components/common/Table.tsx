import { SortButton } from '../SortButton';
import { SortOrder } from '@/types';

interface TableBaseProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  colSpan?: number;
}

interface TableHeaderCellProps extends TableBaseProps {
  sortable?: boolean;
  onClick?: () => void;
  sortField?: string | null;
  sortOrder?: SortOrder;
  fieldName?: string;
  isActive?: boolean;
}

export function Table({ children, className = '' }: TableBaseProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full table-fixed ${className}`}>{children}</table>
    </div>
  );
}

export function TableRow({ children, className = '', onClick }: TableBaseProps) {
  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-50 ${className}`} onClick={onClick}>
      {children}
    </tr>
  );
}

export function TableCell({ children, className = '', colSpan }: TableBaseProps) {
  return (
    <td colSpan={colSpan} className={`px-4 py-3 text-center ${className}`}>
      {children}
    </td>
  );
}

export function TableHeaderCell({
  children,
  className = '',
  sortable,
  sortOrder,
  isActive,
  onClick,
}: TableHeaderCellProps) {
  return (
    <th
      className={`
          px-4 py-2 text-center 
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
