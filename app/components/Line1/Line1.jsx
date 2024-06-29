"use client";
import Head from 'next/head';
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularVenus from '../popularVenus/PopularVenus';
import { Images } from '@/constants/constant';

function Line1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="px-4 sm:px-6 pt-32 sm:pt-20">
      <Head>
        <title>Popular Venues</title>
        <meta name="description" content="Explore the best venues for your events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-2xl sm:text-4xl font-bold text-center text-indigo-700 mb-4 font-roboto">
        Popular Venues
      </p>
      <p className="text-md text-center mt-4 mb-8 text-gray-600 font-roboto">
        Discover the perfect venue for your event from our curated list.
      </p>
      <main className="flex flex-col items-center bg-indigo-100 py-10">
        <div className="w-full max-w-6xl px-4 sm:px-6" data-aos="fade-down" data-aos-delay="400">
          <Slider {...settings}>
            <div className="px-2">
              <PopularVenus name="Hotel Luxury Way" Img={Images.images} />
            </div>
            <div className="px-2">
              <PopularVenus name="Sea Side Hotel" Img={Images.images1} />
            </div>
            <div className="px-2">
              <PopularVenus name="Beach Hotel" Img={Images.images2} />
            </div>
            <div className="px-2">
              <PopularVenus name="Movenpick Hotel" Img={Images.images3} />
            </div>
            <div className="px-2">
              <PopularVenus name="Gateway Hotel" Img={Images.images5} />
            </div>
            <div className="px-2">
              <PopularVenus name="Night Hotel" Img={Images.images6} />
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default Line1;
