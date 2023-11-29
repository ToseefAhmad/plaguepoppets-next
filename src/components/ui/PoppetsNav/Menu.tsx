"use client";

import React, { useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import { ReactComponent as HandPointingRight } from "@/assets/svg/HandPointingRight.svg";
import { ReactComponent as HandPointingLeft } from "@/assets/HandPointingLeft.svg";
import CloseIcon from "@/assets/img/CloseIcon.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { Web3Button } from '@web3modal/react'

import { UrlObject } from "url";
import Image from "next/image";
declare type Url = string | UrlObject;

export interface IMenu {
  theme?: "dark" | "light";
  menuItems: IMenuItem[];
}

export interface IMenuItem {
  theme?: "dark" | "light";
  href: Url;
  title?: string;
  disabled?: boolean;
  setShowMenu?: Function;
}

const modes = {
  dark: "text-zinc-800",
  light: "text-zinc-50",
};

export const MenuItem = ({
  href,
  children,
  theme = "light",
  disabled = false,
  setShowMenu,
}: PropsWithChildren<IMenuItem>) => {
  const [itemActive, setItemActive] = useState(false);
  return disabled ? (
    <div
      className={`${
        theme === "light" ? "text-zinc-50/50" : "text-zinc-800/50"
      } py-5 w-3/4 text-center`}
    >
      {children}
    </div>
  ) : (
    
      <Link
        href={href}
        onMouseEnter={() => {
          setItemActive(true);
        }}
        onMouseLeave={() => {
          setItemActive(false);
        }}
        className={`${modes[theme]} w-3/4 flex items-center justify-center py-3 text-[15px] leading-[30px] font-semibold cursor-pointer font-['source-code-pro'] text-center`}
      >
        
        {itemActive ? <HandPointingRight className="h-4 mr-2" /> : <div></div>}
        {children}
        {itemActive ? <HandPointingRight className="h-4 ml-2 opacity-0" /> : <div></div>}
        
      </Link>
    
  );
};

export const Menu = ({ theme = "light", menuItems = [] }: IMenu) => {

  const [showMenu, setShowMenu] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const handleOpenModal = () => {
    setShowMenu(!showMenu);
    // setIsScrollDisabled(!isScrollDisabled);
  };
  
  const handleCloseModal = () => {
    setShowMenu(false);
    // setIsScrollDisabled(false);
    // window.removeEventListener('wheel', preventDefaultScroll);
  };
  
  const preventDefaultScroll = (event:any) => {
      event.preventDefault();
  };
  
  useEffect(() => {
    if (isScrollDisabled) {
      // window.addEventListener('wheel', preventDefaultScroll, { passive: false });
    } else {
      // window.removeEventListener('wheel', preventDefaultScroll);
    }
    
  }, [isScrollDisabled]);  

  return (
    <div
      onClick={() => {
        handleOpenModal()
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          handleCloseModal()
        }
      }}
    >
      <Bars3Icon
        className={`${modes[theme]} xl:w-[150px] h-[60px] xl:h-[60px] lg:h-[60px] pr-[2px] xl:pr-[82px] lg:pr-[82px] cursor-pointer`}
      />
      
        {showMenu && (
          <>
          <div className="fixed w-[283px] h-[450px] bg-newMenuBg mt-2  right-7  lg:right-28 rounded bg-cover bg-no-repeat flex justify-center items-center">
            {/* <div className="absolute w-full flex justify-end top-0">
              <Image
                src={CloseIcon}
                alt="CloseIcon"
                className="w-[15%] cursor-pointer"
                width={50}
                height={50}
                onClick={handleCloseModal}
              />
            </div> */}
            <nav
              className={`${theme} flex w-full flex-col justify-between items-center py-10 divide-y-2 divide-zinc-800`}
            >
              {menuItems.map((menuItem, idx) => (
                <MenuItem
                  key={`menu_item_${menuItem.title || idx}`}
                  theme="dark"
                  href={menuItem.href}
                  disabled={menuItem.disabled}
                  setShowMenu={setShowMenu}
                >
                  {menuItem.title || "Item"}
                </MenuItem>
              ))}
              <div className="py-5 w-3/4 text-center">
            <Web3Button />
            </div>
            </nav>
          </div>
          <div className="fixed bg-black inset-0 w-full opacity-10  z-[-99] h-[100vh] overflow-y-hidden"></div>
          </>
        )}
     
    </div>
  );
};
