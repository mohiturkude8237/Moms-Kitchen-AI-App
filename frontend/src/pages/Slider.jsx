import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Slider = () => {
  const images = [
    // assets.img13,
    // assets.img15,
    // assets.img16,
    assets.sl1,
    assets.sl2,
    assets.sl3,
    assets.sl5,
    assets.sl9,
    assets.sl10,
    assets.sl11,
    assets.sl14,
    assets.sl16,
    assets.sl17,
    assets.sl18,
    assets.sl18,
    assets.sl19,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 text-center">
      {/* 🍲 Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
        Discover Delicious Moments with Mom’s Kitchen
      </h2>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        From traditional classics to modern flavors, our recipes bring love to every bite.
      </p>

      {/* Slider */}
      <div
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`w-full h-[400px] object-cover flex-shrink-0 transform transition-transform duration-500 ease-in-out hover:scale-110`}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-3 w-3 rounded-full backdrop-blur-sm shadow-sm border border-white ${
                currentIndex === idx ? "bg-white" : "bg-white/40"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
