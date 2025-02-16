export default function PhotographyPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Photography</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                <img src="/images/P1.jpg" alt="Photo 1" className="w-full h-auto mb-4" />
                <img src="/images/P2.jpg" alt="Photo 2" className="w-full h-auto mb-4" />
                <img src="/images/P3.jpg" alt="Photo 3" className="w-full h-auto mb-4" />
                <img src="/images/P4.JPG" alt="Photo 4" className="w-full h-auto mb-4" />
                <img src="/images/P5.JPG" alt="Photo 5" className="w-full h-auto mb-4" />
                <img src="/images/P6.jpg" alt="Photo 6" className="w-full h-auto mb-4" />
                <img src="/images/P7.jpg" alt="Photo 7" className="w-full h-auto mb-4" />
                <img src="/images/P8.jpg" alt="Photo 8" className="w-full h-auto mb-4" />
                <img src="/images/P9.jpg" alt="Photo 9" className="w-full h-auto mb-4" />
                <img src="/images/P10.jpg" alt="Photo 10" className="w-full h-auto mb-4" />
            </div>
        </div>
    );
}