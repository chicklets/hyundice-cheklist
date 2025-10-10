'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 점검 이력 데이터
const inspectionHistory = [
  {
    id: 1,
    date: '2025.07.05',
    type: '일상점검',
    hasIssue: true,
  },
  {
    id: 2,
    date: '2025.07.04',
    type: '일상점검',
    hasIssue: false,
  },
  {
    id: 3,
    date: '2025.06.01',
    type: '50시간 점검',
    hasIssue: false,
  },
  {
    id: 4,
    date: '2025.05.30',
    type: '일상점검',
    hasIssue: true,
  },
];

export default function InspectionHistoryPage() {
  const router = useRouter();

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
          <h1 className="text-2xl font-bold text-gray-800">점검 이력 보기</h1>
        </div>
        <p className="text-md text-gray-600">
          장비의 주요 상태와 최근 점검 이력을 확인할 수 있습니다.
        </p>
      </div>

      {/* Equipment Info Card */}
      <div className="pb-6">
        <div className="p-4 space-y-4">
          <h2 className="font-bold text-gray-800 text-lg">장비 기본 정보</h2>

          <div className="flex gap-4">
            {/* Equipment Image */}
            <div className="w-42 h-32 flex-shrink-0 bg-white rounded-xl overflow-hidden relative">
              <Image
                src="/HX220A.jpg"
                alt="HX220AL"
                fill
                className="object-cover"
              />
            </div>

            {/* Equipment Details */}
            <div className="flex-1 space-y-2">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  • 장비명:{' '}
                  <span className="font-semibold text-gray-800">HX220AL</span>
                </p>
                <p className="text-sm text-gray-600">
                  • 장비번호:{' '}
                  <span className="font-semibold text-gray-800">
                    H22A-00235
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  • 등급일자:{' '}
                  <span className="font-semibold text-gray-800">
                    2024-01-01
                  </span>
                </p>
              </div>

              <button className="mt-3 px-4 py-2 bg-gray-100 border-gray-300 hover:border-green-500 rounded-lg text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors">
                통합서비스센터 연결
              </button>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-yellow-50 p-3 rounded-lg">
            <p className="text-xs text-gray-700">
              ★ A/S 접수 시 운전실 천장 아래쪽 외부 유리에 부착된 스티커의
              장비번호(9자리)를 확인 후 A/S 접수 바랍니다.
            </p>
          </div>
        </div>
      </div>

      {/* Inspection History Table */}
      <div className="flex-1 pb-6">
        <div className="bg-white border-gray-100 overflow-hidden">
          <div className="text-xl p-5 font-bold">점검 이력 & 알림</div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {inspectionHistory.map((record, index) => (
              <div
                key={record.id}
                className={`grid grid-cols-12 gap-3 items-center text-md transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                } hover:bg-green-50/50`}
              >
                <div className="col-span-4 px-6 py-4 text-center">
                  <span className="font-medium text-gray-700">
                    {record.date}
                  </span>
                </div>
                <div className="col-span-4 px-6 py-4 text-center">
                  <span className="font-medium text-gray-800">
                    {record.type}
                  </span>
                </div>
                <div className="col-span-4 px-6 py-4 flex justify-center items-center">
                  {record.hasIssue ? (
                    <span className="inline-flex items-center justify-center w-7 h-7 text-red-500 rounded-full font-bold text-md">
                      !
                    </span>
                  ) : (
                    <span className="text-gray-400 font-medium text-lg">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
