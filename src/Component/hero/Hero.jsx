"use client";
import { useState, useEffect } from "react";
import { HeroContent } from "./Hero_content";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = HeroContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === HeroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] flex ">
      <Image
        fill
        src={currentContent.imageUrl}
        alt={currentContent.title}
        className="absolute inset-0 object-cover w-full h-full "
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50" />
      
        <div className="absolute md:top-1/3 top-1/4 md:right-20 z-1 bg-orange-200  p-8 rounded-lg text-white ">
          <h3 className="text-sm text-black">{currentContent.label}</h3>
          <h1 className="text-4xl font-bold mb-4 text-orange-500">
            {currentContent.title}
          </h1>
          <p className="mb-6 text-black">{currentContent.description}</p>
          <Link
            href={currentContent.buttonLink}
            className="bg-orange-400 text-white px-6 py-4 rounded hover:bg-opacity-80">
            {currentContent.buttonText}
          </Link>
        </div>
    </div>
  );
}
