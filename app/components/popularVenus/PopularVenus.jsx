import { Images } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

function PopularVenus(props) {
  return (
    <div className='rounded-lg p-4 bg-white shadow-md text-center mb-10'>
      <div className="relative h-48 overflow-hidden rounded-lg">
        <Image src={props.Img} layout="fill" objectFit="cover" alt={props.name} />
      </div>
      <h1 className='text-xl font-bold mt-4 '>{props.name}</h1>
      <div className='flex mt-2 items-center'>
        <Image src={Images.location} width={15} height={15} alt="Location" />
        <h1 className='text-sm ml-2 font-poppins'>Colombo</h1>
      </div>
      <p className='text-[#42f5da] mt-2'>Rs.15,000 onward</p>
    </div>
  );
}

export default PopularVenus;
