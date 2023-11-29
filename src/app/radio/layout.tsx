import '@/app/globals.css'

import menuItems from '@/data/navMenuItems' 

import { PoppetsNav } from '@/components/ui/PoppetsNav'

import Footer from '@/components/static/Footer'


export default function NavLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PoppetsNav menuItems={menuItems} titleClick="/" />
      {children}
      <Footer />
    </>
  )
}
