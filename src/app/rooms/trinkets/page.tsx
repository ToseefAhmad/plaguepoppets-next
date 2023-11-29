"use client"
import { useEffect } from "react";

import { BackToOrphanariumButton } from "@/components/ui/buttons/BackToOrphanariumButton";
import { PoppetViewer } from "@/components/ui/3d/PoppetViewer";
import Footer from "@/components/static/Footer";

import { useRouter } from "next/navigation";

import VideoIntro from "@/components/static/VideoIntro"
import { useCutscenes } from "@/lib/cutSceneProvider";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

import { useAccount, useContractRead, useEnsName } from 'wagmi'

import { CURIOS } from '@/data/tokens'


import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({subsets: ['latin']})

const portraitVideoNonOwner = `${process.env.NEXT_PUBLIC_URL}/video/Library_BookShelf_General-Public_ANIMATION_VERT.mp4`;
const landscapeVideoNonOwner = `${process.env.NEXT_PUBLIC_URL}/video/Library_BookShelf_General-Public_ANIMATION_H264-15mbps.mp4`;

const portraitVideoOwner = `${process.env.NEXT_PUBLIC_URL}/video/Library_BookShelf_CS-OWNER_ANIMATION_VERT.mp4`;
const landscapeVideoOwner = `${process.env.NEXT_PUBLIC_URL}/video/Library_BookShelf_CS-OWNER_WIDE_FINAL_H264.mp4`;


const TrinketsRoom = () => {

  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })

  const router = useRouter();

    const { cutscene, setCutscene } = useCutscenes();

    const portrait = useMediaQuery("(orientation: portrait)");

    const { data } = useContractRead({
      abi: CURIOS.abi,
      address: CURIOS.address as `0x${string}`,
      functionName: 'balanceOf',
      args: [address, 0]
    })
  
    useEffect(() => {
      setCutscene({ name: "trinkets", playing: true });
    }, [setCutscene])

    useEffect(() => {
      if((!isConnected || Number(data) === 0) && !cutscene.playing && cutscene.name === "trinkets"){
        router.push('/orphanarium')
        
      }
    }, [cutscene.playing, cutscene.name, data, router, isConnected])

    useEffect(()=>{
      console.log(data)
      console.log(Number(data)===0)
    }, [data])
    
  if (isConnected) {
    return (
    <div className={`h-screen ${playfair.className}`}>
      <VideoIntro
          src={portrait ? portraitVideoOwner : landscapeVideoOwner}
        />
        {!cutscene.playing && Number(data) > 0 && (
           
           
              <div className="bg-pagebg bg-cover bg-no-repeat bg-center h-screen">
            
              <BackToOrphanariumButton />
              
              <PoppetViewer poppetGLTF="" stageGLTF="" />
           
           
           
        </div>
        )}
      
      <Footer />
    </div>
  ) 
} else { return (
<VideoIntro
          src={portrait ? portraitVideoNonOwner : landscapeVideoNonOwner}
        />
  )}
};

export default TrinketsRoom;
