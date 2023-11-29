"use client"

import React from 'react'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'


interface IVideo {
  src: string
  type?: string
}

interface IVideoBackground {
  portraitVideo: IVideo
  landscapeVideo: IVideo
}

export const VideoBackground = ({ portraitVideo, landscapeVideo }: IVideoBackground) => {

  // const videoRef = useRef(null)
  // console.log(videoRef)

  

  const portrait = useMediaQuery("(orientation: portrait)")
  const landscape = useMediaQuery("(orientation: landscape)")

  return( !!portrait || !!landscape) ? 
    portrait ? (

    <video  key={portraitVideo.src} id='myvideo' autoPlay muted loop playsInline className="-z-10 w-screen h-screen object-cover object-left absolute top-0 left-0">
          <source src={portraitVideo.src} type={portraitVideo?.type || 'video/mp4'} media="all and (orientation: portrait)" />
    </video>
    ) : ( 
      <video  key={landscapeVideo.src} id='myvideo' autoPlay muted loop playsInline className="-z-10 w-screen h-screen object-cover object-left absolute top-0 left-0">
          <source src={landscapeVideo.src} type={landscapeVideo?.type || 'video/mp4'} media="all and (orientation: landscape)" />
      </video>
    ) : (
      <></>
    )
}


