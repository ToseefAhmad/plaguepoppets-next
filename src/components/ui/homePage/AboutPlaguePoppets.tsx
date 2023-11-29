"use client";
import React, {useState, useLayoutEffect } from 'react'
import Image from "next/image";
import { AttentionSeeker } from "react-awesome-reveal";

import PoppetBox1 from "../../../assets/gif/poppetV1.gif";
import PoppetBox2 from "../../../assets/gif/poppetV2.gif";
import PoppetBox3 from "../../../assets/gif/poppetV3.gif";
import PoppetBox4 from "../../../assets/gif/poppetV4.gif";
import PoppetBox5 from "../../../assets/gif/poppetV5.gif";

import styles from './AboutPlaguePoppets.module.css'
import localFont from 'next/font/local';

const belizarius = localFont({src: '../../../assets/fonts/Belizarius.woff'})
const lato = localFont({src: '../../../assets/fonts/lato/Lato-Regular.ttf'})

const video1 = `${process.env.NEXT_PUBLIC_URL}/video/splash/Coltrane.mp4`;
const video2 = `${process.env.NEXT_PUBLIC_URL}/video/splash/Alexia.mp4`;


 const AboutPlaguePoppets = () => {
  const shadowClass1 = `${styles.shadows} shadow_1`;
  const shadowClass2 = `${styles.shadows} shadow_2`;
  const shadowClass3 = `${styles.shadows} shadow_3`;
  const imagesList = [PoppetBox1, PoppetBox2, PoppetBox3, PoppetBox4, PoppetBox5];
  const vidoList = [video1, video2];
  const [selecImage, setSelectImage] = useState(0);
  const [selectVideo, setSelectVideo] = useState(0);

  useLayoutEffect(() => {
    setSelectImage(Math.floor(Math.random() * 5));
    setSelectVideo(Math.floor(Math.random() * 2));

  }, [])

  return (
    <>
      <div className={styles.main}>
          <div className={shadowClass2} data-element="shadow_2"></div>
          <div className={shadowClass3} data-element="shadow_3"></div>
          <div className={styles.contentWrapper}>
            <section className={styles.sectionTwo}>
                <div className={`${belizarius.className}`} data-element="section_title">
                  You are <span className={styles.storyText}> the story</span>
                </div>
                <div className={`${lato.className}`}>
                    <div data-element="storyParagraph">
                      Welcome to the world of the plague poppets, from the mind of juli adams. Plague poppets came to life in the physical world during the pandemic, and are crossing over into the world of web3 as collectible friends, each with their own set of wearables. 
                    </div>
                    <div data-element="storyParagraph">
                      The poppetverse is about storytelling and community. Every poppeteer is part of something bigger - building and exploring a new world together - making you and your poppet the hero. 
                    </div>
                    <div data-element="storyParagraph">
                    Join in the fun and adopt a small and mighty friend, listen in on the poppet podcast, enjoy an ongoing comics series starring famous (and infamous!) Poppets, and bring your poppet to lifein the poppetverse!
                    </div>
                  </div>
                <div className={`${lato.className}`} data-element="storyParagraph">
                  Become a part of the plague poppets world. Community is the heart of the poppetverse. You are the key to unlocking and sharing poppets with the world. By engaging and sharing poppeto with the world, we will pull you into the poppetverse as your legend grows..
                </div>
                <div className={styles.chasePoppetMobile}>
                <figure>
                  <Image src={imagesList[selecImage]} alt={'Poppet Box Image'}/>
                </figure>
                </div>
                <ul className={`${lato.className}`} data-element="listItems">
                <li>
                    Our poppet in comics, complete with a persona you build
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                <li>
                    Your poppet in podcast as a guest
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                <li>
                  Your poppet in digital stop motion series
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                <li>
                  Your poppet in graphic novels
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                </ul>
            </section>


            {/* Section Three */}
            
          <section className={styles.sectionThree}>
              <div className={`${belizarius.className}`} data-element="section_title">
                You are <span className={styles.storyText}> the story</span>
              </div>
              <div className={styles.chasePoppet}>
                <figure>
                  <Image src={imagesList[selecImage]} alt={'Poppet Box Image'}/>
                </figure>
              </div>
              <div className={`${lato.className}`}>
                    <div data-element="storyParagraph">
                      Welcome to the world of the plague poppets, from the mind of juli adams. Plague poppets came to life in the physical world during the pandemic, and are crossing over into the world of web3 as collectible friends, each with their own set of wearables. 
                    </div>
                    <div data-element="storyParagraph">
                      The poppetverse is about storytelling and community. Every poppeteer is part of something bigger - building and exploring a new world together - making you and your poppet the hero. 
                    </div>
                    <div data-element="storyParagraph">
                    Join in the fun and adopt a small and mighty friend, listen in on the poppet podcast, enjoy an ongoing comics series starring famous (and infamous!) Poppets, and bring your poppet to lifein the poppetverse!
                    </div>
              </div>
              <div className={`${lato.className}`} data-element="storyParagraph">
                Become a part of the plague poppets world. Community is the heart of the poppetverse. You are the key to unlocking and sharing poppets with the world. By engaging and sharing poppeto with the world, we will pull you into the poppetverse as your legend grows..
              </div>
              <ul className={`${lato.className}`} data-element="listItems">
                <AttentionSeeker triggerOnce={false} effect='shakeY'>
                <li>
                    Our poppet in comics, complete with a persona you build
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                </AttentionSeeker>
                <AttentionSeeker triggerOnce={false} effect='shakeY'>
                <li>
                    Your poppet in podcast as a guest
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                </AttentionSeeker>
                <AttentionSeeker triggerOnce={false} effect='shakeY'>
                <li>
                  Your poppet in digital stop motion series
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                </AttentionSeeker>
                <AttentionSeeker triggerOnce={false} effect='shakeY'>
                <li>
                  Your poppet in graphic novels
                    <img src='test' placeholder='test' alt='test1' />
                    <img src='test' placeholder='test' alt='test2' />
                </li>
                </AttentionSeeker>
              </ul>
          </section>
          </div>
          </div>

        </>
  ) }

  export default AboutPlaguePoppets;