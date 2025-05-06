import { SortOrder } from '@/types';
interface SortButtonProps {
  active?: boolean;
  sortOrder: SortOrder;
  onClick: () => void;
}

export const SortButton = ({ active, sortOrder, onClick }: SortButtonProps) => {
  const isAsc = sortOrder === 'asc';

  const baseStyle = 'block leading-[6px] text-[8px]';
  const activeColor = 'text-blue-600';
  const inactiveColor = 'text-gray-300';

  const getArrowStyle = (isUpArrow: boolean) => `
    ${baseStyle} ${active ? ((isUpArrow ? isAsc : !isAsc) ? activeColor : inactiveColor) : inactiveColor}
  `;

  return (
    <button onClick={onClick} className="ml-2 focus:outline-none  flex flex-col gap-[1px]">
      <span className={getArrowStyle(true)}>▲</span>
      <span className={getArrowStyle(false)}>▼</span>
    </button>
  );
};
