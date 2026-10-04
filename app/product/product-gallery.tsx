"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  badgeText?: string;
}

export default function ProductGallery({
  images,
  badgeText = "FEATURED",
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // التمرير التلقائي كل 5 ثوانٍ
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Container الصورة الرئيسية */}
      <div className="relative w-full aspect-[3/4] bg-[#f8f8f8] overflow-hidden rounded-sm group">
        {/* Shara / Badge */}
        {badgeText && (
          <span className="absolute top-4 left-4 z-10 bg-white text-[#e26e43] text-[11px] font-bold px-2.5 py-1 tracking-wider uppercase border border-gray-100 shadow-sm">
            {badgeText}
          </span>
        )}

        {/* Dynamic Main Image */}
        <Image
          src={images[selectedIndex]}
          alt={`Product View ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover transition-all duration-500 ease-in-out"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#222222] p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
              aria-label="Previous Image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#222222] p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
              aria-label="Next Image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails List */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-24 shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                selectedIndex === idx
                  ? "border-[#e26e43]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}