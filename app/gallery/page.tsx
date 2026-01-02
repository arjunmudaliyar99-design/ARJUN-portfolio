"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    { src: "/gallery/image1.jpg", alt: "Gallery Image 1", title: "Moment 1", category: "" },
    { src: "/gallery/image2.jpg", alt: "Gallery Image 2", title: "Moment 2", category: "" },
    { src: "/gallery/image3.jpg", alt: "Gallery Image 3", title: "Moment 3", category: "" },
    { src: "/gallery/image4.jpg", alt: "Gallery Image 4", title: "Moment 4", category: "" },
    { src: "/gallery/image5.jpg", alt: "Gallery Image 5", title: "Moment 5", category: "" },
    { src: "/gallery/image6.jpg", alt: "Gallery Image 6", title: "Moment 6", category: "" },
    { src: "/gallery/image7.jpg", alt: "Gallery Image 7", title: "Moment 7", category: "" },
    { src: "/gallery/image8.jpg", alt: "Gallery Image 8", title: "Moment 8", category: "" },
    { src: "/gallery/image9.jpg", alt: "Gallery Image 9", title: "Moment 9", category: "" },
    { src: "/gallery/image10.jpg", alt: "Gallery Image 10", title: "Moment 10", category: "" },
    { src: "/gallery/image11.jpg", alt: "Gallery Image 11", title: "Moment 11", category: "" },
    { src: "/gallery/image12.jpg", alt: "Gallery Image 12", title: "Moment 12", category: "" },
    
  ];

  const categories = [""];
  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") setSelectedImage(null);
        if (e.key === "ArrowLeft") handlePrevious();
        if (e.key === "ArrowRight") handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#030014]/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">ARJUN</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="hover:text-purple-400 transition">About</Link>
              <Link href="/#skills" className="hover:text-purple-400 transition">Skills</Link>
              <Link href="/#projects" className="hover:text-purple-400 transition">Projects</Link>
              <Link href="/gallery" className="text-purple-400 font-semibold">Gallery</Link>
              <Link href="/#contact" className="hover:text-purple-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-32 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with Animation */}
          <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              My Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              A collection of moments, achievements, and memories that define my journey.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className={`flex justify-center gap-4 mb-12 flex-wrap transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50 scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid with Stagger Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(images.indexOf(image))}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-600/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-md rounded-full text-xs font-semibold text-white transform translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    {image.category}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <div className="flex items-center text-cyan-400 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Click to view
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-gray-400 text-xl">No images found in this category</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full">
              <p className="text-gray-300">✨ More memories coming soon...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 group"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-md px-5 py-2.5 rounded-full">
            <span className="text-white font-bold">{selectedImage + 1} / {images.length}</span>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-6 text-white hover:text-purple-400 transition-all p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 text-white hover:text-purple-400 transition-all p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl">
            <p className="text-white font-bold text-xl text-center">{images[selectedImage].title}</p>
            <p className="text-cyan-200 text-sm text-center mt-1">{images[selectedImage].category}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
