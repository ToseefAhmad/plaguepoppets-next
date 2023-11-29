import * as React from 'react'

import { ReactComponent as PlaguePoppetsText } from '@/assets/svg/PlaguePoppetsText.svg'

import localFont from 'next/font/local';
const belizarius = localFont({src: '../../../assets/fonts/Belizarius.woff'})

export const SplashLogo = () => {
  return (
    <>
        <PlaguePoppetsText className="w-[59vw] md:w-[39vw] h-[12vh] md:h-[18vh] max-h-[28vh] md:max-h-[18vh] text-zinc-50 bg-no-repeat bg-bottom bg-contain pr-[1vw]" />
        <div className={`${belizarius.className} text-amber-400 text-[6vw] md:text-[3vw] pl-[1vw] pr-[3vw] mt-[-1vw] text-right w-full`}>
          A SMALL AND MIGHTY FRIEND
        </div>
    </>
  )

}