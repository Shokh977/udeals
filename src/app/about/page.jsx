"use client";
import React from "react";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pb-12 mb-20">
   <div className="h-[300px] relative">
        <Image
          src="/about/hero.jpg"
          fill
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
          <h1 className="text-4xl">About Us</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage href="/about">About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          At <span className="font-bold text-orange-500">Uphill Deals</span>, we're passionate about delivering the best products at unbeatable prices. What started as a small idea turned into a thriving marketplace where customers can discover quality items for their homes, style, and everyday needs.
          Our mission is to bring the world’s best products directly to your doorstep with a seamless shopping experience.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              We are committed to offering you the best products with a focus on dependability, customer service, and uniqueness. Our goal is to ensure a smooth and enjoyable shopping journey for every customer.
            </p>
          </div>

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p>
              We believe in quality, transparency, and customer satisfaction. We ensure that every product we offer goes through a stringent selection process, so you always get the best.
            </p>
          </div>

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To be the leading eCommerce platform, known for our exceptional service, innovative approach, and unwavering commitment to our customers.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <Image
              src="/me.jpg"
              width={200}
              height={200}
              className="rounded-full mx-auto"
              alt="Team Member 1"
            />
            <h4 className="text-xl font-bold mt-4">Shokhrukh</h4>
            <p className="text-orange-500">Founder & Developer</p>
          </div>

          <div className="p-6">
            <Image
              src="/about/1.jpg"
              width={200}
              height={200}
              className="rounded-full mx-auto"
              alt="Team Member 2"
            />
            <h4 className="text-xl font-bold mt-4">Ozodbek</h4>
            <p className="text-orange-500">CTO & developer</p>
          </div>

          <div className="p-6">
            <Image
              src="/about/2.jpg"
              width={200}
              height={200}
              className="rounded-full mx-auto h-[200px] w-[200px]"
              alt="Team Member 3"
            />
            <h4 className="text-xl font-bold mt-4">Ulugbek</h4>
            <p className="text-orange-500">Head of Marketing</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Us on Our Journey</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Thank you for choosing <span className="font-bold text-orange-500">Uphill Deals</span>! We are excited to have you as part of our community. Stay tuned for more amazing products and exclusive deals!
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
