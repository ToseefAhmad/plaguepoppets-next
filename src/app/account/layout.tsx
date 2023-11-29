import '@/app/globals.css'

import menuItems from '@/data/navMenuItems' 
import { Transition } from '@/components/static/Transition'
import { PoppetsNav } from '@/components/ui/PoppetsNav'

import { Literata } from 'next/font/google'
const literata = Literata({subsets: ['latin']})

export const metadata = {
  title: 'Plague Poppets',
  description: 'The Plague Poppets, A Small And Mighty Friend. Created by Julie Adams.',
}

export default function NavLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PoppetsNav menuItems={menuItems} />
      {children}
    </>
  )
}
