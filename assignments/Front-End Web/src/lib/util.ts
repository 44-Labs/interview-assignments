import { GolfClubPrice } from '@/types';

export const formatDate = (date: string) => {
  const d = new Date(date);
  const today = new Date();

  // 오늘 날짜인 경우
  if (d.toDateString() === today.toDateString()) {
    return `오늘 ${d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}`;
  }

  // 어제 날짜인 경우
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (d.toDateString() === yesterday.toDateString()) {
    return `어제 ${d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}`;
  }

  // 그 외의 경우
  return d.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export function isOldData(collectedAt: string, days = 3) {
  const now = new Date();
  const collected = new Date(collectedAt);
  const diffMs = now.getTime() - collected.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= days;
}
