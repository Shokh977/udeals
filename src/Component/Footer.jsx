import { FaceIcon } from "@radix-ui/react-icons";
import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[40vh] flex flex-col px-24">
        <div className="lg:flex-row flex flex-col gap-4 text-center justify-around">
            <div className="flex basis-1/3 gap-1 flex-col">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">U</span>Deals
        </h1>
        <p className="">
          Discover a seamless shopping experience with our e-commerce app.
          Browse a diverse range of products, enjoy exclusive deals, and shop
          with confidence. Our user-friendly interface and secure payment
          options make online shopping convenient and enjoyable. Join us today
          and elevate your shopping experience!
        </p>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <ul className="py-2">
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            Home
          </li>
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            Shop
          </li>
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            FAQs
          </li>
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            About Us
          </li>
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            Career
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Follow Us</h1>
        <ul className="py-2 flex gap-2 items-center">
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
<Facebook className="size-8"/>
          </li>
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            <Instagram className="size-8"/>
          </li>
          <li className="cursor-pointer hover:text-orange-600 duration-300 py-1">
            <Youtube className="size-10"/>
          </li>
        </ul>
      </div>
        </div>
        <hr className="w-[80%] mx-auto text-orange-600"/>
      <div className='mx-auto mt-4'>
        <h2 className='font-semibold'><span className='text-orange-500'>U</span>deals - 2024</h2>
      </div>
    </div>
  );
}
