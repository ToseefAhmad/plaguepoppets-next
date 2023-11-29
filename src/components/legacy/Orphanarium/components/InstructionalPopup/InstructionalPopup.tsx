"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import Image from "next/image";
import "./style/InstructionalPopup.css";

type InstructionalPopupProps = {
  title: string;
  content: string;
  graphic: any;
  displayOn?: string;
  offsetX?: number;
  offsetY?: number;
  closePopup?: () => void;
  position?: { top: string; left: string };
  isModal: boolean;
  isDisabled?: boolean;
  makeDisabled?: () => void;
  trigger?: JSX.Element;
};

const InstructionalPopup: React.FC<InstructionalPopupProps> = ({
  title,
  content,
  graphic,
  displayOn = undefined,
  offsetX = undefined,
  offsetY = undefined,
  closePopup = undefined,
  position = undefined,
  isModal,
  isDisabled = false,
  makeDisabled = undefined,
  trigger = undefined,
}) => {
  const getModalProps = (): {} => {
    if (isModal) {
      return {
        open: true,
        modal: true,
        lockScroll: true,
        contentStyle: {
          position: "absolute",
          top: position!.top,
          left: position!.left,
        },
      };
    } else {
      return {
        on: ["hover", "focus"],
        position: ["bottom center", "left top", "left bottom", "top left"],
        closeOnDocumentClick: true,
        lockScroll: false,
        trigger: trigger,
      };
    }
  };
  const [closeModal, setCloseModal] = useState(true);

  return (
    <>
      {closeModal && (
        <Popup
          disabled={isDisabled}
          onClose={closePopup}
          offsetX={offsetX}
          offsetY={offsetY}
          nested
          {...getModalProps()}
          className={`custom-popup${
            isModal ? " modal" : " non-modal"
          } ${displayOn}`}
          keepTooltipInside={true}
        >
          <>
            <div
              className={`ip-popup${
                isModal
                  ? "modal relative text-[1rem] p-[1rem] bg-white rounded-[5px] max-w-[400px] my-[1rem] mx-auto bg-center z-[1] bg-RectangleMenu shadow-shadow"
                  : "non-model text-[0.8rem] relative p-[0.5rem] bg-white rounded-[3px] max-w-[370px] my-[.5rem] mx-auto shadow-shadow bg-center bg-RectangleMenu"
              }`}
            >
              <div tabIndex={-1} className="relative select-none z-[1]">
                <Popup
                  trigger={(open) => (
                    <div
                      tabIndex={-1}
                      className="absolute right-[15px] top-[10px] bg-none border-none text-[1.5rem] font-bold cursor-pointer select-none"
                      onClick={() => {
                        makeDisabled && makeDisabled();
                        close();
                        setCloseModal(false);
                      }}
                    >
                      &times;
                    </div>
                  )}
                  on={["hover"]}
                  position={["right top", "left top"]}
                  closeOnDocumentClick
                  nested
                >
                  <div className="text-[.7rem] relative p-[.5rem] bg-white rounded-[3px] shadow-shadow max-w-[300px] my-[0.5rem] mx-auto">
                    Don &apos; t show this popup anymore
                  </div>
                </Popup>
                <div className="flex flex-row items-center gap-[1rem] justify-center">
                  <div
                    className="flex-1 max-w-[60%]"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {content}
                  </div>
                </div>
              </div>
              <Image
                className="absolute w-[50%] max-w-none right-[77%] top-[50%] transform translate-y-[-50%]"
                src={graphic}
                alt="Hero Poppet!"
                width={500}
                height={500}
              />
            </div>
          </>
        </Popup>
      )}
    </>
  );
};

export default InstructionalPopup;
