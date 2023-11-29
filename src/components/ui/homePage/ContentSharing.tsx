import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ContentSharing.module.css";
import { AttentionSeeker } from "react-awesome-reveal";


import localFont from 'next/font/local';
import ContentSharingPoppert1 from "../../../assets/img/contentSharing1.png";
import ContentSharingPoppert2 from "../../../assets/img/contentSharing2.png";
import ContentSharingPoppert3 from "../../../assets/img/contentSharing3.png";
import ContentSharingPoppert4 from "../../../assets/img/contentSharing4.png";
import ContentSharingPoppert5 from "../../../assets/img/contentSharing5.png";
import ContentSharingPoppert6 from "../../../assets/img/contentSharing6.png";

const belizarius = localFont({src: '../../../assets/fonts/Belizarius.woff'})
const lato = localFont({src: '../../../assets/fonts/lato/Lato-Regular.ttf'})

const ContentSharing = () => {

    const links = [{
        text:'Giphy',
        url:'/'
    },
    {
        text:'Podcast Sharing',
        url:'/'
    },
    {
        text:'Comic Room',
        url:'/'
    },
    {
        text:'Behind The Scenes',
        url:'/'
    },
    {
        text:'Poppet Home',
        url:'/'
    }

];

const images = [
    ContentSharingPoppert1,
    ContentSharingPoppert2,
    ContentSharingPoppert3, 
    ContentSharingPoppert4, 
    ContentSharingPoppert5, 
    ContentSharingPoppert6,
];

    return (
        <section className={styles.contentSharingWrapper}>
            <div  className={styles.shadows} data-element="shadow_31"></div>
            <div className={styles.shadows} data-element="shadow_32"></div>
            <div className={styles.content}>
            <div className={`${belizarius.className}`} data-element="contentSharingTitle">
                Content <span>Sharing </span>
            </div>
            <section className={styles.contentSharingLinksWrapper}>
                <ul className={styles.contentSharingLinks}>
                    {links.map((link, index)=>{
                        const {text, url } = link;
                        return (
                            <AttentionSeeker effect="rubberBand" key={index}>
                            <li className={`${lato.className}`} data-element="link" key={index}>
                                <Link href={url}>{text}</Link>
                            </li>
                            </AttentionSeeker>
                        )
                    })}
                </ul>
            </section>
            <section className={styles.imagesContainer}>
                {images.map((image,index)=>{
                    return (
                        <figure className={styles.imageWrapper} key={index}>
                            <AttentionSeeker triggerOnce={false} effect="jello">
                                <Image className={styles.image} src={image} alt={"image"}></Image>
                            </AttentionSeeker>
                        </figure>
                    )
                })}
            </section>
            </div>
        </section>
    ) 
}

export default ContentSharing;