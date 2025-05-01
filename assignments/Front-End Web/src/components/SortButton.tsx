import { SortField, SortOrder } from '@/types';

interface SortButtonProps {
  sortField?: SortField;
  sortOrder?: SortOrder;
  onClick?: () => void;
}

export const SortButton = ({ sortField, sortOrder, onClick }: SortButtonProps) => {
  const isActive = sortField;
  const isAsc = sortOrder === 'asc';

  const baseStyle = 'block leading-[6px] text-[8px]';
  const activeColor = 'text-blue-600';
  const inactiveColor = 'text-gray-300';

  const getArrowStyle = (isUpArrow: boolean) => `
    ${baseStyle} ${isActive ? ((isUpArrow ? isAsc : !isAsc) ? activeColor : inactiveColor) : inactiveColor}
  `;

  return (
    <div
      onClick={onClick}
      className="ml-2 focus:outline-none cursor-pointer flex flex-col gap-[1px]"
      aria-label={`${sortField} 정렬`}
    >
      <span className={getArrowStyle(true)}>▲</span>
      <span className={getArrowStyle(false)}>▼</span>
    </div>
  );
};
