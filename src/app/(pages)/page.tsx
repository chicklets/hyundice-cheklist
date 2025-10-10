import Link from 'next/link';
import Image from 'next/image';

// 장비 목록 데이터
const equipmentList = [
  {
    id: 1,
    name: 'HX220AL',
    model: '굴착기',
    serialNumber: 'HNKPC12345',
    image: '/HX220A.jpg',
    lastInspection: '2025.10.10',
  },
  {
    id: 2,
    name: 'HX320A',
    model: '굴착기',
    serialNumber: 'HNKPC12346',
    image: '/HX320A.jpg',
    lastInspection: '2025.10.5',
  },
  {
    id: 3,
    name: 'HL940A',
    model: '휠 로더',
    serialNumber: 'HNKPC12347',
    image: '/HL940A.jpg',
    lastInspection: '2025.09.05',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Header */}
      <div className="pt-4 pb-6 space-y-4">
        <Image
          src="/hdce-logo.png"
          alt="HD현대건설기계팀 로고"
          width={200}
          height={80}
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-8">
          안녕하세요
          <br />
          <span className="text-green-600">현대인 기사님!</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          점검하고자 하는 장비를 선택해주세요
        </p>
      </div>

      {/* Equipment Cards */}
      <div className="flex-1 space-y-4 pb-6">
        {equipmentList.map((equipment) => (
          <Link
            key={equipment.id}
            href="/product"
            className="block bg-white overflow-hidden transition-all active:scale-[0.98]"
          >
            <div className="flex gap-4">
              {/* Equipment Image */}
              <div className="w-42 h-32 flex-shrink-0 overflow-hidden relative rounded-xl">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Equipment Info */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {equipment.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {equipment.model}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    S/N: {equipment.serialNumber}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">
                    최근 점검: {equipment.lastInspection}
                  </span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Button */}
      <Link
        href="/inspection"
        className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 rounded-lg text-center font-bold text-xl text-white transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
      >
        + 장비 추가
      </Link>
    </div>
  );
}
