'use client'

import React from 'react'
import { ReactComponent as PoppetIcon } from '@/assets/svg/Poppet.svg'
import { ReactComponent as PlaguePoppetsText } from '@/assets/svg/PlaguePoppetsText.svg'
import { useRouter } from 'next/navigation'

import { Menu, IMenuItem } from './Menu'

interface INav {
  theme?: 'dark' | 'light'
  titleClick?: string | undefined
  menuItems: IMenuItem[]
}

const modes = {
  'dark': 'text-zinc-800',
  'light': 'text-zinc-50',
}

export const PoppetsNav = ({ theme="light", titleClick="/orphanarium", menuItems }: INav) => {
  const router = useRouter()
  return(
  <header className="absolute top-0 left-0 w-full z-999 flex flex-row justify-between align-center p-[20px]">
    <nav className="flex grow pl-[22px] xl:pl-[52px] lg:pl-[52px]">
      <PoppetIcon className={`${modes[theme]} cursor-pointer w-[9vw] xl:w-[4vw] lg:w-[4wv] md:w-[4vw]`} onClick={()=>{router.push(titleClick)}} />
      <PlaguePoppetsText className={`${modes[theme]} cursor-pointer w-[37vw] xl:w-[17vw] lg:w-[17wv] md:w-[17vw]`} onClick={()=>{router.push(titleClick)}} />
    </nav>
    <div className="flex items-center">
      <Menu  theme={theme} menuItems={menuItems} />
    </div>
  </header>
)};
