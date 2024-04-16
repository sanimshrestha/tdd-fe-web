import type { Metadata } from 'next'
import "@/styles/globals.css"

import { Lexend } from 'next/font/google'
import { cn } from "@/lib/utils"
import Script from 'next/script'
import { constants } from '@/lib/constants'
import StoreProvider from './StoreProvider'
import { Toaster } from '@ui/toaster'

export const fontSans = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: constants.productTitle,
  description: constants.productDescription
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={cn(
        "h-full font-sans",
        fontSans.variable
      )}
      suppressHydrationWarning>
      {/* Clarity Script */}
      <Script strategy="lazyOnload" id="clarity-script">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "kj9efzwzc3");
        `}
      </Script>
      <body
        className="min-h-screen bg-background antialiased flex flex-col"
        suppressHydrationWarning>
        <StoreProvider>
          <div className='min-h-screen flex flex-col justify-between'>
            {children}
          </div>
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  )
}
