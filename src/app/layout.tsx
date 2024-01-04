import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { constants } from './../utils/constants'

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
      <body className={`${lexend.variable} font-sans h-full`}>
        {children}
      </body>
    </html>
  )
}
