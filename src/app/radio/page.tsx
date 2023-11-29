import React from "react";
import { Spotify } from "react-spotify-embed";
import Image from "next/image";
import baseballbackground from "@/assets/img/radio/baseballbackground.jpeg";

function page() {
  return (
    <>
      <div className="bg-pagebg  bg-no-repeat bg-cover bg-center">
        <div className="pt-[100px]">
          <h1 className="font-[source-code-pro] font-semibold text-4xl mt-[40px] text-white p-[3vh] text-center">
            Poppet Radio
          </h1>
          <div className="justify-center items-center">
            <div>
            {/* <Image className="max-h-[40vh] max-w-[25vw]" src="https://plaguepoppets.io/poppet-assets/strapi/medium_intro_7170adffd0.jpg" alt="popet" height={1000} width={1000} /> */}
              <div className="w-full flex flext-row justify-center items-center gap-[2vh] pt-[2vh] px-4 xl:px-0 lg:px-0">
                <Image
                  src={baseballbackground}
                  alt="baseballbackground"
                  width={2480}
                  height={520}
                />
              </div>
              <div className="w-full flex flext-row justify-center items-center gap-[2vh] pt-[2vh]">
                <Spotify link="https://open.spotify.com/show/7JH1s7Bkn42TFZaGCyTIE2?si=30e70ad14c834c8a" />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default page;
