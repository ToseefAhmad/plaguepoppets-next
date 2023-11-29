"use client"
import React from "react";

import Image, { StaticImageData } from 'next/image'
import { SocialIcon } from "react-social-icons";

interface ITeamMemberBio {
    name: string;
    sub_heading: string;
    description: string[];
    img: string | StaticImageData;
    socials?: string[];

}

export const TeamMemberBio = ({ name, sub_heading, description, img, socials }: ITeamMemberBio) => {
    return (
        <div className="w-[100%] flex flex-col xl:flex-row lg:flex-row justify-center items-center gap-[2vh] p-[2vh] px-10">
            <div className="w-[60%]">
                <Image src={img} alt="artist" width={620} height={740} />
            </div>
            <div className="bg-RectanglePP bg-cover bg-no-repeat w-full bg-center p-[15px]">
                <div className="border-2 border-black p-[5px]">
                    <div className="border border-black p-[10px] ">
                        <h3 className={`w-full italic font-normal flex justify-between leading-none mb-3`}>
                            {name} <span className="float-right">{socials?.map((url) =>
                            (
                                <SocialIcon
                                    key={`socials_${name}_${url}`}
                                    url={url}
                                    target="_blank"
                                    className="text-zinc-700 hover:text-amber-800"
                                    bgColor="currentColor"
                                    fgColor="transparent"
                                    style={{ height: '1.5rem', width: '1.5rem', marginRight: '0.5rem' }} />
                            )
                            )}</span>
                        </h3>
                        <span className={`leading-none font-normal mb-3`}>
                            <h6 className={'mb-1 '}>{sub_heading}</h6>
                            {description.map((d, i) => (
                                <p key={`teamdesc_${name}_p${i}`} className={'text-sm leading-none mb-2'}>{d}</p>
                            ))}


                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberBio