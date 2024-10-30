"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  { id: 1, imgurl: "/category/kids.jpg", label: "Kids" },
  { id: 2, imgurl: "/category/men.jpg", label: "Men" },
  { id: 3, imgurl: "/category/women.jpg", label: "Women" },
  { id: 4, imgurl: "/category/parfume.jpg", label: "Perfume" },
];

const variants = {
  hidden: (direction) => ({
    x: direction === "left" ? -100 : 100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
};

const Category = () => {
  return (
    <div>
      <div className = 'flex flex-col gap-2 justify-center text-center mb-6'>
        <h1 className="text-3xl font-bold">Browse The Range</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          maiores autem inventore 
        </p>
      </div>
      <Carousel className="w-[80%] h-[80vh] mx-auto">
        <CarouselContent>
        
          {categories.map((category) => (<motion.div
          key={category.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
            <CarouselItem id={category.id} className="lg:basis-1/4 md:basis-1/2 sm:basis-1">
              <div className="text-center  flex flex-col justify-center items-center gap-4 my-4 cursor-pointer">
                <Image src={category.imgurl} width={280} height={380} className="rounded-lg shadow-md hover:scale-105 duration-300 border border-gray-200" />
                <p className="text-lg font-semibold">{category.label}</p>
              </div>
            </CarouselItem>
            </motion.div>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    // <div className="h-[50vh] w-[80%] mx-auto">
    //   <div className=" grid grid-cols-3 gap-4">
    //     {categories.map((category) => (
    //     <CategoryBtn
    //       key={category.id}
    //       Icon={category.icon}
    //       label={category.label}
    //       onClick={() => console.log(`${category.label} clicked`)}
    //     />
    //   ))}
    //   </div>

    // </div>
  );
};

export default Category;
