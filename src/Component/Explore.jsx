"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Explore() {
  const categories = [
    { id: 1, imgurl: "/category/kids.jpg", label: "Kids" },
    { id: 2, imgurl: "/category/men.jpg", label: "Men" },
    { id: 3, imgurl: "/category/women.jpg", label: "Women" },
    { id: 4, imgurl: "/category/parfume.jpg", label: "Perfume" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center my-10 lg:my-20 px-4 lg:px-20 h-auto lg:h-[90vh] dark:bg-gray-900 bg-slate-200">
      {/* Left Side - Text and Button */}
      <div className="flex basis-1/3 flex-col justify-center p-6 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="my-2 text-sm lg:text-base">
          You can check beautiful room and furniture designs that inspire you.
        </p>
        <div>
          <button className="border py-2 px-8 text-white bg-orange-500 my-4">
            Explore More
          </button>
        </div>
      </div>

      {/* Right Side - Image Slider */}
      <div className="relative flex items-center flex-col lg:flex-row overflow-hidden">
        <button
          onClick={previousSlide}
          className="absolute left-0 lg:left-auto lg:static p-3 lg:p-5  rounded-full shadow-md"
        >
          <ArrowLeft />
        </button>

        <div className="flex items-center  gap-4 ">
          {/* Main Image */}
          <div
            className="relative transition-transform duration-500 ease-in-out transform"
            style={{ opacity: 1 }}
          >
            <Image
              width={300}
              height={500}
              src={categories[currentIndex].imgurl}
              alt={categories[currentIndex].label}
              className="h-[500px] w-[300px] lg:w-[404px] rounded-lg shadow-md transition-opacity duration-500 ease-in-out"
              style={{ opacity: 1 }}
            />
            <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 dark:bg-gray-900 bg-white p-2 lg:p-4 shadow-lg rounded-md">
              <p className="dark:text-gray-200 text-gray-700">
                0{categories[currentIndex].id} — {categories[currentIndex].label}
              </p>
              <h3 className="text-base lg:text-lg font-bold">
                Cozy & Comfortable
              </h3>
            </div>
          </div>

          {/* Next Two Smaller Images */}
          <div className="hidden md:flex flex-col  overflow-hidden gap-2 lg:gap-4">
            <Image
              width={150}
              height={250}
              src={categories[(currentIndex + 1) % categories.length].imgurl}
              alt="Next Slide Preview"
              className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform h-[250px] w-[150px]"
              style={{ opacity: 0.9 }}
            />
            <Image
              width={150}
              height={250}
              src={categories[(currentIndex + 2) % categories.length].imgurl}
              alt="Second Slide Preview"
              className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform h-[250px] w-[150px]"
              style={{ opacity: 0.6 }}
            />
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 lg:right-auto lg:static p-3 lg:p-4 rounded-full shadow-xl"
        >
          <ArrowRight />
        </button>

        <div className="absolute bottom-0 right-1/2 p-5 flex space-x-2">
          {categories.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-yellow-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
