"use client"
import { useState, useLayoutEffect, useEffect } from "react";
import { VideoBackground } from "@/components/static/VideoBackground";
import { SplashLogo } from "@/components/static/SplashLogo";

import styles from "./page.module.css";
import { DecorativeNavButton } from "@/components/ui/buttons/DecorativeNavButton";
import { DecorativeModalButton } from "@/components/ui/buttons/DecorativeModalButton";
import { MailchimpSignupForm } from "@/components/ui/forms/MailchimpSignupForm";

import  AboutPlaguePoppets  from "@/components/ui/homePage/AboutPlaguePoppets";
import SeasonalThreads from "@/components/ui/homePage/SeasonalThreads";
import OnGoingSeasons from "@/components/ui/homePage/OnGoingSeasons";
import ContentSharing from "@/components/ui/homePage/ContentSharing";
import NewFooter from "@/components/ui/homePage/NewFooetr";

const SafariPortraitVideo = `${process.env.NEXT_PUBLIC_URL}/video/splash/Splash_vertical_ProRes4444-hevc-safari.mp4`;
const SafariLandscapeVideo = `${process.env.NEXT_PUBLIC_URL}/video/splash/Splash_2_4444_A-hevc-safari.mp4`;

const PortraitVideo = `${process.env.NEXT_PUBLIC_URL}/video/splash/Splash_vertical_ProRes4444-vp9-chrome.webm`;
const LandscapeVideo = `${process.env.NEXT_PUBLIC_URL}/video/splash/Splash_2_4444_A-vp9-chrome.webm`;

const video1 = `${process.env.NEXT_PUBLIC_URL}/video/splash/Coltrane.mp4`;
const video2 = `${process.env.NEXT_PUBLIC_URL}/video/splash/Alexia.mp4`;

// const SafariPortraitVideo = 'https://dev2.plaguepoppets.io/video/splash/Splash_vertical_ProRes4444-hevc-safari.mp4';
// const SafariLandscapeVideo = 'https://dev2.plaguepoppets.io/video/splash/Splash_2_4444_A-hevc-safari.mp4';

// const PortraitVideo = 'https://dev2.plaguepoppets.io/video/splash/Splash_vertical_ProRes4444-vp9-chrome.webm';
// const LandscapeVideo = 'https://dev2.plaguepoppets.io/video/splash/Splash_2_4444_A-vp9-chrome.webm';

// const video1 = `https://dev2.plaguepoppets.io/video/splash/Coltrane.mp4`;
// const video2 = `https://dev2.plaguepoppets.io/video/splash/Alexia.mp4`;

export default function Home() {
  const [isSafari, setIsSafari] = useState(false);
  const [selectVideo, setSelectVideo] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollVideoUp, setScrollVidoUp] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const vidoList = [video1, video2];

  useLayoutEffect(() => {
    setSelectVideo(Math.floor(Math.random() * 2));
  }, [setSelectVideo])


  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, [setIsSafari]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - globalThis.innerHeight;
      const scrollY = globalThis.scrollY;
      const percentage = Math.floor((scrollY / totalHeight) * 100);
      setScrollPercent(percentage);
    };

    globalThis.addEventListener('scroll', handleScroll);

    return () => {
      globalThis.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() =>{
    if(scrollPercent === 0) {
      setScrollVidoUp(0)
    }
    else if(scrollPercent >= 1 && scrollPercent <=  30 && scrollDirection === "down" ) {
      setScrollVidoUp(-13)
    }
  }, [scrollPercent]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

useEffect(() => {
  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollableHeight) * 100;

    if (scrollPercentage > 88) {
      // Prevent scrolling beyond 88%
      window.scrollTo(0, (88 / 100) * scrollableHeight);
    }
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  return () => {
    // Remove the event listener when the component unmounts
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.mainWrapperAdjust}></div>
        <main className={styles.main} >
          {/* <div className={`${styles.poppetSplashBackground} h-full w-full -z-20 absolute top-0 left-0 bg-left-top bg-cover bg-no-repeat`}></div> */}
          <div className={styles.videoContainerHero} data-element={scrollPercent >= 1 && scrollDirection === 'down' ? 'videoContainerHeroBlur' :  "" } >
          {
            isSafari
            ?
            <VideoBackground
            portraitVideo={{
              src: SafariPortraitVideo,
            }}
            landscapeVideo={{
              src: SafariLandscapeVideo,
            }}
          />
          :
          <VideoBackground
          portraitVideo={{
            src: PortraitVideo,
          }}
          landscapeVideo={{
            src: LandscapeVideo,
          }}
        />
          }
          </div>
          <div className="max-w-[60vw] md:max-w-[40vw] min-w-[40w] max-h-[30vh] md:max-h-[20vh] fixed mr-[3vw] top-0 right-0">
            <SplashLogo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 absolute bottom-0 right-0 md:p-3 mb-2  w-full">
            <div className="col-span-2 "></div>
            <div className="grid grid-cols-2 gap-1 w-full mb-[10vh] md:mb-0 xl:pr-14">
              <DecorativeModalButton title="Sign Up">
                <MailchimpSignupForm />
              </DecorativeModalButton>
              <DecorativeNavButton href="/orphanarium">
                Orphanarium
              </DecorativeNavButton>
            </div>
          </div>
        </main>
        <div className={styles.homeBody} style={{ transform: `translateY(${scrollVideoUp}%)`,  transition: 'transform 0.55s ease-in-out',   scrollBehavior: 'smooth'}}>
        <video  className={styles.homeBodyVideo} key={vidoList[selectVideo]} id='myvideo' autoPlay muted loop playsInline style={{width: '100%', opacity: scrollPercent == 0 && scrollDirection === 'up' ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }}>
          <source src={vidoList[selectVideo]} type='video/mp4' />
        </video>
        <AboutPlaguePoppets />
        <SeasonalThreads />
        <OnGoingSeasons />
        <ContentSharing />
        <div className="global-footer">
          <NewFooter />
        </div>
        </div>
      </div>
    </>
  );
}
