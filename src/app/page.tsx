import { constants } from '@/app/lib/constants'
import Image from 'next/image'
import SignUpNewsletter from './ui/SignUpNewsletter'
import DrinkMaker from './ui/DrinkMaker/DrinkMaker'
import { drinks } from './lib/mockdata'

export default function Home() {
  const drink = drinks[2]
  return (
    <main className="relative flex min-h-screen flex-col items-center 
                    justify-between pb-8 px-12 md:p-16
                    xl:pt-4 bg-primary
                    ">
      <Image
        src="/Logotype.svg"
        alt={constants.productTitle}
        width={250}
        height={96}
        className='z-10 scale-75 -mt-8 lg:mt-0 sm:-mt-16 
        sm:w-72 md:w-80 lg:w-96'
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
