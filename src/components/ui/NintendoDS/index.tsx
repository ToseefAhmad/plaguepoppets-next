import React, { useEffect, useState } from "react";
import "./nintendods.css";
import { useRouter } from "next/navigation";

import { ReactComponent as Left } from "@/assets/svg/LeftThumb.svg"
import { ReactComponent as Right } from '@/assets/svg/RightThumb.svg'
import { ReactComponent as Up } from '@/assets/svg/TopThumb.svg'
import { ReactComponent as Down } from '@/assets/svg/BelowThumb.svg'

import { useOrphanarium } from "@/lib/orphanariumProvider";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

interface INDSTarget {
  top: Number;
  left: Number;
  icon?: string;
  onClick?: Function;
}


// import highlighter from "img/Library_Lights Off_B_v02.png";
export const NintendoDS = () => {
  const router = useRouter();

  const { floors, activePOI, activeFloor, setRecordPlaying, setActivePOI, setActiveFloor } = useOrphanarium()

  const [Icon, setIcon] = useState<any>(QuestionMarkCircleIcon)

  useEffect(()=>{
    //console.log(floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)].Icon)
    setIcon(floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)].Icon)
    // console.log(Icon)
  }, [activePOI, activeFloor, floors])

  return (
    <div className="absolute bottom-[90px] z-[999] left-0 w-full flex items-center justify-center bg-zinc-950/50">
      <div className="grid gap-[1px] p-3 grid-cols-3 z-[999] w-1/3 min-w-[164px]  bg-zinc-950/95 rounded rounded-full border border-zinc-50">
        { /* Mobile hints */ }
        <div className="absolute -bottom-[2em] left-0 w-full bg-mobiletext-color p-[5px] text-[.8em] text-white">
          <p>{floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]?.mobileText}</p>
        </div>

        {/* Up button */}
        <button
          className="flex justify-center items-center col-span-3"
          onClick={()=>{
            setActiveFloor(i=>i <= 0 ? floors.length - 1 : i - 1);
            setActivePOI(0); 
          }}
        >
          <Up className={`w-[48px] h-[48px] ${activeFloor !== 0 ? 'text-zinc-50 hover:text-amber-300' : 'text-zinc-700'}`} />
        </button>
        
        {/* Left button */}
        <button
          className="flex justify-end items-center"
          onClick={() => {setActivePOI(i=>Math.abs(i) <= 0 ? floors?.[activeFloor]?.pointsOfInterest?.length - 1 : Math.abs(i) - 1); }}
        >
          <Left className={`w-[48px] h-[48px] ${activePOI !== 0 ? 'text-zinc-50 hover:text-amber-300' : 'text-zinc-700'}`} />
        </button>

        {/* Center button */}
        <button
              className={`flex justify-center items-center rounded-full border border-zinc-50 `}
              onClick={() => {
                const poi = floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]
                poi?.audio && setRecordPlaying(poi.audio)
                poi?.link && window.open(poi.link, "_blank")
                poi?.nav && router.push(poi.nav);
              }}
            >
              <Icon className={`w-[48px] h-[48px] p-[0.5em]  ${
                (floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]?.nav || 
                floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]?.link ||
                floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]?.audio) ?
                'text-zinc-50 hover:text-violet-500 ' : 'text-zinc-700'
              } `} />
        </button>

        {/* Right button */}
        <button
          className="flex justify-start items-center"
          onClick={() => {setActivePOI(i=>Math.abs(i) >= floors?.[activeFloor]?.pointsOfInterest?.length - 1 ? 0 : Math.abs(i) + 1);}}
        >
          <Right className={`w-[48px] h-[48px] ${Math.abs(activePOI) !== floors?.[activeFloor]?.pointsOfInterest!.length - 1 ? 'text-zinc-50 hover:text-amber-300' : 'text-zinc-700'}`} />
        </button>

        {/* Down button */}
        <button
          className="flex justify-center items-center col-span-3"
          onClick={()=>{setActiveFloor(i=>i >= floors.length - 1 ? 0 : i + 1); setActivePOI(0); }}
        >
          <Down className={`w-[48px] h-[48px] ${activeFloor !== floors.length - 1 ? 'text-zinc-50 hover:text-amber-300' : 'text-zinc-700'}`} />
        </button>
      </div>
    </div>
  );
};

export default NintendoDS;
