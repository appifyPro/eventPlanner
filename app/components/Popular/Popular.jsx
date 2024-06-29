"use client";
import Head from 'next/head';
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from '@/constants/constant';
import PopularCard from '../PopularCard/PopularCard';

function Popular() {
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
    <div className="px-4 sm:px-6 pt-32 sm:pt-20" data-aos="fade-up" data-aos-delay="400">
      <Head >
        <title>Popular Searches</title>
        <meta name="description" content="Discover popular event services" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <p className="text-2xl sm:text-4xl font-bold text-center text-indigo-700 font-roboto">Popular Searches</p>
      <p className="text-md text-center mt-4 mb-8 text-gray-600 font-roboto">
        Discover top-rated event services to make your special occasion unforgettable.
      </p>
      <main className="flex flex-col items-center bg-indigo-100 p-14 rounded-lg shadow-inner">
        <div className="w-full max-w-7xl" data-aos="fade-up">
          <Slider {...settings}>
            <div className="px-2">
              <PopularCard
                name="Bridal Wear"
                Img={Images.images}
                description="Find the latest bridal wear trends and designs for your special day."
              />
            </div>
            <div className="px-2">
              <PopularCard
                name="Photographers"
                Img={Images.images1}
                description="Discover top photographers to capture your event's memorable moments."
              />
            </div>
            <div className="px-2">
              <PopularCard
                name="Flowers"
                Img={Images.images2}
                description="Choose beautiful floral arrangements to enhance your event's ambiance."
              />
            </div>
            <div className="px-2">
              <PopularCard
                name="Hotels"
                Img={Images.images3}
                description="Find the best hotels for your guests to stay during your event."
              />
            </div>
            <div className="px-2">
              <PopularCard
                name="Gateway"
                Img={Images.images5}
                description="Explore event venues and gateways perfect for your celebration."
              />
            </div>
            <div className="px-2">
              <PopularCard
                name="Music Bands"
                Img={Images.images6}
                description="Book talented music bands to entertain your guests."
              />
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default Popular;
