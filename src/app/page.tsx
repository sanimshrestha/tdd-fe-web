import { constants } from '@/utils/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 
                      p-24 bg-black">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          alt={constants.productTitle}
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold">The Drinks Diary</h1>
        <p className="text-xl">For cocktails and other drinks</p>
      </div>
    </main>
  )
}
