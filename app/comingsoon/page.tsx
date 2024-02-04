import { drinks } from '@/api/mockdata'
import DrinkMaker from '@/components/DrinkMaker/DrinkMaker'
import SignUpNewsletter from '@/components/SignUpNewsletter'
import { constants } from '@/lib/constants'
import Image from 'next/image'

export default function Home() {
  const drink = drinks[2]
  return (

    <main className="relative flex h-full flex-col items-center 
                      justify-between pb-8 px-12 md:p-16 md:pt-0
                      pt-2 xl:pt-0 mx-auto w-fit ">
      <Image
        src="/Logotype.svg"
        alt={constants.productTitle}
        width={250}
        height={96}
        className='z-10 -mt-8  lg:mt-0
        sm:w-72 md:w-80 lg:w-96 h-40 mb-6'
      />
      <DrinkMaker drink={drink} />
      <div
        className='absolute left-0 bottom-0 w-full h-1/3 z-0
        bg-gradient-fade'
      />
      <SignUpNewsletter />
    </main>
  )
}
