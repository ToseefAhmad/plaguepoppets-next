


"use client"
// import  IFloor  from "@/components/legacy/Orphanarium/components/Floor/Floor";
import React, { useCallback, useEffect, useState } from "react";
import "./components/style/index.css";
import { Floor } from "@/components/legacy/Orphanarium/components/Floor";
import { NintendoDS } from "@/components/ui/NintendoDS";
import PoppetGuide from "@/assets/img/guide_poppet_001.png";
import PoppetGuideDisabled from "@/assets/img/guide_poppet_001_disabled.png"
import Popup from 'reactjs-popup';
import InstructionalPopup from "./components/InstructionalPopup/InstructionalPopup";
import AudioPlayerPopup from "./components/AudioplayerPopup";

import Image from "next/image";

import { useOrphanarium } from "@/lib/orphanariumProvider";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";


export interface IPointOfInterest {
  name: string;
  top: number;
  left: number;
  height: number;
  width: number;
  lighting?: string;
  icon?: string;
  mobileText: string;
  popupContent: string;
  popupCharacter: string;
  popupDisabled?: boolean;
  popupOffsetX: number;
  popupOffsetY: number;
  onClick?: Function;
  active?: boolean;
  nav?: any;
}
interface IFloor {
  name: string;
  background: string;
  src:string;
  overlay: string;
  pointsOfInterest: IPointOfInterest[];
  activateBackgrounds?: boolean;
  heightPercent: number;
  heightPercentSum: number;
  showPopups: boolean;
  isMobile: boolean;
}


const Orphanarium = () => {


  const { floors, recordPlaying, showPopups, activeFloor, activePOI, setShowPopups, setRecordPlaying } = useOrphanarium()

  const calculateY = () => {
    const top = floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]?.top;
    const hh =
      floors?.[activeFloor]?.pointsOfInterest?.[Math.abs(activePOI)]?.height;


    const floorTop = -floors?.[activeFloor]?.heightPercentSum;

    const currFloor = -floors?.[activeFloor]?.heightPercent;

    const yFloor = top! + hh! / 2;

    const YY = (yFloor * currFloor) / 100;

    const ratio = window.innerHeight / 212;
    const centery = (ratio * 12) / 3.14;

    const Y = floorTop + YY + centery;

    if (Y > 0) {
      return 0;
    }
    return Y;
    
    
  };

  const calculateX = () => {
    
      const X = -(
        floors[activeFloor]?.pointsOfInterest![Math.abs(activePOI)].left -
        20.5 +
        (floors[activeFloor]?.pointsOfInterest![Math.abs(activePOI)].width || 0)
      );
      if (X > 0) {
        return 0;
      }
      return X;
    
    
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
 
  const portrait = useMediaQuery("(orientation: portrait)");
  

  const togglePopup = useCallback(() => {
    setShowPopups(i=>!i);
  }, [setShowPopups]);

  const setPopupsDisableState = (disabled: any) => {
    localStorage.setItem("PlaguePoppetsInstructionalPopup", disabled);
    setShowPopups(!disabled);
    floors.forEach((element) => {
      element?.pointsOfInterest?.forEach((poi: any) => {
        poi.popupDisabled = disabled;
        localStorage.setItem("Popup-" + poi.name, disabled);
      });
    });
  };

  const loadPopupsState = useCallback(() => {
    if (typeof window !== 'undefined') {
      floors.forEach((element) => {
        element?.pointsOfInterest?.forEach((poi: any) => {
          var popupState = localStorage.getItem("Popup-" + poi.name);
          poi.popupDisabled =
            popupState == null || popupState == "false" ? false : true;
        });
      });
   }
  },[floors, ]);

  useEffect(()=>{
    loadPopupsState()
  },[loadPopupsState])


  return (
    <div>

      <div className={`${portrait ? 'overflow-hidden h-full w-full orph-mob' : ''}`}>

      {portrait && ( <NintendoDS /> )}
      {portrait && isPopupVisible && (
        <InstructionalPopup
          title="Instructional Popup Title"
          content={"Welcome to the Orphanarium!\n Ssshhhh, The poppets are sleeping.\nUse the buttons below to move around the orphanarium and unlock surprises inside. Let's go!"}
          closePopup={togglePopup}
          graphic={PoppetGuide}
          position={{ top: '15%', left: '19%' }}
          isModal={true}
          displayOn="mobile-show-resp"
        />
      )}

      
        <div className="orphanarium-page">
        <div
          className={`${portrait ? 'origin-top-left' : ''}`}
          style={{
            transition: portrait ? "transform 0.5s ease" : '',
            transform:
              floors.length > 0 && !!portrait
                ? `scale(3) translate(${calculateX()}%, ${calculateY()}%)`
                : "",
          }}
        >
            
            {floors?.map((floor:any, i:any) => {
              return <Floor idx={i} key={`floor_${i}`} />;
            })}
          </div>
        </div>
        <div>
        {isPopupVisible && !portrait && (
          <InstructionalPopup
            title="Instructional Popup Title"
            content={"Welcome to the Orphanarium!\n Ssshhhh, The poppets are sleeping.\n Have fun hovering your mouse around to unlock surprises inside. Let's go!"}
            closePopup={togglePopup}
            graphic={PoppetGuide}
            position={{ top: '35%', left: portrait ? '7%' : '40%' }}
            isModal={true}
            displayOn="web-show-resp"
          />
        )}
      </div>
        <div>
          {recordPlaying !== "" && (
            <AudioPlayerPopup
              src={recordPlaying}
              position={{top:'30%', left: (portrait ? '20%' : '40%')}}
              isModal={true}
              closePopup={() => {setRecordPlaying("")}}
              displayOn="web-show-resp mobile-show-resp "
              />
          )}
        </div>
        <div className="popupController">
          
            <Popup
              trigger={() => (
                <Image
                  className="shake"
                  alt={`${showPopups ? 'Disable' : 'Display'} clues`}
                  width={50}
                  height={50}
                  src={showPopups ? PoppetGuideDisabled : PoppetGuide}
                  onClick={() => {setShowPopups(i=>!i)}}
                />
              )}
              position="left center"
              closeOnDocumentClick
              on="hover"
            >
              <div className="text-[0.7rem] relative p-[0.5rem] bg-white rouded-[3px] max-w-[300px] py-[0.5rem] px-auto">
              {`${showPopups ? 'Disable' : 'Display'} all clues`}
              </div>
            </Popup>
          
        </div>
      </div>
    </div>
  );
};

export default Orphanarium;

