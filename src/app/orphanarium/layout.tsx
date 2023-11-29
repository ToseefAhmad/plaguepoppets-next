import '@/app/globals.css'

import menuItems from '@/data/navMenuItems' 
import { PoppetsNav } from '@/components/ui/PoppetsNav'

import { OrphanariumProvider } from '@/lib/orphanariumProvider'

import { Literata } from 'next/font/google'
import Footer from '@/components/static/Footer'

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
      <PoppetsNav menuItems={menuItems} titleClick="/" />
      <OrphanariumProvider>
        {children}
      </OrphanariumProvider>
      <Footer />
    </>
  )
}
