import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { constants } from './lib/constants'
import Script from 'next/script'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
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
    <html lang="en" className='h-full'>
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

      <body className={`${lexend.variable} font-sans h-full`}>
        {children}
      </body>
    </html>
  )
}
