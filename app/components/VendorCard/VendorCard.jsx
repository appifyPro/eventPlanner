import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function VendorCard() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-4 sm:mx-auto sm:max-w-2xl rounded-lg mt-6 bg-gradient-to-r from-indigo-400/50">
    <div className="flex items-center pt-4 pl-4">
      <p className="font-bold font-serif">Venues</p>
      <Image src={Images.down} height={15} width={15} className="ml-2" />
      <p className="text-sm px-4 font-serif">Banquet Halls</p>
    </div>
    <div className="flex items-center justify-end">
      <Image
        src={Images.images}
        height={105}
        width={105}
        className="rounded-lg w-auto h-auto"
      />
    </div>
  </div>
  );
}

export default VendorCard;
