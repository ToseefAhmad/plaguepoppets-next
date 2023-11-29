'use client'

import React, { PropsWithChildren, useContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react'
import { StaticImageData } from 'next/image';

import rooms from '@/data/orphanariumFloors'


export interface IPointOfInterest {
    name: string ;
    top: number;
    left: number;
    position:any;
    height: number;
    width: number;
    sprites?: StaticImageData;
    frames?: number;
    lighting?: StaticImageData;
    src: string;
    Icon?: SVGSVGElement;
    mobileText: string;
    popupContent: string;
    popupCharacter: string;
    popupDisabled?: boolean;
    popupOffsetX: number;
    popupOffsetY: number;
    onClick?: Function;
    active?: boolean;
    nav?: string;
    audio?: string;
    link?: string;
  }
  
  export interface IFloor {
    name: string;
    background: StaticImageData | string;
    src: string;
    overlay: string;
    pointsOfInterest?: IPointOfInterest[];
    activateBackgrounds?: boolean;
    heightPercent: number;
    heightPercentSum: number;
    showPopups: boolean;
    isMobile: boolean;
  }
  interface Background {
    lighting?: {
      src: string;
      // Other properties if applicable
    };
    // Other properties if applicable
  }

interface OrphanariumContextType {
  floors: IFloor[];
  activePOI: number;
  activeFloor: number;
  recordPlaying?: string;
  showPopups?: boolean;
  setActivePOI?: Dispatch<SetStateAction<number>>;
  setActiveFloor?: Dispatch<SetStateAction<number>>;
  setRecordPlaying?: Dispatch<SetStateAction<string>>;
  setShowPopups?: Dispatch<SetStateAction<boolean>>;
}

const OrphanariumContext = React.createContext<OrphanariumContextType>({floors: rooms, activePOI: 0, activeFloor: 0, recordPlaying: "", showPopups: false})

export function OrphanariumProvider({ children }: PropsWithChildren) {

  const [floors, setFloors] = useState<IFloor[]>(rooms)
  const [activePOI, setActivePOI] = useState(0)
  const [activeFloor, setActiveFloor] = useState(0)
  const [recordPlaying, setRecordPlaying] = useState("")
  const [showPopups, setShowPopups] = useState(true)

  return (
    <OrphanariumContext.Provider value={{ floors, activePOI, activeFloor, recordPlaying, showPopups, setActivePOI, setActiveFloor, setRecordPlaying, setShowPopups }}>
      {children}
    </OrphanariumContext.Provider>
  )
}

export const useOrphanarium = () => {
  const { floors, activePOI, activeFloor, recordPlaying, showPopups, setActivePOI, setActiveFloor, setRecordPlaying, setShowPopups } = useContext(OrphanariumContext)
  return { floors, activePOI, activeFloor, recordPlaying, showPopups, setActivePOI, setActiveFloor, setRecordPlaying, setShowPopups }
}