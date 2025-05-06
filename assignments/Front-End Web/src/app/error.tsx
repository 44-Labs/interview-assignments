'use client';

import { BaseButton } from '@/components/common/BaseButton';
import { useRouter } from 'next/navigation';

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-xl font-bold mb-2">데이터를 불러오는 중 오류가 발생했습니다.</h2>
      <p className="mb-4 text-gray-500">{error.message}</p>
      <BaseButton className="bg-blue-500 text-white" onClick={() => router.refresh()}>
        다시 시도
      </BaseButton>
    </div>
  );
}
