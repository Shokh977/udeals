// src/app/shop/[id]/page.jsx
'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {useState} from 'react'
const ProductDetail = () => {
    const product = {
      id: 1,
      name: "Stylish Summer Dress",
      price: 49.99,
      description: "A beautiful summer dress that keeps you cool and stylish.",
      rating: 4.5,
      reviews: 5,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["#FF5733", "#33FF57", "#3357FF"], // Example colors in hex
      images: [
        "https://via.placeholder.com/200x200?text=Main+Image",
        "https://via.placeholder.com/200x200?text=Thumbnail+1",
        "https://via.placeholder.com/200x200?text=Thumbnail+2",
        "https://via.placeholder.com/200x200?text=Thumbnail+3",
      ],
      relatedProducts: [
        {
          id: 2,
          name: "Casual T-Shirt",
          price: 19.99,
          image: "https://via.placeholder.com/300x300?text=Related+Product+1",
        },
        {
          id: 3,
          name: "Elegant Blouse",
          price: 39.99,
          image: "https://via.placeholder.com/300x300?text=Related+Product+2",
        },
        {
          id: 4,
          name: "Sporty Shorts",
          price: 29.99,
          image: "https://via.placeholder.com/300x300?text=Related+Product+3",
        },
      ],
    };
  
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.sizes[3]); 
    const [selectedColor, setSelectedColor] = useState(product.colors[0]); 
  
    return (
      <div className="container mx-auto p-8 mb-20">
         <Breadcrumb className='mb-16'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className ='text-xl'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop" className ='text-xl'>Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage href="/shop/1" className ='text-xl'>Asgaard sofa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex items-center justify-center gap-6">
          <div className="flex flex-col gap-4 items-center">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 cursor-pointer rounded-md ${selectedImage === image ? 'border-2 border-orange-500' : ''}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>  
            <img
              src={selectedImage}
              alt={product.name}
              className="max-w-xl h-[400px] object-cover rounded-lg mb-4"
            />
            
          </div>
  
          {/* Right Side: Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold text-orange-500 mb-2">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-500 ml-2">| {product.reviews} Customer Reviews</span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
  
            {/* Size Selector */}
            <div className="mb-4">
              <span className="font-semibold">Size:</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="ml-2 p-1 border border-gray-300 rounded-md"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
  
            {/* Color Selector */}
            <div className="mb-4">
              <span className="font-semibold">Color:</span>
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color ? 'border-2 border-orange-500' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
  
            {/* Quantity Selector */}
            <div className="flex items-center mb-4">
              <button onClick={() => setQuantity(Math.max(quantity - 1, 1))} className="border px-4 py-2">-</button>
              <span className="mx-2">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="border px-4 py-2">+</button>
            </div>
  
            {/* Add to Cart Button */}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        </div>
  
        {/* Related Products Section */}
        <h2 className="text-2xl font-bold mt-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {product.relatedProducts.map((related) => (
            <div key={related.id} className="border rounded-lg p-4">
              <img src={related.image} alt={related.name} className="w-full h-32 object-cover rounded-lg mb-2" />
              <h3 className="text-xl font-semibold">{related.name}</h3>
              <p className="text-lg text-orange-500">${related.price.toFixed(2)}</p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600">View Details</button>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Show More</button>
      </div>
    );
  };
  
  export default ProductDetail;
  