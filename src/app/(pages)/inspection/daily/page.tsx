'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ChecklistItem {
  id: number;
  name: string;
  referencePage: string;
  completed: boolean;
  detailLink: string;
}

export default function DailyInspectionPage() {
  const router = useRouter();
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 1,
      name: '작동유 레벨',
      referencePage: '6-34',
      completed: false,
      detailLink: '/inspection/daily/detail',
    },
    {
      id: 2,
      name: '엔진오일 레벨',
      referencePage: '6-18,19',
      completed: false,
      detailLink: '/inspection/daily/detail2',
    },
    {
      id: 3,
      name: '라디에이터 냉각수',
      referencePage: '6-20,21,22,23',
      completed: false,
      detailLink: '/inspection/daily/detail',
    },
    {
      id: 4,
      name: '프리필터 (배수, 엘리먼트)',
      referencePage: '6-27',
      completed: false,
      detailLink: '/inspection/daily/detail2',
    },
    {
      id: 5,
      name: '펜 벨트 장력 및 손상',
      referencePage: '-',
      completed: false,
      detailLink: '/inspection/daily/detail',
    },
    {
      id: 6,
      name: '연료탱크',
      referencePage: '6-27',
      completed: false,
      detailLink: '/inspection/daily/detail2',
    },
  ]);

  const completedCount = items.filter((item) => item.completed).length;
  const totalCount = items.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 space-y-4">
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
          <h1 className="text-2xl font-bold text-gray-800">일상점검</h1>
        </div>
      </div>

      {/* Progress Section */}
      <div className="pb-6">
        <div className="bg-gray-50 space-y-4 p-6">
          <p className="text-center text-gray-700 font-medium">
            {completedCount}개 항목을 점검했어요.
          </p>

          {/* Progress Semi-Circle */}
          <div className="relative w-64 h-32 mx-auto">
            <svg className="w-64 h-32" viewBox="0 0 200 100">
              {/* Background arc */}
              <path
                d="M 20 90 A 80 80 0 0 1 180 90"
                stroke="#E5E7EB"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
              />
              {/* Progress arc */}
              <path
                d="M 20 90 A 80 80 0 0 1 180 90"
                stroke="#22C55E"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${Math.PI * 80}`}
                strokeDashoffset={`${
                  Math.PI * 80 * (1 - completedCount / totalCount)
                }`}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800">
                  {percentage}%
                </div>
                <div className="text-lg text-gray-400">
                  {completedCount}/{totalCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="flex-1 pb-6">
        <div className="bg-white border-gray-100 overflow-hidden">
          <div className="text-xl p-5 font-bold">✓ 체크리스트</div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-3 px-4 py-4 bg-gray-50/80 text-md font-semibold text-gray-600">
            <div className="col-span-6">점검 항목</div>
            <div className="col-span-4 text-center">참고 페이지</div>
            <div className="col-span-2 text-center">체크</div>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-12 gap-3 px-4 items-center text-md transition-colors cursor-pointer ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                } hover:bg-green-50/50`}
                onClick={() => router.push(item.detailLink)}
              >
                <div className="col-span-6 py-4">
                  <span
                    className={`font-medium transition-all text-md ${
                      item.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <div className="col-span-4 px-2 py-4 text-center">
                  <span className="text-sm text-blue-600 font-medium">
                    {item.referencePage}
                  </span>
                </div>
                <label
                  className="col-span-2 px-4 py-4 flex justify-center items-center cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleItem(item.id)}
                      className="sr-only peer"
                    />
                    <div
                      className={`w-7 h-7 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                        item.completed
                          ? 'bg-[#22C55E] border-[#22C55E]'
                          : 'bg-white border-gray-300 group-hover:border-[#22C55E]'
                      }`}
                    >
                      {item.completed && (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="px-6 py-6">
          <button
            onClick={() => {
              // 저장 로직 (현재는 알림만 표시)
              alert('점검 결과가 저장되었습니다.');
            }}
            className="w-full bg-[#22C55E] text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}
