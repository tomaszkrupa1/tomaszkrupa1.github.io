export default function Home() {
  return (
    <div className="container mx-auto p-8 max-[631px]:p-4">
      <div className="min-h-screen flex flex-col justify-center items-left md:items-start space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-grey-700">
          Code
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
          Photography
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
          Art
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
          Dance
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700">
          Graffiti
        </h1>
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
