import React, { useState, useEffect } from "react";
import InstructionalPopup from "../InstructionalPopup/InstructionalPopup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrphanarium } from "@/lib/orphanariumProvider";

import styles from "./styles.module.css";

export interface IFloor {
  idx: number;
  activateBackgrounds?: boolean;
}

export const Floor = ({idx=0, activateBackgrounds = false}: IFloor) => {
  
  const { floors, activeFloor, activePOI, showPopups, recordPlaying, setActiveFloor, setActivePOI, setRecordPlaying } = useOrphanarium()

  const {
    name,
    background,
    overlay,
    pointsOfInterest,
  } = floors[idx]

  const [activeBackground, setActiveBackground] = useState(background);

  useEffect(() => {
    console.log(activeFloor, activePOI)
    if(activeFloor == idx && activePOI >= 0) {
      if(!!floors[idx].pointsOfInterest[activePOI]?.lighting) {
        setActiveBackground(floors[idx].pointsOfInterest[activePOI]?.lighting?.src)
      }
    } else {
      setActiveBackground(background);
    }
    
  }, [activePOI, background, activeFloor, floors, idx]);


  const router = useRouter();

  return (
    <div
      className="parent bg-repeat-none bg-left-top bg-contain relative"
      style={{
        backgroundImage: activateBackgrounds // rrendring on the basis of background Image
          ? `${
              pointsOfInterest
                ?.filter((poi) => poi.lighting)
                .map(
                  (bg:any) =>
                  
                    `url("${
                      typeof bg.lighting === "string"
                        ? bg.lighting
                        : bg.lighting
                        ? bg.lighting.src
                        : ""
                    }")`
                )
                .join(", ") || "none"
            }`
          : `url("${
              typeof activeBackground === "string"
                ? activeBackground
                : (activeBackground as any).src
            }"), url("${
              typeof background === "string" ? background : (background as any).src
            }")`,

        color: "#000",
      }}
    >
      
      {pointsOfInterest
        // ?.filter((poi) => {
        //   return !!poi.onClick || !!poi.lighting;
        // })
        ?.map((poi, i) => {
          return (
            <>
            {/* <div
              key={`poi_sprites_${name}_${i}_${!!poi?.sprites ? activeFloor == idx && activePOI == i ? 'in' : 'out': ''}`}
              className={`w-full h-full bg-repeat-none bg-cover absolute ${ !!poi?.sprites ? activeFloor == idx && activePOI == i ? styles.sprites_in : styles.sprites_out : ''}`}
              style={{
                backgroundImage: !!poi?.sprites ? `url("${poi?.sprites?.src}")` : ``,
                // "--spritesIn": `${(100 * (poi?.frames -1 || 1))}% top`, 
                animationDuration: `${(poi?.frames || 1) * 30}ms`,
                animationTimingFunction: `steps(${poi?.frames -1 || 1}, end)`,
                animationIterationCount: 1,
                zIndex: 29,
              }}
              >
                </div> */}
            <div
              className="child"
              key={`poi_${name}_${i}`}
              onMouseEnter={() => {
                console.log(poi);
                setActivePOI(i);
                setActiveFloor(idx);
              }}
              onMouseLeave={() => {
                setActivePOI(i=>Math.abs(i)*-1);
                // setActiveFloor(-1);
              }}
              /* This is super messy - we need to get this sorted differently */
              onClick={() => {
                poi?.audio && setRecordPlaying(poi.audio)
                poi?.link && window.open(poi.link, "_blank")
                poi?.nav && router.push(poi.nav);
              }}
              style={{
                top: `${poi.top}%`,
                left: `${poi.left}%`,
                width: `${poi.width}%`,
                height: `${poi.height}%`,
                position: "absolute",
                cursor: "pointer",
                zIndex: 30,
              }}
            >
              {poi?.popupContent && !poi?.popupDisabled && showPopups && (
                <InstructionalPopup
                  title="Instructional Popup Title"
                  content={poi?.popupContent}
                  graphic={poi?.popupCharacter}
                  isModal={false}
                  trigger={<div className="w-full h-full relative"></div>}
                  isDisabled={false}
                  offsetX={poi?.popupOffsetX}
                  offsetY={poi?.popupOffsetY}
                  makeDisabled={() => {
                    poi.popupDisabled = true;
                    localStorage.setItem("Popup-" + poi.name, "true");
                  }}
                />
              )}
              </div>
            </>
          );
        })}

      <Image
        className="object-fill w-full read-only: left-0 top-0"
        width={1920}
        height={1080}
        alt="overlay"
        src={overlay}
        unoptimized
      />
     
        
    </div>
  );
};

export default Floor;
