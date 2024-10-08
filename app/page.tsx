"use client";

import Link from "next/link";
import Image from "next/image";
import { FaApple, FaAndroid } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* إضافة صورة التطبيق */}
      <Image
        src="/img12.PNG"
        alt="App Image"
        width={150}
        height={150}
        className="mb-6"
      />
      <h1 className="text-center font-bold mb-10">
        {/* كتابة النص باللغتين */}
        <span className="block text-xl md:text-3xl lg:text-4xl">
          قم بتحميل اللعبة الآن
        </span>
        <span className="block text-l md:text-2xl lg:text-3xl mt-2">
          Download the game now
        </span>
      </h1>
      {/* توضيح الأزرار */}
      <p className="mb-6 text-center text-lg font-bold  text-red-500">
        اضغط على الزر لتحميل التطبيق
      </p>
      <div className="flex flex-row space-x-4">
        {/* زر تطبيق Android */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.hyphonics.abjadpolis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-col items-center p-6 bg-green-500 text-white rounded-xl shadow-2xl hover:shadow-3xl hover:bg-green-600 transition duration-200 transform hover:scale-110 active:scale-95">
            <FaAndroid className="w-20 h-20  mb-2 animate-bounce" />
            <span className="text-base md:text-lg lg:text-xl">Android</span>
          </button>
        </Link>

        {/* زر تطبيق iPhone */}
        <Link
          href="https://apps.apple.com/tr/app/abjadpolis/id6476087978"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-col items-center p-6 bg-blue-500 text-white rounded-xl shadow-2xl hover:shadow-3xl hover:bg-blue-600 transition duration-200 transform hover:scale-110 active:scale-95">
            <FaApple className="w-20 h-20  mb-2 animate-bounce" />
            <span className="text-base md:text-lg lg:text-xl">iPhone</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
