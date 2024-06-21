'use client'
import { Images } from "@/constants/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-black bg-opacity-50 h-[95vh] w-full flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div>
        <div className=" ">
          <p className="text-center text-white text-2xl sm:text-4xl font-extrabold font-poppins">
            Plan Your Events, Your Way
          </p>
          <p className="text-white px-3 text-center text-sm sm:text-xl mt-4 sm:mt-4 font-serif">
            Find the best event vendors with thousands of trusted reviews
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center sm:mt-20 justify-center gap-4">
        <div className="bg-white w-[110px] sm:w-40 rounded-xl hover:border hover:border-gray-400 transition duration-300">
          <div className="flex py-3 items-center justify-between px-4">
            <p className="font-serif text-black">Event Type</p>
            <Image
              src={Images.down}
              height={15}
              width={15}
              className="object-contain"
              alt="Dropdown Icon"
            />
          </div>
        </div>
        <div className="bg-white w-[150px] sm:w-[170px] py-3 rounded-xl hover:border hover:border-gray-400 transition duration-300">
          <div className="flex items-center justify-between px-4">
            <p className="font-serif text-black">Category</p>
            <Image
              src={Images.down}
              height={15}
              width={15}
              className="object-contain"
              alt="Dropdown Icon"
            />
          </div>
        </div>
        <div className="bg-white w-[150px] sm:w-[170px] py-3 rounded-xl hover:border hover:border-gray-400 transition duration-300">
          <div className="flex items-center justify-between px-4">
            <p className="font-serif text-black">SubCategory</p>
            <Image
              src={Images.down}
              height={15}
              width={15}
              className="object-contain"
              alt="Dropdown Icon"
            />
          </div>
        </div>
        <div className="bg-white w-[150px] sm:w-[170px] py-3 rounded-xl hover:border hover:border-gray-400 transition duration-300">
          <div className="flex items-center justify-between px-4">
            <p className="font-serif text-black">City</p>
            <Image
              src={Images.down}
              height={15}
              width={15}
              className="object-contain"
              alt="Dropdown Icon"
            />
          </div>
        </div>
        <div className="flex gap-3 bg-[#42f5da] px-4 py-3 rounded-xl hover:bg-[#33e6c9] transition duration-300">
          <Image
            src={Images.search}
            width={20}
            height={20}
            className="object-contain"
            alt="Search Icon"
          />
          <p className="font-serif text-white">Search</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
