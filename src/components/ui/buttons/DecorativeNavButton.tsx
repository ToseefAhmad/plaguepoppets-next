'use client'

import { useRouter } from 'next/navigation'

import * as React from 'react'
import { DecorativeButton } from './DecorativeButton'

interface IDecorativeNavButton {
  href: string
}

export const DecorativeNavButton = ({href = "/", children}: React.PropsWithChildren<IDecorativeNavButton>) => {
  const router = useRouter()
  return(
    <DecorativeButton _onClick={()=>{router.push(href)}}>{children}</DecorativeButton>
  )
}