import Image from 'next/image';
import React from 'react';

function PopularCard({ Img, name, description }) {
  return (
    <div className="rounded-lg bg-white shadow-md overflow-hidden hover:shadow-md transition-shadow duration-300 ">
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={Img}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-300"
          alt={name}
        />
      </div>
      <div className='p-4'>
      <h1 className="text-xl text-center font-bold mt-4 text-indigo-700">{name}</h1>
      <p className="text-center text-gray-600 mt-2">{description}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-[#775a97] text-white px-4 py-2 rounded-full hover:bg-[#55406b] transition-colors duration-300">
          Learn More
        </button>
      </div>
      </div>
    </div>
  );
}

export default PopularCard;
