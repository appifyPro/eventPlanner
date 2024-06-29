import Image from 'next/image';
import React from 'react';

function PopularCard({ Img, name, description }) {
  return (
    <div className="rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        <Image
          src={Img}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-300"
          alt={name}
        />
      </div>
      <h1 className="text-xl text-center font-bold mt-4 text-indigo-700">{name}</h1>
      <p className="text-center text-gray-600 mt-2">{description}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default PopularCard;
