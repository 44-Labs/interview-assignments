import { SortOrder } from '@/types';
import { Button } from './common/Button';

interface SortButtonProps {
  active: boolean;
  sortOrder?: SortOrder | null;
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
    <Button onClick={onClick} className="ml-2 focus:outline-none cursor-pointer flex flex-col gap-[1px]">
      <span className={getArrowStyle(true)}>▲</span>
      <span className={getArrowStyle(false)}>▼</span>
    </Button>
  );
};
