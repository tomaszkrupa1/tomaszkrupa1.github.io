export default function GraffitiPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Graffiti</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                <img src="/images/G1.jpg" alt="Photo 1" className="w-full h-auto mb-4" />
                <img src="/images/G2.png" alt="Photo 2" className="w-full h-auto mb-4" />
                <img src="/images/G3.jpg" alt="Photo 3" className="w-full h-auto mb-4" />
                <img src="/images/G4.jpg" alt="Photo 4" className="w-full h-auto mb-4" />
                <img src="/images/G5.jpg" alt="Photo 5" className="w-full h-auto mb-4" />
                <img src="/images/G6.jpg" alt="Photo 6" className="w-full h-auto mb-4" />
                <img src="/images/G7.jpg" alt="Photo 7" className="w-full h-auto mb-4" />
            </div>
        </div>
    );
}