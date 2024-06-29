import Image from "next/image";
import React from "react";
import Img from "@/public/assets/Img.svg";

export default function About() {
  return (
    <div className="bg-[#f5f2f2] px-4 sm:px-6 flex justify-center mt-8">
      <div className="sm:px-[60px] md:px-[40px] px-[20px] py-4 max-w-6xl">
        <h1 className="font-bold text-[35px]">About Us</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
          <div className="mb-4 sm:mb-0 sm:mr-8">
            <p className="text-gray-500 font-[500] max-w-[800px] text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              accumsan risus eu nisl luctus, eget malesuada enim semper. Donec
              id erat eget mi blandit auctor. Mauris commodo placerat enim, sit
              amet venenatis nunc pellentesque vel. Fusce non lectus id lectus
              placerat auctor. Integer mattis felis nec dolor mollis, in feugiat
              metus ullamcorper. Fusce et dictum felis, sit amet venenatis
              sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Cras rutrum nibh vel risus dictum,
              in congue justo scelerisque. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nam in
              vestibulum ex, in feugiat elit.
            </p>
            <br />
            <p className="hidden sm:block text-gray-500 font-[500] max-w-[800px] text-center sm:text-left mb-5">
              Vivamus consequat nulla a consequat efficitur. Sed molestie enim
              id sapien sagittis, at elementum turpis ultrices. Morbi aliquam,
              nunc at tempus placerat, libero ligula posuere mi, ut tristique
              justo turpis vitae erat. Proin venenatis, libero ac vestibulum
              ultricies, nunc nulla consequat eros, id pharetra lorem turpis sed
              est. Suspendisse potenti. Sed mattis lorem vel nulla varius, sed
              laoreet magna faucibus. Nam pharetra auctor libero sit amet
              pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia Curae; Mauris ac nunc et ante viverra
              sagittis. Aenean id dui velit. Proin id pharetra neque.
              Pellentesque nec leo eu magna cursus lacinia. Cras vel pharetra
              neque, ac maximus nisi. Proin euismod, dui at accumsan vestibulum,
              orci tellus efficitur tortor, non ultricies elit libero vitae
              justo.
            </p>
          </div>
          <div className="w-full sm:w-auto" data-aos="fade-left">
            <Image
              src={"/assets/Table.jpg"}
              alt="Img"
              width={700}
              height={400}
              className="w-[700px] h-[500px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
