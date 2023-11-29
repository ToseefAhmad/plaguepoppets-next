import React from "react";
import styles from "./SeasonalThread.module.css";

import localFont from 'next/font/local';
const lato = localFont({src: '../../../assets/fonts/lato/Lato-Regular.ttf'})
const orbitron = localFont({src: '../../../assets/fonts/orbitron/Orbitron-Regular.ttf'});

const SeasonalThread = () => {
    return  ( 
        <section className={styles.SeasonalThreadWrapper}>
            <div className={`${orbitron.className}`} data-element="SeasonalThreadTitle">
                Seasonal Threads
            </div>
            <p className={`${lato.className}`} data-element="SeasonalThreadParagraph">
                Poppets emerge from their dormancy, finding their way to the surface and into hearts and homes of loving families around the world. Collect the rare celestial poppet wearables during the awakenings season, as once the season is over these stellar pieces are no longer available to mint.
            </p>
        </section>
    )
}

export default SeasonalThread;
