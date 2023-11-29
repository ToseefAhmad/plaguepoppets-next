"use client"

import Image from "next/image";

import { BackToOrphanariumButton } from "@/components/ui/buttons/BackToOrphanariumButton";
import MaPeebsLetter from "@/components/static/MaPeebsLetter"
import TwitterApi from "@/components/services/TwitterApi"
import MaPeebsPortrait from "@/assets/img/parlour/mapeebs_portrait.png";
import Footer from "@/components/static/Footer";

import VideoIntro from "@/components/static/VideoIntro"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useCutscenes } from "@/lib/cutSceneProvider";
import { useEffect } from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({subsets: ['latin']})


const MaPeebsParlor = () => {
  const { cutscene, setCutscene } = useCutscenes();

  const portrait = useMediaQuery("(orientation: portrait)");

  useEffect(() => {
    setCutscene({ name: "parlor", playing: true });
  }, [setCutscene])
  
  return (
    <>
      <VideoIntro
          src={`${process.env.NEXT_PUBLIC_URL}/video/parlor/Parlour_typewriter.mp4`}
        />
      <div className={`bg-MaPeebsParlorPaper bg-cover bg-no-repeat bg-center ${playfair.className}`}>
        <BackToOrphanariumButton />
        <div className="flex flex-col pt-[10px] overflow-auto gap-[20px] items-center">
          <div className="flex flex-col xl:flex-row lg:flex-row justify-center gap-[20px] xl:gap-[50px] w-full items-center px-5">
            <div>
              <Image
                src={MaPeebsPortrait}
                alt="MaPeebsPortrait"
                className="h-full w-[300px] md:w-full"
                width={381}
                height={555}
              />
            </div>
            <MaPeebsLetter />
          </div>
          <TwitterApi />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MaPeebsParlor;
