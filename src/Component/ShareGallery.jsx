import React from "react";
import Image from "next/image";

export default function CreativeGallery() {
  const galleryImages = [
    { id: 1, imgurl: "https://images.unsplash.com/photo-1552626220-8a9a46aef538", alt: "Setup 1" },
    { id: 2, imgurl: "https://images.unsplash.com/photo-1560286746-58d48d2920d7", alt: "Setup 2" },
    { id: 3, imgurl: "https://images.unsplash.com/photo-1555545352-e0babeefbd0b", alt: "Setup 3" },
    { id: 4, imgurl: "https://images.unsplash.com/photo-1506041811286-b3a1cc3c5ee6", alt: "Setup 4" },
    { id: 5, imgurl: "https://images.unsplash.com/photo-1501871356905-e4e156ba87ff", alt: "Setup 5" },
    { id: 6, imgurl: "https://images.unsplash.com/photo-1496170862524-62bc021c1f45", alt: "Setup 6" },
    { id: 7, imgurl: "https://images.unsplash.com/photo-1553535035-c42e6c4295ec", alt: "Setup 7" },
    { id: 8, imgurl: "https://images.unsplash.com/photo-1542256738-1525da1a5e8e", alt: "Setup 8" },
    { id: 9, imgurl: "https://images.unsplash.com/photo-1510524755461-eef2f2b9e49a", alt: "Setup 9" },
    { id: 10, imgurl: "https://images.unsplash.com/photo-1574158622684-b378a7f0f0f0", alt: "Setup 10" },
  ];

  return (
    <div className="w-full min-h-screen py-10 bg-gray-100">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Share Your Setup with <span className="text-orange-500">#US</span>
        </h1>
        <p className="text-md text-gray-600">
          Showcase your workspace setup by sharing your best shots with us.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]`}
          >
            <Image
              src={image.imgurl}
              alt={image.alt}
              layout="responsive"
              width={400}
              height={300}
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
