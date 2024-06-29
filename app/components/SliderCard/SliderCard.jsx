import { Images } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

function SliderCard({ image, name }) {
  return (
    <div className="rounded-lg bg-white shadow-md hover:shadow-xl overflow-hidden duration-300 text-center">
      <div className="relative w-full h-72 mx-auto overflow-hidden">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-300"
          alt={name}
        />
      </div>
      <div className='p-4'>

      <h1 className="text-xl font-bold mt-1 text-indigo-700">{name}</h1>
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

    </div>
  );
}

export default SliderCard;
