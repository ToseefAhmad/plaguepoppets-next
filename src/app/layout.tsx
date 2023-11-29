import './globals.css'

import Script from 'next/script'


import { ClientProviders } from '@/lib/clientProviders'

export const metadata = {
  title: 'Plague Poppets',
  description: 'The Plague Poppets, A Small And Mighty Friend. Created by Julie Adams.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    
    <html lang="en">
      <body>
        <ClientProviders>
            {children}
        </ClientProviders>
        <div className="container">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
    </div>
      </body>
    </html>
    
  )
}
