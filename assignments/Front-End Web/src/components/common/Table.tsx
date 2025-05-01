import { SortField, SortOrder } from '@/types';
import { SortButton } from '../SortButton';

interface TableBaseProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface TableHeaderCellProps extends TableBaseProps {
  sortable?: boolean;
  onClick?: () => void;
  sortField?: SortField | null;
  sortOrder?: SortOrder | null;
  fieldName?: string;
}

export function Table({ children, className = '' }: TableBaseProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full table-auto ${className}`}>{children}</table>
    </div>
  );
}

export function TableRow({ children, className = '' }: TableBaseProps) {
  return <tr className={`border-b border-gray-200 hover:bg-gray-50 ${className}`}>{children}</tr>;
}

export function TableCell({ children, className = '' }: TableBaseProps) {
  return <td className={`px-4 py-3 text-center ${className}`}>{children}</td>;
}

export function TableHeaderCell({
  children,
  className = '',
  sortable,
  sortField,
  sortOrder,
  fieldName,
  onClick,
}: TableHeaderCellProps) {
  const isActive = fieldName === sortField;

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
        {sortable && onClick && <SortButton active={isActive} sortOrder={sortOrder} onClick={onClick} />}
      </div>
    </th>
  );
}
