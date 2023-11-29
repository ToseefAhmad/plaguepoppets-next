import '@/app/globals.css'

import { CutsceneProvider } from '@/lib/cutSceneProvider'

import { Literata } from 'next/font/google'
const literata = Literata({subsets: ['latin']})

export const metadata = {
  title: 'Plague Poppets',
  description: 'The Plague Poppets, A Small And Mighty Friend. Created by Julie Adams.',
}

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CutsceneProvider>
    <main>
        {children}
    </main>
    </CutsceneProvider>
  )
}
