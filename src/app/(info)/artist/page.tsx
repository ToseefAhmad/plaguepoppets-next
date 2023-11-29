import Image from "next/image";
import artistPicture from "@/assets/img/artist/artistPicture.jpg";
import ArtistHeaderBackgnd from "@/assets/img/artist/ArtistHeaderBackgnd.png";
import ArtistMidBackgnd from "@/assets/img/artist/ArtistMidBackgnd.png";
import ArtistFooterBackgnd from "@/assets/img/artist/ArtistFooterBackgnd.png";
import text from "@/data/text.json";

import { TeamMemberBio } from "@/components/static/TeamMemberBio";
import { data } from "@/data/team"

import { Source_Code_Pro } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const sourceCodePro = Source_Code_Pro({subsets: ['latin']})

const playfair = Playfair_Display({subsets: ['latin']})


export default function Page() {
  return (

      <div className="bg-pagebg bg-no-repeat bg-cover bg-center pt-[100px]">
        <h2 className={`${sourceCodePro.className} font-semibold text-white mt-[40px] text-center p-[3vh]`}>
          {text.meet_the_artist.main_heading}
        </h2>
       
        <div className="flex justify-center">
          <div className={`${playfair.className} w-[90%] contents`}>
          <TeamMemberBio name="Juli Adams" 
            description={
              [
                text.meet_the_artist.about,
                `“${text.meet_the_artist.quote}” -Juli`,
                text.meet_the_artist.origin,
                text.meet_the_artist["Poppets Story"].description,
                text.meet_the_artist["Poppets' Digital Expansion"].description

              ]} sub_heading="" img={artistPicture} />
          </div>
        </div>
      </div>

  );
}


/*
function Page() {
  return (
    <>
      <div className="bg-pagebg bg-no-repeat bg-cover bg-center ">
        <div className="pt-[100px]">
          <div className="pt-[30px] px-[20px] xl:px-[100px] lg:px-[100px]  flex flex-col xl:flex-row lg:flex-row justify-center gap-[20px] pb-[40px]">
            <div className="w-[100%] xl:w-[30%] lg:w-[30%] flex flex-col gap-[20px] pt-[60px]">
              <h1 className="font-semibold font-['source-code-pro'] text-2xl xl:text-4xl lg:text-3xl text-white  flex justify-center items-center pb-[5px]">
               {text.meet_the_artist.main_heading}
              </h1>
              <div className="flex justify-center items-center">
                <Image
                  alt="aboutArtist"
                  className="w-[50vw] xl:w-[22vw] lg:w-[22vw]"
                  src={artistPicture}
                />
              </div>
            </div>
            <div className="w-[100%] xl:w-[60%] lg:w-[60%] flex flex-col">
              <div className="w-full h-[45px] relative">
                <Image
                  className="w-full h-full bg-cover absolute top-[5px]"
                  alt="ArtistHeaderBackgnd"
                  width={625}
                  height={45}
                  src={ArtistHeaderBackgnd}
                />
              </div>
              <div className="w-full h-[93%] flex flex-col pt-0 items-center relative">
                <Image
                  className="w-full h-full bg-cover absolute"
                  alt="ArtistMidBackgnd"
                  width={650}
                  height={630}
                  src={ArtistMidBackgnd}
                />

                <div className="h-[98%] w-[85%] z-10">
                  <div className="m-[40px]">
                    <div className="italic font-normal font-['source-code-pro'] text-2xl xl:text-3xl lg:text-3xl flex text-[#000000] mb-[10px]">
                    {text.meet_the_artist.author}
                    </div>
                    <div className="font-normal font-['source-code-pro'] text-[18px] flex flex-col items-center text-black leading-[146%]">
                      <p className="mb-[20px]">
                        {text.meet_the_artist.about}
                      </p>
                      <p className="mb-[20px]">
                        {text.meet_the_artist.quote}-
                        {text.meet_the_artist.author}
                      </p>
                      <p className="mb-[20px]">
                        {text.meet_the_artist.origin}
                      </p>
                      <p className="mb-[20px]">
                        {text.meet_the_artist["Poppets Story"].description}
                      </p>
                      <p className="mb-[20px]">
                        {" "}
                        {
                          text.meet_the_artist["Poppets' Digital Expansion"]
                            .description
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[45px] relative">
                <Image
                  alt="ArtistFooterBackgnd"
                  width={625}
                  height={45}
                  className="w-full h-full bg-cover absolute"
                  src={ArtistFooterBackgnd}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page
*/