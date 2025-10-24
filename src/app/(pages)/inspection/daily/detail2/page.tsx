'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DailyInspectionDetail2() {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-green-100/50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              일상점검 상세
            </h1>
            <div className="w-10" />
          </div>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        {/* Equipment Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-800">
                HX220AL 굴삭기
              </h2>
              <p className="text-sm text-gray-500">엔진오일 레벨 점검</p>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">점검 상태</h3>
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={(e) => setIsCompleted(e.target.checked)}
                  className="sr-only peer"
                />
                <div
                  className={`w-8 h-8 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                    isCompleted
                      ? 'bg-[#22C55E] border-[#22C55E]'
                      : 'bg-white border-gray-300 group-hover:border-[#22C55E]'
                  }`}
                >
                  {isCompleted && (
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
              <span className="ml-3 text-gray-700 font-medium">
                {isCompleted ? '점검 완료' : '점검 대기'}
              </span>
            </label>
          </div>

          <div
            className={`px-4 py-3 rounded-xl border-l-4 ${
              isCompleted
                ? 'bg-green-50 border-[#22C55E] text-green-800'
                : 'bg-orange-50 border-orange-400 text-orange-800'
            }`}
          >
            <p className="font-medium">
              {isCompleted
                ? '✓ 엔진오일 레벨이 정상 범위에 있습니다.'
                : '⚠ 엔진오일 레벨을 확인해주세요.'}
            </p>
          </div>
        </div>

        {/* Inspection Image */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">점검 이미지</h3>
          <div
            className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setShowImageModal(true)}
          >
            <Image
              src="/hdce-logo.png"
              alt="엔진오일 레벨 점검"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-3">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">점검 절차</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  엔진을 정지하고 5분 대기
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  엔진오일이 오일팬으로 완전히 흘러내릴 때까지 기다립니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  디프스틱으로 오일 레벨 확인
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  디프스틱을 뽑아 깨끗이 닦은 후 다시 삽입하여 레벨을
                  확인합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#22C55E] text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-gray-800">적정 레벨 범위 확인</p>
                <p className="text-sm text-gray-600 mt-1">
                  오일 레벨이 MIN과 MAX 사이에 위치하는지 확인합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                !
              </div>
              <div>
                <p className="font-medium text-gray-800">오일 부족 시 보충</p>
                <p className="text-sm text-gray-600 mt-1">
                  레벨이 MIN 아래에 있다면 지정된 엔진오일을 보충합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden">
              <Image
                src="/hdce-logo.png"
                alt="엔진오일 레벨 점검 확대"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
