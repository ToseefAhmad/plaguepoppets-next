"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { useCutscenes } from "@/lib/cutSceneProvider";

const VideoIntro = ({ src }: { src:string}) => {
  const {cutscene, setCutscene} = useCutscenes()

  return (
    cutscene.playing ? (
    <video
          style={{ objectFit: "cover", opacity: "1", transition: "2s", zIndex: 996, position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw' }}
          width="100%"
          height="100%"
          // loop
          autoPlay
          muted
          playsInline
          onEnded={()=>{setCutscene((cs)=>({...cs, playing: false}))}}
          onClick={()=>{setCutscene((cs)=>({...cs, playing: false}))}}
        >
          <source src={src} type="video/mp4" />
      </video>
    ) : <></>
  );
}

  export default dynamic (() => Promise.resolve(VideoIntro), {ssr: false});