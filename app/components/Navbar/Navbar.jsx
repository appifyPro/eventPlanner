"use client";
const { default: Image } = require("next/image");
import { Images } from "@/constants/constant";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Events", "Beyond Events", "Photos", "Venues", "About Us", "Contact Us"];

  return (
    <div>
      <nav className="bg-#e5e5e5 text-stone-600 shadow-xl overflow-x-hidden">
        <div className="mx-auto p-2 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={Images.mainIcon}
                  className="w-[120px] h-[40px] sm:w-[135px] sm:h-[50px]"
                  alt="Main Icon"
                />
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-6">
              {navItems.map((item, index) => (
                <Link href="/" key={index}>
                  <h2 className={`text-xl font-semibold transition duration-500 ease-in-out transform hover:text-blue-500 hover:scale-105`}>
  {item}
</h2>

                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <div className="mr-6 cursor-pointer">
                <Image src={Images.search} width={20} height={20} alt="Search Icon" />
              </div>
              <div className="hidden sm:block">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md text-Accent rounded-lg bg-indigo-500">
                  <span className="relative text-black px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-Accent rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 ml-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link href="/" key={index}>
                  <h2 className={`font-semibold transition duration-500 ease-in-out text-Accent2 ${index === 0 ? "text-Accent2" : "text-Accent2"}`}>
                    {item}
                  </h2>
                </Link>
              ))}
              <button className="w-auto relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-indigo-500 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
