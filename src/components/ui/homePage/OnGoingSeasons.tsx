"use client"
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import PoppetEvent1 from "../../../assets/newGifs/onGoing_anim1.gif";
import PoppetEvent2 from "../../../assets/newGifs/onGoing_anim2.gif";
import PoppetEvent3 from "../../../assets/newGifs/onGoing_anim3.gif";

import localFont from 'next/font/local';
const belizarius = localFont({src: '../../../assets/fonts/Belizarius.woff'});
const orbitronBold = localFont({src: '../../../assets/fonts/orbitron/Orbitron-Bold.ttf'});
const orbitronMedium = localFont({src: '../../../assets/fonts/orbitron/Orbitron-Medium.ttf'})
const lato = localFont({src: '../../../assets/fonts/lato/Lato-Regular.ttf'})

import styles from "./OnGoingSeasons.module.css";

const OnGoingSeasons = () => {
    const [expId, setExpId] = useState('section0');
    const handleExpId = (id: string) => {
        if(id === expId) {
            setExpId('section0')
        }
        else {
            setExpId(id)
        }
    };

    return (
        <>
        <section className={styles.OnGoingSeasonsWrapper}>
            <div className={styles.shadows} data-element="shadow_21"></div>
            <div className={styles.shadows} data-element="shadow_22"></div>
            <div className={styles.shadows} data-element="shadow_23"></div>
            <div className={`${belizarius.className} ${styles.contentWrapper}`}>
                <div className={`${belizarius.className}`} data-element="section_title">
                    Ongoing <span>Seasons</span>
                </div>
                <section className={styles.events}>
                    {/* Event One */}
                    <Fade triggerOnce={false} direction="right">
                    <div className={styles.eventOne}>
                      <figure className={styles.eventOneLeftSection}>
                        <Image src={PoppetEvent1} alt={'event one poppet'}/>
                      </figure>
                        <button className={styles.eventOneLeftSectionArrow} onClick={() => handleExpId('section1')}>Click Me!</button>
                        <div className={styles.eventOneRightSection}>
                            <div className={`${orbitronBold.className}`} data-element="eventOneRightTitle">CELESTIAL AWAKENINGS</div>
                            <div className={`${orbitronMedium.className}`} data-element="eventOneRightPara">Aug {">"} Nov. 1</div>
                        </div>
                        <div className={styles.tabViewSectionRight} data-element={expId === 'section1' ? 'section1' : ''}>
                                <div className={styles.tabcontainerWrapperRight}>
                                <div className={styles.tabContainerRight}>
                                    <div className={`${lato.className}`} data-element="tabTitleRight">
                                        <span>Some Title</span>
                                    </div>
                                    <div className={`${lato.className}`} data-element="tabDescripitionRight">
                                        <span>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ea ducimus eius? Minima explicabo nesciunt sapiente reiciendis et? Dolorem possimus ducimus, ab minus corporis dignissimos itaque rem odio quam exercitationem commodi, expedita, animi inventore! Mollitia dicta libero quaerat recusandae excepturi ipsam, odio provident! Fugiat modi, nihil odit dignissimos vero nesciunt.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    {/* Event Two */}
                    <Fade triggerOnce={false} direction="left">
                    <div className={styles.eventOne}>
                        <div className={styles.eventOneRightSection}>
                            <div className={`${orbitronBold.className}`} data-element="eventOneRightTitle">WINTERTIDE</div>
                            <div className={`${orbitronMedium.className}`} data-element="eventOneRightPara">Nov. 1 {">"} Feb. 1</div>
                        </div>
                        <figure className={styles.eventOneLeftSection} >
                          <Image src={PoppetEvent2} alt={'event one poppet'}/>
                        </figure>
                        <button className={styles.eventOneRightSectionArrow} onClick={() => handleExpId('section2')} data-element={expId === 'section2' ? 'eventOneLeftSectionArrowUp': 'eventOneLeftSectionArrowDown'}>Click Me!</button>
                        <div className={styles.tabViewSectionLeft} data-element={expId === 'section2' ? 'section1' : ''}>
                                <div className={styles.tabcontainerWrapperLeft}>
                                <div className={styles.tabContainerRight}>
                                    <div className={`${lato.className}`} data-element="tabTitleLeft">
                                        <span>Some Title</span>
                                    </div>
                                    <div className={`${lato.className}`} data-element="tabDescripitionLeft">
                                        <span>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ea ducimus eius? Minima explicabo nesciunt sapiente reiciendis et? Dolorem possimus ducimus, ab minus corporis dignissimos itaque rem odio quam exercitationem commodi, expedita, animi inventore! Mollitia dicta libero quaerat recusandae excepturi ipsam, odio provident! Fugiat modi, nihil odit dignissimos vero nesciunt.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    {/* Event Three */}
                    <Fade triggerOnce={false} direction="right">
                    <div className={styles.eventOne}>
                      <figure className={styles.eventOneLeftSection}>
                        <Image src={PoppetEvent3} alt={'event one poppet'}/>
                      </figure>
                         <button className={styles.eventOneLeftSectionArrow} onClick={() => handleExpId('section3')} data-element={expId === 'section3' ? 'eventOneLeftSectionArrowUp': 'eventOneLeftSectionArrowDown'}>Click Me!</button>

                        <div className={styles.eventOneRightSection}>
                            <div className={styles.eventOneRightSection}>
                                <div className={`${orbitronBold.className}`} data-element="eventOneRightTitle">EMERGENCE</div>
                                <div className={`${orbitronMedium.className}`} data-element="eventOneRightPara">Feb. 1 {">"} May. 1</div>
                            </div>
                        </div>
                             <div className={styles.tabViewSectionRight} data-element={expId === 'section3' ? 'section1' : ''}>
                                <div className={styles.tabcontainerWrapperRight}>
                                <div className={styles.tabContainerRight}>
                                    <div className={`${lato.className}`} data-element="tabTitleRight">
                                        <span>Some Title</span>
                                    </div>
                                    <div className={`${lato.className}`} data-element="tabDescripitionRight">
                                        <span>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ea ducimus eius? Minima explicabo nesciunt sapiente reiciendis et? Dolorem possimus ducimus, ab minus corporis dignissimos itaque rem odio quam exercitationem commodi, expedita, animi inventore! Mollitia dicta libero quaerat recusandae excepturi ipsam, odio provident! Fugiat modi, nihil odit dignissimos vero nesciunt.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </section>
            </div>
        </section>
        </>
    )
}

export default OnGoingSeasons;