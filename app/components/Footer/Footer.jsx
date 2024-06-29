import Image from "next/image";
import React from "react";
import face from "@/public/assets/facebook.svg";
import insta from "@/public/assets/instagram.svg";
import X from "@/public/assets/X.svg";
import YT from "@/public/assets/youtube.svg";
import arrow from "@/public/assets/arrowRight.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="sm:flex justify-center sm:px-auto px-[30px] py-[100px] gap-[200px] ">
        <div className="hidden sm:block ">
          <h1 className="font-bold text-[25px]">Stay in touch with Danhari</h1>
          <br />
          <p className="text-[#b2b6b9] w-[400px]  ">
            Praesent tristique diam sit amet augue consectetur, at rutrum ipsum
            dictum. Aliquam lacinia blandit eros, non posuere enim tincidunt id.
            Duis auctor diam sed risus malesuada, at mollis magna fringilla.
            Fusce fringilla quam et velit bibendum tempus. Nulla dapibus magna
            id justo sodales, ac aliquet nunc posuere. Duis nec dui nunc.
          </p>
          <br />
          <div class="formContainer">
    <form action="">
      <fieldset class="fieldInput">
        <input class="form-input" type="email" placeholder="Your e-mail here" />
        <button type="submit" class="form-submit text-black">Sign Up</button>
      </fieldset>
    </form>
  </div>
          {/* <input
            placeholder="Enter you email"
            className="p-[5px] rounded placeholder-[black] text-[15px] w-[300px] "
          />
          <button className="bg-indigo-400/85 text-[white] p-[6px] rounded font-extralight ml-[10px]">
            Sign Up
          </button> */}
        </div>
        <div>
          <h1 className="font-bold text-[25px]">Follow US</h1>
          <p className="text-[#b2b6b9]">On our Social networks</p>
          <br />
          <div className="flex gap-2 ">
            <Image src={face} alt="face" />
            <Image src={insta} alt="insta" />
            <Image src={X} alt="X" />
            <Image src={YT} alt="YT" />
          </div>
          <br />
          <br className="hidden sm:block " />
          <div>
            <h1 className="text-[25px] font-bold">
              Are you a vendor?
            </h1>
            <p className="text-[#b2b6b9] sm:w-[370px] ">
              Sign up on DanHari to reach more couples and book more weedings!
            </p>
            <br />
            <Link className="flex text-[#b2b6b9] gap-2 " href="/">
              Start here
              <Image src={arrow} alt="arrow" />
            </Link>
            <div className="sm:hidden ">
              <br />
              <input
                placeholder="Enter you email"
                className="p-[5px] rounded placeholder-[black] text-[15px] sm:w-[300px] w-[200px]  "
              />
              <button className="bg-[black] text-[white] p-[6px] rounded ml-[10px] ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}