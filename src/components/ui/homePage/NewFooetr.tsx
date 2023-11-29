import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NewFooter.module.css";
import { SocialIcon } from "react-social-icons";
import localFont from 'next/font/local';

const lato = localFont({src: '../../../assets/fonts/lato/Lato-Regular.ttf'})
const orbitron = localFont({src: '../../../assets/fonts/orbitron/Orbitron-SemiBold.ttf'});
const socials = [
    "https://twitter.com/PlaguePoppets",
    "https://instagram.com/PlaguePoppets",
    "https://discord.gg/plague-poppets",
    "https://open.spotify.com/show/7JH1s7Bkn42TFZaGCyTIE2?si=00c664496f3149a0",
    "mailto:info@plaguepoppets.io",
  ];

import Logo from "../../../assets/img/logo.png";



const NewFooter = () => {

    return (
        <section className={styles.footerWrapper}>
        <footer className={`${lato.className}`} data-element="footer">
            <section className={styles.topSection}>
                <div className={styles.leftSection}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="logo"></Image>
                </div>
                <div className={styles.desc}>
                    <div className={styles.content}>
                        {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ea ducimus eius? Minima explicabo nesciunt sapiente reiciendis et? Dolorem possimus ducimus, ab minus corporis dignissimos itaque rem odio quam exercitationem commodi, expedita, animi inventore! Mollitia dicta libero quaerat recusandae excepturi ipsam, odio provident! Fugiat modi, nihil odit dignissimos vero nesciunt.</span>
                        <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span> */}
                        <ul className={styles.links}>
                            <li><Link href="/faq">About Plague Poppets</Link></li>
                            <li><Link href="/terms-and-conditions">Terms of Agreement</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className={`${orbitron.className}`} data-element="rightSection">
                    <div className={styles.list}>
                        <p>Company</p>
                        <ul>
                            <li className={`${lato.className}`} data-element="link"><Link href="/">Title Area</Link></li>
                            <li className={`${lato.className}`} data-element="link"><Link href="/">Title Area</Link></li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <p>Resources</p>
                        <ul>
                            <li className={`${lato.className}`} data-element="link"><Link href="/">Title Area</Link></li>
                            <li className={`${lato.className}`} data-element="link"><Link href="/">Title Area</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr className={styles.hr}></hr>
            <section className={styles.bottomSection}>
                <div className={styles.copyRights}>
                    <span>Copyright &#169; 2023 . All Rights Reserved</span>
                </div>
                <div className={styles.socialIcons}>
                    {socials.map((s, index)=>{
                        return (
                            <figure key={index}>
                                <SocialIcon
                                    target={"_blank"}
                                    key={`socials_${s}`}
                                    url={s}
                                    bgColor="currentColor"
                                    fgColor="#000"
                                    style={{ height: "3rem", width: "3rem" }}
                                    className="text-amber-50 rounded-full hover:ring-2 hover:ring-amber-50 hover:text-amber-400 keychainify-checked"
                                />
                            </figure>
                        )
                    })}
                </div>
            </section>
        </footer>
        </section>
    )
}

export default NewFooter;