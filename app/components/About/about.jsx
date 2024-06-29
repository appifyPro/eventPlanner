import Image from "next/image";
import React from "react";
import Img from "@/public/assets/Img.svg";

export default function About() {
  return (
    <div className="bg-[#F4ECE1] w-full p-8 sm:p-16 md:p-28 flex flex-col md:flex-row gap-8 md:gap-28 justify-center mt-8">
      <div className="w-full md:w-auto px-4 sm:px-8" data-aos="fade-left">
        <Image
          src={"/assets/about.jpeg"}
          alt="Img"
          width={500}
          height={600}
          className="w-full md:w-[500px] h-auto md:h-[530px]"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6 px-4 sm:px-0">
        <h1 className="font-serif text-3xl md:text-[35px] text-center md:text-left">About Us</h1>
        <p className="text-gray-500 font-sans tracking-wide not-italic leading-7 md:leading-9 text-lg md:text-xl max-w-full md:max-w-[800px] text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan risus eu nisl luctus, eget malesuada enim semper. Donec
          id erat eget mi blandit auctor. Mauris commodo placerat enim, sit
          amet venenatis nunc pellentesque vel. Fusce non lectus id lectus
          placerat auctor. Integer mattis felis nec dolor mollis, in feugiat
          metus ullamcorper. Fusce et dictum felis, sit amet venenatis
          sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Cras rutrum nibh vel risus dictum,
          in congue justo scelerisque.
        </p>
      </div>
    </div>
  );
}
