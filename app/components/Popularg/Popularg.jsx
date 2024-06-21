import { Images } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

function Popularg(props) {
  return (
    <div className='rounded-lg bg-white shadow-md p-4'>
      <div className='relative w-full h-48'>
        <Image src={props.Img} layout='fill' objectFit='cover' className='rounded-lg' />
      </div>
      <h1 className='text-xl font-bold mt-4 font-serif'>{props.name}</h1>
    </div>
  );
}

export default Popularg;
