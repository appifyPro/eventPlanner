import React from "react";
import VendorCard from "../components/VendorCard/VendorCard";

function VendorCategory() {
  return (
    <div className="mt-10 px-4 sm:px-6">
      <p className="font-bold text-2xl sm:text-4xl text-center text-indigo-700 mb-4 font-roboto">
        Vendor Categories
      </p>
      <p className="text-md mt-4 text-center mb-8 text-gray-600 font-roboto">
        Over 250,000 local professionals with reviews, pricing, and more
      </p>
      <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-up">
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </div>
    </div>
  );
}

export default VendorCategory;
