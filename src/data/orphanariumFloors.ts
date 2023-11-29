import * as React from 'react'

import { IPointOfInterest, IFloor } from '@/lib/orphanariumProvider';

import PoppetGuideOne from "@/assets/img/guide_poppet_002.png";
import PoppetGuideTwo from "@/assets/img/guide_poppet_003.png";

import OrbGuide from "@/assets/img/guide_orb.gif";

import LibraryDark from "@/assets/img/orphanarium/LIBRARY_PM.jpg";
import LibraryOverlay from "@/assets/img/orphanarium/LIBRARY_PM_OVERLAY.gif";

import LibraryLightingPodium from "@/assets/img/orphanarium/LIBRARY_PM_FOCUS_BOOK.jpg";
import LibraryLightingStatue from "@/assets/img/orphanarium/LIBRARY_PM_FOCUS_STATUE.gif";
import LibrarySpritesStatue from '@/assets/img/orphanarium/LIBRARY_PM_SPRITES_STATUE.png';

import OcculariumDark from "@/assets/img/orphanarium/OCCULARIUM_PM.jpg";
import OcculariumOverlay from "@/assets/img/orphanarium/OCCULARIUM_PM_OVERLAY.png";

import OcculariumLightingRadio from "@/assets/img/orphanarium/OCCULARIUM_PM_FOCUS_RADIO.jpg";

import ParlourDark from "@/assets/img/orphanarium/PARLOUR_PM.jpg";
import ParlourOverlay from "@/assets/img/orphanarium/PARLOUR_PM_OVERLAY.gif";

import ParlourLightingRecordPlayer from "@/assets/img/orphanarium/PARLOUR_PM_FOCUS_PHONOGRAPH.jpg";
import ParlourLightingPaintingOne from "@/assets/img/orphanarium/PARLOUR_PM_FOCUS_PAINTING_LEFT.jpg";
import ParlourLightingPaintingPoppet from "@/assets/img/orphanarium/PARLOUR_PM_FOCUS_PAINTING_CENTER.jpg";;
import ParlourLightingTypewriter from "@/assets/img/orphanarium/PARLOUR_PM_FOCUS_TYPEWRITER.jpg";
import ParlourLightingPaintingTwo from "@/assets/img/orphanarium/PARLOUR_PM_FOCUS_PAINTING_RIGHT.jpg";;
import ParlourLightingOrb from "@/assets/img/orphanarium/PARLOUR_PM_FOCUS_ORB.gif";

import CaveDark from "@/assets/img/orphanarium/CAVE_PM.jpg";
const CaveOverlay = `${process.env.NEXT_PUBLIC_URL}/video/floors/cave_anim_v3.gif`;

import {
  FireIcon,
  BookOpenIcon,
  SpeakerWaveIcon, 
  PhotoIcon,
  MicrophoneIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
  UserIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/solid'


const rooms = [
  {
    id: 1,
    name: "Library",
    background: LibraryDark,
    overlay: LibraryOverlay,
    heightPercentSum: 0,
    heightPercent: 22.7,
    pointsOfInterest: [
      {
        name: "fireplace",
        top: 68,
        left: 10,
        width: 12,
        height: 20,
        Icon: FireIcon,
        mobileText: "A cozy fire is warming up the library room.",
      },
      {
        name: "statue",
        top: 43,
        left: 11,
        width: 4,
        height: 20,
        Icon: UserIcon,
        mobileText: "The bust seems connected to a latch!",
        nav: "/rooms/trinkets",
        lighting : LibraryLightingStatue,
        // sprites: LibrarySpritesStatue,
        frames: 15,
      },
      {
        name: "book",
        top: 58,
        left: 35,
        height: 33,
        width: 7,
        Icon: BookOpenIcon,
        mobileText: "Looks like you have found The Poppet Chronicles!",
        popupDisabled: false,
        popupContent:
          "Looks like you have found The Poppet Chronicles! Check out the poppets unexpected history!",
        popupCharacter: PoppetGuideOne,
        lighting: LibraryLightingPodium,
        nav: "/rooms/library",
      },
      {
        name: "candle",
        top: 30,
        left: 70,
        width: 10,
        height: 20,
        Icon: FireIcon,
        mobileText: "Spooky candles!",
      },
    ],
  },
  {
    id: 2,
    name: "Parlour",
    background: ParlourDark,
    overlay: ParlourOverlay,
    heightPercentSum: 22.7,
    heightPercent: 22.7,
    pointsOfInterest: [
      {
        name: "phonograph",
        top: 45,
        left: 8.5,
        width: 5.5,
        height: 30,
        Icon: SpeakerWaveIcon,
        mobileText:
          "Looks like a recording of Ms W. Bibbins is on the phonograph.",
        popupDisabled: false,
        popupContent:
          "Listen to a recording from 1910 of Ms Wilhelmina Bibbins , the first scientist to discover cave drawings of Poppets",
        popupCharacter: PoppetGuideTwo,
        popupOffsetX: -30,
        popupOffsetY: 50,
        lighting: ParlourLightingRecordPlayer,
        audio: `${process.env.NEXT_PUBLIC_URL}/audio/record.mp3`,
      },
      {
        name: "picture1",
        top: 6,
        left: 14,
        width: 10,
        height: 33,
        Icon: PhotoIcon,
        mobileText: "A beautiful painting of Juli Adams",
        popupDisabled: false,
        popupContent:
          "Looks like you have found one of Juli Adam's paintings! Check out her website",
        popupCharacter: PoppetGuideTwo,
        lighting: ParlourLightingPaintingOne,
        link: "https://www.juliadams.com/",
      },
      {
        name: "Poppet",
        top: 6.5,
        left: 45,
        width: 8.5,
        height: 32,
        Icon: BookOpenIcon,
        mobileText: "Is this victorian era woman holding a poppet? ",
        popupDisabled: false,
        popupContent:
          "Is this victorian era woman holding a poppet? Let's find out in the chronicles.",
        popupCharacter: PoppetGuideTwo,
        lighting: ParlourLightingPaintingPoppet,
        nav: "/rooms/library",
      },
      {
        name: "typewriter",
        top: 46,
        left: 79,
        height: 43,
        width: 11,
        Icon: NewspaperIcon,
        mobileText:
          "MaPeebs favorite subjects is Poppets, stay in the know here!",
        popupDisabled: false,
        popupContent:
          "MaPeebs favorite subjects is Poppets, stay in the know here!",
        popupCharacter: PoppetGuideTwo,
        lighting: ParlourLightingTypewriter,
        nav: "/rooms/parlour",
      },
      {
        name: "picture2",
        top: 9,
        left: 74.5,
        width: 10,
        height: 30,
        Icon: PhotoIcon,
        mobileText: "A beautiful painting of Juli Adams",
        popupDisabled: false,
        popupContent:
          "Looks like you have found one of Juli Adam's paintings! Check out her website",
        popupCharacter: PoppetGuideTwo,
        lighting: ParlourLightingPaintingTwo,
        link: "https://www.juliadams.com/",
      },
      {
        name: "orb",
        top: 60,
        left: 91.5,
        width: 7.3,
        height: 28,
        Icon: BookOpenIcon,
        mobileText: "Its an Orb! This is where poppets are from!",
        popupDisabled: false,
        popupContent:
          "Looks like you have found an Orb! This is where poppets are from!",
        popupCharacter: PoppetGuideTwo,
        lighting: ParlourLightingOrb,
        nav: "/rooms/library",
      },
    ],
  },
  {
    id: 3,
    name: "Occularium",
    background: OcculariumDark,
    overlay: OcculariumOverlay,
    heightPercentSum: 45.4,
    heightPercent: 22.7,
    pointsOfInterest: [
      {
        name: "skull",
        top: 45,
        left: 8.5,
        width: 5.5,
        height: 30,
        Icon: PuzzlePieceIcon,
        mobileText:
          "Are those Celestial Skulls?",
        popupDisabled: false,
        popupContent:
          "Looks like a pair of Celestial Skulls",
        popupCharacter: PoppetGuideTwo,
        popupOffsetX: -30,
        popupOffsetY: 50,
      },
      {
        name: "radio",
        top: 55,
        left: 22,
        width: 8.5,
        height: 30,
        mobileText: "Poppet Radio, real Poppets, real talk.",
        popupDisabled: false,
        popupContent:
          "Poppet Radio, real Poppets, real talk. Poppet Topics, History, Legend and Lore",
        popupCharacter: PoppetGuideTwo,
        lighting: OcculariumLightingRadio,
        Icon: MicrophoneIcon,
        nav: "/radio",
      },
      {
        name: "desk",
        top: 25,
        left: 36,
        width: 27,
        height: 67,
        Icon: QuestionMarkCircleIcon,
        mobileText: "What strange tools! What could be going on here?",
      },
    ],
  },
  {
    id: 4,
    name: "Cave",
    background: CaveDark,
    overlay: CaveOverlay,
    heightPercentSum: 67.1,
    heightPercent: 31.9,
    pointsOfInterest: [
      {
        name: "empty",
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        Icon: QuestionMarkCircleIcon,
        mobileText: "Orbs everywhere!",
      },
      {
        name: "orb1",
        top: 5,
        left: 66.5,
        width: 5,
        height: 12,
        Icon: QuestionMarkCircleIcon,
        mobileText: "Orbs are growing on stalagmites!",
        popupDisabled: false,
        popupContent:
          "Are the orbs growing on stalactites?\nLet's check the Poppet Chronicles!",
        popupCharacter: OrbGuide,
        lighting: CaveDark,
        nav: "/rooms/library",
      },
      {
        name: "empty",
        top: 5,
        left: 79,
        height: 43,
        width: 11,
        Icon: QuestionMarkCircleIcon,
        mobileText: "Orbs everywhere!",
      },
    ],
  },
] as unknown as IFloor[];

export default rooms;
