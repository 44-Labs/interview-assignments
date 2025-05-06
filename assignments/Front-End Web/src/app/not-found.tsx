'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다.</h2>
      <p className="mb-6 text-gray-500">요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</p>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        홈으로 이동
      </Link>
    </div>
  );
}
