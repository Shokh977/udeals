"use client";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Label from "@/UI/Label";
import Image from "next/image";

export default function page() {
  const products = [
    { id: 1, title: "Product 1", price: 29.99 },
    { id: 2, title: "Product 2", price: 49.99 },
    { id: 3, title: "Product 3", price: 19.99 },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryRegion: "",
    streetAddress: "",
    town: "",
    province: "",
    zipCode: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  const totalPrice = products
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);

  return (
    <div>
      <div className="h-[300px] relative">
        <Image
          alt='hero image'
          src="/shop/hero.jpg"
          fill
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
          <h1 className="text-4xl">Checkout</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage href="/shop">Checkout</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div>

      </div>
      <div className="md:flex-row flex-col flex justify-between gap-20 py-10 px-20">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <ul className="space-y-2">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between">
                <span>{product.title}</span>
                <span>${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              At UDeals, we respect your privacy and are committed to protecting
              your personal information. This Privacy Policy outlines how we
              collect, use, and safeguard your information. 1. Information We
              Collect Personal Identification Information: Name, email address,
              mailing address, and phone number. Payment Information: Credit
              card details and billing address (processed through secure
              third-party services).
            </p>
            <p>By placing your order, you agree to our policies.</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name (optional)"
              value={formData.companyName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="countryRegion"
              placeholder="Country/Region"
              value={formData.countryRegion}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="town"
              placeholder="Town"
              value={formData.town}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="province"
              placeholder="Province"
              value={formData.province}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
            <textarea
              name="additionalInfo"
              placeholder="Additional Info"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded">
              Place Order
            </button>
          </form>
        </div>
      </div>
      <Label />
    </div>
  );
}
