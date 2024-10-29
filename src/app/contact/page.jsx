'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form
    setSubmitSuccess(true); // Show success message
  };

  return (
    <div>
      <div className="h-[300px] relative">
        <Image
          src="/contact-us.jpg"
          fill
          className="h-full w-full object-cover opacity-30"
          alt="Contact Us Hero"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
          <h1 className="text-4xl">Contact</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage href="/contact">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full mb-20 mx-auto '>
      <div className = 'bg-orange-500 full flex flex-col justify-center items-center '>
        <h1 className='text-4xl p-4 text-white'>Contact Us</h1>
      <form className =" flex flex-col gap-4 max-w-lg">
         <input className='px-4 py-2 rounded bg-white' placeholder='Your Name'></input>
         <input className='px-4 py-2 rounded bg-white' placeholder='Your Email'></input>
         <textarea className='px-4 py-2 rounded bg-white' placeholder='Message'></textarea>

       </form>
       <button className='text-white border border-white px-4 py-2 m-4 '>Submit</button>
       </div> 
        <div className='w-full md:flex hidden items-center bg-gray-100 dark:bg-gray-800 justify-center'>
          <Image src='/contact.svg' width={500} height={500} alt="Contact Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
