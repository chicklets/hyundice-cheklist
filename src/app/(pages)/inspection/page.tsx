'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function InspectionPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white p-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w- 6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">HX200AL</h1>
      </div>
      <div className="pt-8 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 leading-relaxed">
          오늘도 안전 운행을 위해
          <br />
          장비를 점검해 볼까요?
        </h1>
        <p className="text-lg text-gray-600">아래 점검 항목을 선택해주세요.</p>
      </div>

      <div className="flex flex-col gap-4 pb-8 mt-auto">
        <Link
          href="/inspection/daily"
          className="w-full py-4 px-8 bg-green-600 hover:bg-green-600 rounded-lg text-center font-bold text-xl text-white transition-all duration-200 hover:shadow-lg active:scale-95"
        >
          일상 점검
        </Link>

        <div className="w-full py-4 px-8 bg-green-100 hover:bg-green-50 rounded-lg text-center font-semibold text-xl text-green-600 hover:text-green-700 transition-all duration-200 hover:shadow-lg  hover:border-green-400 active:scale-95">
          50시간 점검
        </div>

        <div className="w-full py-4 px-8 bg-green-100 hover:bg-green-50 rounded-lg text-center font-semibold text-xl text-green-600 hover:text-green-700 transition-all duration-200 hover:shadow-lg  hover:border-green-400 active:scale-95">
          250시간 점검
        </div>

        <div className="w-full py-4 px-8 bg-green-100 hover:bg-green-50 rounded-lg text-center font-semibold text-xl text-green-600 hover:text-green-700 transition-all duration-200 hover:shadow-lg bo hover:border-green-400 active:scale-95">
          500시간 점검
        </div>
      </div>
    </div>
  );
}
