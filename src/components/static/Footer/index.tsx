import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const socials = [
  "https://twitter.com/PlaguePoppets",
  "https://instagram.com/PlaguePoppets",
  "https://discord.gg/plague-poppets",
  "https://open.spotify.com/show/7JH1s7Bkn42TFZaGCyTIE2?si=00c664496f3149a0",
  "mailto:info@plaguepoppets.io",
];

export const Footer = () => {
  return (
    <>
      <div className="h-[212px] lg:h-[125px] bg-black gap-4 flex flex-col justify-center items-center">
        <div className="flex lg:gap-[25px] gap-[15px] items-center">
          {socials?.map((s) => (
            <SocialIcon
              target={"_blank"}
              key={`socials_${s}`}
              url={s}
              bgColor="currentColor"
              fgColor="#000"
              style={{ height: "2rem", width: "2rem" }}
              className="text-amber-50 rounded-full hover:ring-2 hover:ring-amber-50 hover:text-amber-400 keychainify-checked"
            />
          ))}
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row font-['source-code-pro']">
          <div className="flex font-normal text-base item-center gap-[10px] text-white  cursor-pointer">
            <Link href="/faq">About Plague Poppets </Link>
          </div>

          <div className="bg-white mx-auto h-[1px] w-[100px] mt-4 mb-4 block xl:hidden lg:hidden"></div>
          <div className="bg-white h-[27px] w-[1px] ml-8 mr-7 hidden xl:block lg:block"></div>

          <div className="flex font-normal text-base item-center gap-[10px] text-white  cursor-pointer">
            <Link href="/terms-and-conditions"> Terms & Conditions </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
