import React from "react";
import styles from "./SeasonalThreads.module.css";
import SeasonalThreadImage from "../../../assets/newGifs/seasonalThreds_anim.gif";

import localFont from 'next/font/local';
const orbitron = localFont({src: '../../../assets/fonts/orbitron/Orbitron-Regular.ttf'});
const lato = localFont({src: '../../../assets/fonts/lato/Lato-Regular.ttf'})

import Image from "next/image";


const SeasonalThreads = () => {
    return (
        <section className={styles.seasonalThreadsWrapper}>
            <div className={styles.leftSection}>
                <div className={`${orbitron.className}`} data-element="seasonalThreadsTitle">Seasonal Threads</div>
                <div className={`${lato.className}`} data-element="seasonalThreadsPara">Every three months, poppets make their way out into the world dressed in new threads. Seasonal threads are a recurring event in the poppetverse, and each is unique in theme and offerings.</div>
                <div className={`${lato.className}`} data-element="seasonalThreadsPara">Threads includes new wearables specific to that thread, and once the thread is over are no longer mintable  - remnants of a bygone era. Rumor has it that collecting special, seasonal thread themed wearables will unlock new experiences and content.</div>
            </div>
            <figure className={styles.rightSection}>
                <Image src={SeasonalThreadImage} alt={"seasonal threads image"}/>
            </figure>
        </section>
    )
}

export default SeasonalThreads;
