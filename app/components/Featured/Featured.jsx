"use client";
import Head from 'next/head';
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from '../SliderCard/SliderCard';

function Popular() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className=" pt-32 sm:pt-20">
      <Head>
        <title>Featured Vendors</title>
        <meta name="description" content="Discover popular event vendors" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <p className="text-2xl sm:text-4xl font-bold text-center text-indigo-700 font-roboto">Featured Vendors</p>
      <p className="text-md text-center mt-4 mb-8 text-gray-600 font-roboto">
        Discover the top-rated vendors to make your event unforgettable.
      </p>
      <main className="flex flex-col items-center bg-white p-14 rounded-lg shadow-inner">
        <div className="w-full max-w-8xl" data-aos="fade-up">
          <Slider {...settings}>
            <div className="px-4">
              <SliderCard name="Realy Lily Saloon" image="/assets/Event.jpg" />
            </div>
            <div className="px-4">
              <SliderCard name="Craft Vendor" image="/assets/craft.jpg" />
            </div>
            <div className="px-4">
              <SliderCard name="Ecommerce Vendor" image="/assets/ecoomerce.webp" />
            </div>
            <div className="px-4">
              <SliderCard name="Exhibitor Fairs" image="/assets/exhibitor.jpg" />
            </div>
            <div className="px-4">
              <SliderCard name="Event Management" image="/assets/Event.jpg" />
            </div>
            <div className="px-4">
              <SliderCard name="Downtown Christmas" image="/assets/downtown.jpg" />
            </div>
            <div className="px-4">
              <SliderCard name="Annual Fairs" image="/assets/annual.jpg" />
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default Popular;
