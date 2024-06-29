import { Images } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

function SliderCard({ image, name }) {
  return (
    <div className="rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 text-center">
      <div className="relative w-full h-56 mx-auto rounded-lg overflow-hidden">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-300"
          alt={name}
        />
      </div>
      <h1 className="text-xl font-bold mt-4 text-indigo-700">{name}</h1>
      <div className="flex items-center justify-center gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image key={index} src={Images.star} width={24} height={24} alt="Star Icon" />
        ))}
        <p className="text-sm">(2.4)</p>
      </div>
      <div className="w-full flex text-center items-center mt-2 justify-center">
        <Image src={Images.location} width={15} height={15} alt="Location Icon" />
        <h1 className="text-sm ml-2 text-gray-600">Colombo</h1>
      </div>
    </div>
  );
}

export default SliderCard;
