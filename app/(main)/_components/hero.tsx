'use client'

import { IconDroplet, IconLeaf, IconToolsKitchen2 } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
return (
  <section className="relative py-28">
    <Image 
      alt="hero-background"
      src="/assets/dark-wooden-background-with-flour-dust-e1627971410843.jpeg"
      className="absolute inset-0"
      fill
    />
    <div  className="absolute w-full h-full bg-black/90 inset-0"/>
    <div className="flex items-center min-h-screen relative container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <Image 
            alt="hero-background"
            src="/assets/N2HMMGN-2.png"
            className="object-contain w-auto h-full max-h-160 mt-20 md:mt-0"
            width={0}
            height={0}
            sizes="100svw"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-6xl font-bold uppercase">
                Enjoy Burgers Make Your Tummy Happy
              </h1>
              <div className="h-1 bg-red-600 w-full max-w-1/3" />
            </div>
            <p>
              Bringing soul food that heals to every corner of Zimbabwe. From corporate gatherings to outdoor adventures, we deliver exceptional culinary experiences. Mobile catering excellence for your special moments.
            </p>
            <div className="flex items-center justify-between max-w-md font-semibold tracking-wide">
              <div className="flex flex-col items-center gap-4">
                <IconToolsKitchen2 strokeWidth={1.2} className="size-10 text-red-600" />
                <span>
                  Delicious
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IconDroplet strokeWidth={1.2} className="size-10 text-red-600" />
                <span>
                  Fresh
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IconLeaf strokeWidth={1.2} className="size-10 text-red-600" />
                <span>
                  Organic
                </span>
              </div>
            </div>
              <Link href="#" className="bg-green-500 px-4 py-2  rounded">  
                View Menu
              </Link>      

          </div>
        </div>
      </div>
    </div>
  </section>
)
}