"use client";
import FlipBook from "@/components/Flipbook";
import Footer from "@/components/static/Footer";
import axios from "axios";
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import "./page.css";
import { useRouter } from "next/navigation";

import VideoIntro from "@/components/static/VideoIntro"
import { BackToOrphanariumButton } from "@/components/ui/buttons/BackToOrphanariumButton";
import { useCutscenes } from "@/lib/cutSceneProvider";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";


const Library = () => {

  const [bookShow, setBookShow] = useState(false);
  const [bookBg, setBookBg] = useState("Flipbook_bg_main");
  const [pages, setPages] = useState([]);
  const [goBackHover, setGoBackHover] = useState(false);


  const { cutscene, setCutscene } = useCutscenes();

  const portrait = useMediaQuery("(orientation: portrait)");

  useEffect(() => {
    setCutscene({ name: "library", playing: true });
  }, [setCutscene])


  useEffect(() => {
    setBookShow(!cutscene.playing || portrait);
    if (!cutscene.playing || portrait) {
      setBookBg(portrait ? "Flipbook_bg_Img_portrait" : "Flipbook_bg_Img");
    } else {

      setBookBg("Flipbook_bg_main");
    }
  }, [cutscene.playing, portrait])


  //  useEffect for flipbook data 

  useEffect(() => {
    axios
      .get(
        "https://lha2qnsx09.execute-api.us-east-2.amazonaws.com/api/librarybooks?populate=*&sort[0]=pageNumber"
      )
      .then((response) => {
        setPages(response.data.data);
      });
  }, []);

  const router = useRouter();

  return (
    <div>
      <div className={` ${bookBg }`}>
        <div
          className={`bg-Bookoverlay absolute top-0 left-0 h-full w-full bg-repeat-y ${cutscene.playing ? "z-[999]" : ""}`}
          style={{ backgroundSize: "100vw 100vh" }}
        >
          <div
            className="relative h-full w-[3vw] bg-transparent hover:bg-zinc-50/50 z-[1999]"
            onClick={() => router.push("/orphanarium")}
            onMouseEnter={() => {
              setGoBackHover(true);
            }}
            onMouseLeave={() => {
              setGoBackHover(false);
            }}
          ></div>
        </div>

        <div className="h-full w-[96vw] mx-auto">
          <VideoIntro
            src={`${process.env.NEXT_PUBLIC_URL}/video/flipbook/Library_book_extended_v03.mp4`}
          />
          {bookShow && (
            <div className="book-fade-in">
              <FlipBook pages={pages} />
            </div>
          )}
          {goBackHover && (
            <div
              className="goBackContainer flex justify-evenly absolute top-0 left-0 h-full ml-[3vw] items-center z-[997] bg-flip-rgba"
              style={{
                width: goBackHover ? "94vw" : "0vw",
                opacity: goBackHover ? 1 : 0,
              }}
            >
              <BackToOrphanariumButton />
            </div>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
}


export default Library