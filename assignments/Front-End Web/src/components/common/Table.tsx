interface TableBaseProps {
  children: React.ReactNode;
  className?: string;
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

export function TableHeaderCell({ children, className = '' }: TableBaseProps) {
  return <th className={`px-4 py-2 text-center ${className}`}>{children}</th>;
}
