'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white p-4">
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
      <div className="pt-4 pb-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mt-8">
          HX200AL을
          <br />
          <span className="text-green-600">점검하실 건가요?</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          점검 또는 이력을 확인할 수 있습니다
        </p>
      </div>
      <div className="w-full flex-1 flex flex-col items-center mt-10 relative">
        <div className="w-full max-w-md aspect-[4/3] relative">
          <Image
            src="/HX220A.jpg"
            alt="Equipment Image"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 pb-8">
        <Link
          href="/inspection"
          className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 rounded-lg text-center font-bold text-xl text-white transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
        >
          점검하기
        </Link>

        <Link
          href="/history"
          className="w-full py-4 px-6 bg-green-100 hover:bg-gray-50 rounded-lg text-center font-bold text-xl text-green-600 transition-all duration-200 hover:shadow-xl  active:scale-95"
        >
          점검 이력 보기
        </Link>
      </div>
    </div>
  );
}
