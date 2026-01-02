import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | ARJUN RAMASWAMY MUDALIYAR",
  description: "View my personal gallery showcasing various moments and achievements.",
};

const Gallery = () => {
  // Placeholder images 
  const images = [
    {
      src: "/gallery/image1.jpg", 
      alt: "Gallery Image 1",
      title: "Moment 1"
    },
    {
      src: "/gallery/image2.jpg",
      alt: "Gallery Image 2",
      title: "Moment 2"
    },
    {
      src: "/gallery/image3.jpg",
      alt: "Gallery Image 3",
      title: "Moment 3"
    },
    {
      src: "/gallery/image4.jpg",
      alt: "Gallery Image 4",
      title: "Moment 4"
    },
    // Add more images as needed
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of moments, achievements, and memories that define my journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            More memories coming soon...
          </p>
          {/* <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;