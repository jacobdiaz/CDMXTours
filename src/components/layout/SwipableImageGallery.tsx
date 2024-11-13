import Image from 'next/image';
import React, { useState, useEffect, useRef, TouchEvent } from 'react';

interface SwipableImageGalleryProps {
  images: string[];
}

const SwipableImageGallery: React.FC<SwipableImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextImage();
    }, 3500); // find seconds 

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    touchStartXRef.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) {
      setIsPaused(false);
      return;
    }

    const distance = touchStartXRef.current - touchEndXRef.current;
    const threshold = 50;

    if (distance > threshold) {
      nextImage();
    } else if (distance < -threshold) {
      prevImage();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full h-3/5 max-h-[700px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        loading="eager"
        height={1080}
        width={540}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      {/* Left arrow */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      {/* Right arrow */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SwipableImageGallery;