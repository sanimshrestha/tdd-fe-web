import Footer from "@/components/Footer"
import Nav from "@/components/Nav"

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