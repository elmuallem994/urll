"use client";

import Link from "next/link";
import { FaApple, FaAndroid } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
        حمل اللعبة الان
      </h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        {/* زر تطبيق Android */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.hyphonics.abjadpolis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-col items-center p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200 transform hover:scale-105">
            <FaAndroid className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            <span className="mt-2 text-sm md:text-base lg:text-lg">
              Android
            </span>
          </button>
        </Link>

        {/* زر تطبيق iPhone */}
        <Link
          href="https://apps.apple.com/tr/app/abjadpolis/id6476087978"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-col items-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200 transform hover:scale-105">
            <FaApple className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            <span className="mt-2 text-sm md:text-base lg:text-lg">iPhone</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
