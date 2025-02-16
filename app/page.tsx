'use client'

import Link from 'next/link';
import { useState } from 'react';



export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  
  
  return (
    <div className="container mx-auto p-8 max-[631px]:p-4">
      <div className="min-h-screen flex flex-col justify-center items-left md:items-start space-y-2 sm:space-y-4">
        <Link href="/code">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-grey-700">
            Code
          </h1>
        </Link>
        <Link href="/photography">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
            Photography
          </h1>
        </Link>
        <Link href="/art">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
            Art
          </h1>
        </Link>
        <Link href="/dance">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
            Dance
          </h1>
        </Link>
        <Link href="/graffiti">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
            Graffiti
          </h1>
        </Link>
        <Link href="/ideas">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
            Ideas
          </h1>
        </Link>
      </div>
      <div>
        <img src="/images/1.jpg" alt="1" className="w-full h-auto mb-4" />
        <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 md:max-w-[50%]">
          Hi, I'm Tomasz, a passionate developer with interests spanning code, art, and design. Welcome to my online space where creativity meets technology.
        </h2>
      </div>
      <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 md:max-w-[50%] ml-auto text-right">
        I currently work for Fujitsu in a 1st line support role. I also do freelance design and development under iridesceDIgital. Additionally, I am working on a new startup, an online designer clothing marketplace, HIGHSTREET.
      </h2>
     
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`fixed bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
          active ? 'bg-white' : 'bg-black'
        }`}
      >
        {active ? (
          <img src="/light_mode.svg" alt="Light Mode" className="w-6 h-6" />
        ) : (
          <img src="/dark_mode.svg" alt="Dark Mode" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}