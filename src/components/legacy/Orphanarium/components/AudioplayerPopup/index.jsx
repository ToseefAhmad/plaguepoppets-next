"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import ReactAudioPlayer from "react-audio-player";
import Image from "next/image";

import Phonograph from "@/assets/img/phonograph.png";

import styles from './styles.module.css'

// interface AudioPlayerPopupProps {
//   title: string;
//   content: string;
//   graphic: any;
//   closePopup?: () => void;
//   close?: () => void;
//   displayOn?: string;
//   position?: any;
//   isModal: boolean;
//   isDisabled?: boolean;
//   makeDisabled?: () => void;
//   trigger?: React.ReactNode;
// }

export const AudioPlayerPopup = ({
  src,
  closePopup,
  displayOn = undefined,
  position = undefined,
  isModal,
  isDisabled = false,
  trigger = undefined,
}) => {
  const getModalProps = () => {
    if (isModal) {
      return {
        open: true,
        modal: true,
        lockScroll: true,
        contentStyle: {
          position: "absolute",
          top: position.left,
          left: position.left,
        },
      };
    } else {
      return {
        on: ["hover", "focus"],
        position: ["bottom center", "left top", "top right", "left bottom"],
        closeOnDocumentClick: true,
        lockScroll: false,
        trigger: trigger,
      };
    }
  };

  return (

    <Popup
    
      disabled={isDisabled}
      onClose={closePopup}
      nested
      {...getModalProps()}
      className={`audio-popup ${isModal ? "modal" : " non-modal"} ${displayOn}`}
      keepTooltipInside={true}
    >
      <div className={`ap-popup${isModal ? 'modal text-[1rem] relative p-[1rem] bg-white rounded-[5px] shadow-shadow max-w-[400px] my-[1rem] mx-auto bg-RectangleMenu bg-center' : ' non-modal text-[1rem] relative p-[0.5rem] bg-white rounded-[3px] shadow-shadow max-w-[370px] my-[0.5rem] mx-auto bg-RectangleMenu bg-center'} ${displayOn}`}>
        <div tabIndex={-1} className="relative select-none z-[1]">
          <div
            tabIndex={-1}
            className="absolute right-[15px] top-[10px] bg-none border-none text-[1.5rem] font-bold cursor-pointer select-none"
            onClick={closePopup}
          >
            &times;
          </div>
          <div className="ap-content flex flex-row items-center gap-[1rem] justify-center max-w-[80%]">
            <ReactAudioPlayer
              src={src}
              autoPlay
              controls
            ></ReactAudioPlayer>
          </div>
        </div>
        <Image
          className={`absolute w-[40%] max-w-none right-[90%] top-[50%] transform translate-y-[-50%] z-[10] ${displayOn}`}
          src={Phonograph}
          alt="Record Player!"
          width={500}
          height={500}
        />
      </div>
    </Popup>
  );
};

export default AudioPlayerPopup;
