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

function generatePriceWithinRange(basePrice: number) {
  // 5% 이상 차이가 나는 경우는 10%의 확률로만 발생
  const shouldGenerateLargeDelta = Math.random() < 0.1;

  if (shouldGenerateLargeDelta) {
    // 5~10% 차이나는 가격 생성
    const deltaPercent = (Math.random() * 5 + 5) * (Math.random() < 0.5 ? 1 : -1);
    const delta = Math.floor(basePrice * (deltaPercent / 100));
    return { currentPrice: basePrice + delta, delta };
  } else {
    // 5% 미만의 차이나는 가격 생성
    const deltaPercent = Math.random() * 4.9 * (Math.random() < 0.5 ? 1 : -1);
    const delta = Math.floor(basePrice * (deltaPercent / 100));
    return { currentPrice: basePrice + delta, delta };
  }
}

const mockData: GolfClubPrice[] = [];

golfCourses.forEach((course, index) => {
  const basePrice = generateRandomPrice(20000, 50000);
  sources.forEach((source, sourceIndex) => {
    const { currentPrice, delta } = generatePriceWithinRange(basePrice);
    mockData.push({
      id: (index * sources.length + sourceIndex + 1).toString(),
      golfCourseName: course,
      currentPrice,
      delta,
      source,
      collectedAt: generateRandomDate(5),
      isWarning: Math.abs(delta) / basePrice > 0.05,
      avgPrice: basePrice,
      diffPercent: (delta / basePrice) * 100,
    });
  });
});

export const mockGolfPrices = mockData;
