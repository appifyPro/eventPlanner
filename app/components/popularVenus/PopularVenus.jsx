import { Images } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

function PopularVenus(props) {
  return (
    <div className='rounded-lg bg-white shadow-md overflow-hidden text-center transition-transform transform hover:scale-105 duration-300'>
      <div className="relative w-full h-72 overflow-hidden ">
        <Image src={props.Img} layout="fill" objectFit="cover" alt={props.name} />
      </div>
      <div className='p-4'>

      <h1 className='text-xl font-bold mt-4 text-indigo-700'>{props.name}</h1>
      <div className='flex items-center justify-center mt-2'>
        <Image src={Images.location} width={15} height={15} alt="Location" />
        <h1 className='text-sm ml-2 text-gray-600'>Colombo</h1>
      </div>
      <p className='text-green-500 mt-2'>Rs. 15,000 onward</p>
      </div>
    </div>
  );
}

export default PopularVenus;
