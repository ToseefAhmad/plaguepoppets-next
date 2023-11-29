'use client'

import styles from './DecorativeButton.module.css'

import * as React from 'react'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

interface IDecorativeButton {
  _onClick?: (params: any) => any | undefined;
  tailwindClasses?: string;
}

export const DecorativeButton = ({ _onClick = () => { }, tailwindClasses = "w-100", children }: React.PropsWithChildren<IDecorativeButton>) => {
  return (
    <div className={`${styles.decorative} grid justify-items-center ${tailwindClasses} ml-3`}>
      <button className={`${playfair.className} rounded-md outline outline-2 bg-transparent font-lg text-amber-50 hover:bg-amber-300/20 outline-amber-50 w-3/4 md:w-[100%] lg:w-3/4 py-3  ring-white`} onClick={_onClick}>{children}</button>
    </div>
  )
}