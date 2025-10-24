'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

// 첫 번째 항목 고정
const detail = {
  name: '작동유 레벨',
  category: '점검, 보충',
  description: '작동유(유압유) 레벨을 확인하고 필요시 보충합니다.',
  referenceImage: '/placeholder-hydraulic.jpg',
  instructions: [
    '평탄한 곳에 주차하고 엔진을 정지합니다.',
    '작동유 탱크의 오일게이지를 확인합니다.',
    '오일 레벨이 MIN과 MAX 사이에 있는지 확인합니다.',
    '부족할 경우 권장 작동유를 보충합니다.',
  ],
};

export default function InspectionDetailPage() {
  const router = useRouter();
  const [notes, setNotes] = useState('');
  const [hasIssue, setHasIssue] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">항목을 찾을 수 없습니다.</p>
      </div>
    );
  }

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
              className="h-6 w-6"
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
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{detail.name}</h1>
            <p className="text-sm text-green-600 font-medium">
              {detail.category}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-6">
        {/* Description */}
        <div className="bg-green-100 rounded-2xl p-4">
          <p className="text-green-700">{detail.description}</p>
        </div>

        {/* Reference Image */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-800">참고 메뉴얼</h2>
          <div
            className="bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsImageModalOpen(true)}
          >
            <Image
              src="/detail1.jpg"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
              className="rounded-2xl"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
              alt="Reference Image"
            />
          </div>
        </div>

        {/* Image Modal */}
        {isImageModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                <Image
                  src="/detail1.jpg"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="100vw"
                  alt="Reference Image - Full Size"
                />
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-800">점검 방법</h2>
          <div className="py-4">
            <ol className="space-y-3">
              {detail.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 flex-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Special Notes */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-orange-600">특이사항</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="점검 중 발견한 특이사항이나 메모를 작성해주세요."
            className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors resize-none"
          />
        </div>

        {/* Issue Checkbox */}
        <div className="bg-red-50 rounded-2xl p-4 flex items-center justify-between">
          <span className="text-gray-800 font-medium">
            ⚠️ 이상 발견 (수리 필요)
          </span>
          <label className="cursor-pointer group">
            <input
              type="checkbox"
              checked={hasIssue}
              onChange={(e) => setHasIssue(e.target.checked)}
              className="sr-only peer"
            />
            <div
              className={`w-7 h-7 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                hasIssue
                  ? 'bg-red-500 border-red-500'
                  : 'bg-white border-gray-300 group-hover:border-red-400'
              }`}
            >
              {hasIssue && (
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
          </label>
        </div>
      </div>
    </div>
  );
}
