import Link from 'next/link';

export default function Home() {
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
          Ideas
        </h1>
      </div>
      <div>
        <img src="/images/1.jpg" alt="1" className="w-full h-auto" />
      </div>
    </div>
  );
}