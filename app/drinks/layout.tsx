import Footer from "@components/Footer"
import Nav from "@components/Nav"
import { constants } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: constants.productTitle,
  description: constants.productDescription,
  robots: 'noindex, nofollow'
}


export default function DrinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <main className="relative flex h-full flex-col items-center 
    // justify-between pb-8 px-12 md:p-16 md:pt-0
    // pt-2 xl:pt-0 mx-auto w-fit ">
    <>
      <Nav />

      {children}
      <Footer />
    </>

  )
}