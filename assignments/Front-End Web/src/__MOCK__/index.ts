import { GolfClubPrice } from '@/types';

const golfCourses = [
  '가평 베네스트',
  '남촌컨트리클럽',
  '레이크사이드 컨트리클럽',
  '남서울 컨트리클럽',
  '88 컨트리클럽',
  '강남 컨트리클럽',
  '더 클래식 골프장',
  '동래 베네스트',
  '렉스필드 컨트리클럽',
  '마우나오션 컨트리클럽',
  '블루원 용인 컨트리클럽',
];

const sources = ['골프존마켓', '골프장부킹', '골프패스', 'XGOLF', '골프존카운티'];

function generateRandomPrice(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomDate(days: number) {
  const now = new Date();
  const randomTime = new Date(now.getTime() - Math.random() * days * 24 * 60 * 60 * 1000);
  return randomTime.toISOString();
}

const mockData: GolfClubPrice[] = Array.from({ length: 50 }, (_, index) => {
  const basePrice = generateRandomPrice(20000, 50000);
  const delta = generateRandomPrice(-5000, 5000);
  const golfCourseName = golfCourses[Math.floor(Math.random() * golfCourses.length)];
  const source = sources[Math.floor(Math.random() * sources.length)];

  return {
    id: (index + 1).toString(),
    golfCourseName,
    currentPrice: basePrice,
    delta,
    source,
    collectedAt: generateRandomDate(5),
  };
});

golfCourses.forEach((course, index) => {
  sources.forEach((source, sourceIndex) => {
    const basePrice = generateRandomPrice(20000, 50000);
    mockData[index * sources.length + sourceIndex] = {
      id: (index * sources.length + sourceIndex + 1).toString(),
      golfCourseName: course,
      currentPrice: basePrice,
      delta: generateRandomPrice(-5000, 5000),
      source,
      collectedAt: generateRandomDate(5),
    };
  });
});

export const mockGolfPrices = mockData;
