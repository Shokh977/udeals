"use client";
import { Heart, Share, Share2 } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    imageUrl:"https://cdn.pixabay.com/photo/2017/11/08/23/21/gallery-2932005_1280.jpg"  ,
  title: "Abstract Wall Art",
    description: "Beautiful modern abstract wall art for your home decor.",
    price: 50,
    oldPrice: 100,
    discount: 50, // 50% discount
    badge: "50%", // Displays discount
    isNew: false,
  },
  {
    id: 2,
    imageUrl:
"https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886013_1280.png",    title: "Fashionable Men's Shirt",
    description: "Classic white shirt for business and casual wear.",
    price: 25,
    oldPrice: 35,
    discount: 30, // 30% discount
    badge: "30%", // Displays discount
    isNew: false,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_1280.jpg",
    title: "High-End Laptop",
    description: "Powerful and stylish laptop with excellent battery life.",
    price: 1200,
    oldPrice: 0, // No discount
    discount: 0,
    badge: "New", // New product
    isNew: true,
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/09/13/40/shoe-629643_960_720.jpg",
    title: "Sporty Running Shoes",
    description: "Lightweight and comfortable running shoes for athletes.",
    price: 60,
    oldPrice: 80,
    discount: 25, // 25% discount
    badge: "25%", // Displays discount
    isNew: false,
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/07/16/28/coffee-1576552_960_720.jpg",
    title: "Organic Coffee Beans",
    description: "Freshly roasted organic coffee beans sourced from Brazil.",
    price: 15,
    oldPrice: 0, // No discount
    discount: 0,
    badge: "New", // New product
    isNew: true,
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/05/29/16/42/smartphone-2354157_1280.jpg",
    title: "Smartphone with HD Camera",
    description:
      "Feature-rich smartphone with a high-definition camera and long-lasting battery.",
    price: 650,
    oldPrice: 750,
    discount: 13, // 13% discount
    badge: "13%", // Displays discount
    isNew: false,
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/06/11/17/coffee-break-625963_1280.jpg",
    title: "Insulated Stainless Steel Thermos",
    description: "Durable and insulated thermos for hot and cold drinks.",
    price: 22,
    oldPrice: 30,
    discount: 27, // 27% discount
    badge: "27%", // Displays discount
    isNew: false,
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/24/07/01/computer-2170392_1280.jpg",
    title: "4K Ultra HD Monitor",
    description:
      "32-inch 4K Ultra HD monitor with stunning clarity for gaming and productivity.",
    price: 400,
    oldPrice: 450,
    discount: 11, // 11% discount
    badge: "11%", // Displays discount
    isNew: false,
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/12/09/13/59/gifts-5817555_1280.jpg",
    title: "Luxury Gift Box Set",
    description:
      "Elegant and beautifully packaged gift box set for special occasions.",
    price: 75,
    oldPrice: 100,
    discount: 25, // 25% discount
    badge: "25%", // Displays discount
    isNew: false,
  },
  {
    id: 10,
    imageUrl: "https://cdn.pixabay.com/photo/2018/02/01/15/53/soap-3123468_1280.jpg",
    title: "Handmade Organic Soap",
    description:
      "Natural and handmade soap bars made from organic ingredients.",
    price: 8,
    oldPrice: 0, // No discount
    discount: 0,
    badge: "New", // New product
    isNew: true,
  },
];
const ProductCard = ({ product, onCardClick }) => {
  return (
    <div className="relative w-72 rounded-lg dark:bg-gray-900 bg-slate-100 overflow-hidden group mx-auto">
      {product.badge && (
        <span
          className={`absolute top-4 right-4 ${
            product.badge === "New" ? "bg-green-500" : "bg-red-500"
          } rounded-full text-white p-2 text-xs`}>
          {product.badge}
        </span>
      )}

      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="mt-2">
          <span className="text-xl font-bold text-green-500">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <div
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={onCardClick}>
        <button className="bg-white px-8 py-2 border hover:bg-orange-400 hover:text-white border-orange-400 text-orange-400 font-bold transition-all-300">
          Add to Cart
        </button>

        <div className=" flex gap-6  my-4 text-white">
          {" "}
          <Heart  className="cursor-pointer"/>
          <Share2 className="cursor-pointer"/>{" "}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4); // Load more products when clicked
  };

  return (
    <div className="px-2">
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4 justify-center">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={() => alert(`Clicked on ${product.title}`)}
          />
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
         <button className="bg-white px-12 py-2 border hover:bg-orange-400 hover:text-white border-orange-400 text-orange-400 font-bold transition-all duration-300"
         onClick={showMoreProducts}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
