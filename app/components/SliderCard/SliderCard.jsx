import { Images } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

function SliderCard() {
  return (
    <div className='rounded-lg bg-white shadow-lg p-4 text-center'>
      <div className='relative w-50 h-56 mx-auto'>
        <Image src="/assets/Event.jpg" layout='fill' objectFit='cover' className='rounded-lg' />
      </div>
      <h1 className='text-xl font-bold mt-4 font-poppins'>Realy Lily Saloon</h1>
      <div className='flex items-center justify-center gap-1 mt-2'>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image key={index} src={Images.star} width={15} height={15} />
        ))}
        <p className='text-sm'>(2.4)</p>
      </div>
      <div className='flex items-center mt-2'>
        <Image src={Images.location} width={15} height={15} />
        <h1 className='text-sm ml-2 font-serif'>Colombo</h1>
      </div>
    </div>
  );
}

export default SliderCard;
