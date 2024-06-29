'use client'
import { Images } from "@/constants/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Select from 'react-select';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const options = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'conference', label: 'Conference' },
    // Add more options as needed
  ];

  const categoryOptions = [
    { value: 'photography', label: 'Photography' },
    { value: 'catering', label: 'Catering' },
    { value: 'decor', label: 'Decor' },
    // Add more options as needed
  ];

  const subCategoryOptions = [
    { value: 'portrait', label: 'Portrait' },
    { value: 'videography', label: 'Videography' },
    { value: 'flower-arrangement', label: 'Flower Arrangement' },
    // Add more options as needed
  ];

  const cityOptions = [
    { value: 'dubai', label: 'Dubai' },
    { value: 'new-york', label: 'New York' },
    { value: 'london', label: 'London' },
    // Add more options as needed
  ];

  return (
    <div
      className="bg-black bg-opacity-50 h-[95vh] w-full flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div>
        <div className="text-center text-white">
          <p className="text-2xl sm:text-4xl font-extrabold font-poppins">
            Plan Your Events, Your Way
          </p>
          <p className="px-3 text-sm sm:text-xl mt-4 sm:mt-4 font-serif mb-4 ">
            Find the best event vendors with thousands of trusted reviews
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center sm:mt-20 justify-center gap-4">
        <div className="w-[150px] sm:w-[200px]">
          <Select
            options={options}
            className="rounded-xl"
            placeholder="Event Type"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': { borderColor: '#ccc' },
              }),
            }}
          />
        </div>
        <div className="w-[150px] sm:w-[200px]">
          <Select
            options={categoryOptions}
            className="rounded-xl"
            placeholder="Category"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': { borderColor: '#ccc' },
              }),
            }}
          />
        </div>
        <div className="w-[150px] sm:w-[200px]">
          <Select
            options={subCategoryOptions}
            className="rounded-xl"
            placeholder="SubCategory"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': { borderColor: '#ccc' },
              }),
            }}
          />
        </div>
        <div className="w-[150px] sm:w-[200px]">
          <Select
            options={cityOptions}
            className="rounded-xl"
            placeholder="City"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': { borderColor: '#ccc' },
              }),
            }}
          />
        </div>
        <div className="flex gap-3 bg-indigo-500 px-4 py-3 rounded-xl transition duration-300 cursor-pointer">
          <p className="font-serif text-white">Search</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
