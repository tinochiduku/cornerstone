import Link from "next/link";
import Hero from "./_components/hero";
import Image from "next/image";
import { IconCircleCheck } from "@tabler/icons-react";

export default function Page() {

  const featured  = [
    {
      title: 'Food',
      desc: 'Hearty meals crafted with passion and soul.',
      img: '/featured/food.png',
      bg: 'bg-yellow-600'
    },
    {
      title: 'Snack',
      desc: 'Perfect bites for any time of day.',
      img: '/featured/snack.png',
      bg: 'bg-green-600'
    },
    {
      title: 'Beverage',
      desc: 'Refreshing drinks to complement every meal.',
      img: 'featured/beverage.png',
      bg: 'bg-red-700'
    },

  ]

  interface Promo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  type: 'food' | 'beverage';
  img: string;
}

const promos: Promo[] = [
  {
    id: "promo-001",
    title: "Payday Promo",
    subtitle: "Get a 10% discount on payday week",
    description: "Treat yourself to delicious meals at unbeatable prices. Valid on all menu items during payday week. Order now and enjoy quality food that heals the soul.",
    cta: "Buy Online",
    type: "food",
    img: "/promos/food.png"
  },
  {
    id: "promo-002",
    title: "Payday Promo",
    subtitle: "Buy 1 Coke Get 1 Free",
    description: "Refresh yourself with our special beverage offer. Perfect pairing for any meal. Limited time offer available during payday week only. Quench your thirst today.",
    cta: "Buy Online",
    type: "beverage",
    img: "/promos/beverage.png"
  }
];


  return (
    <main className="min-h-screen">
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-20 container mx-auto px-4">
        {
          featured.map(({title, desc, img, bg}) => (
            <div key={title} className={`${bg} flex-1 flex items-center overflow-hidden rounded-xl h-40`}>
              <div className="w-2/5">
                <Image 
                  alt={title}
                  src={img}
                  className="relative -translate-x-10 translate-y-8 object-contain w-full h-auto max-h-160"
                  width={0}
                  height={0}
                  sizes="100svw"
                />
              </div>
              <div className="w-3/5 space-y-2">
                <h3 className="uppercase text-4xl font-bold tracking-wider">{title}</h3>
                <p className="text-sm">{desc}</p>
                <Link href="https://wa.me/263774316753" className="">Buy Online</Link>
              </div>
            </div>
          ))
        }
      </section>
      <section className="container mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          promos.map(({id, title, description, cta, subtitle, type, img}) => (
            <div key={id} className="flex items-center bg-white/10 w-full h-full overflow-hidden rounded-xl p-4 gap-8">
              <div className="w-3/5 space-y-4">
                <h3 className="capitalize text-sm font-bold tracking-wider text-green-500">{title}</h3>
                <h3 className="uppercase text-3xl font-bold tracking-wider">{subtitle}</h3>
                <p className="text-xs">{description}</p>
                <Link href="https://wa.me/263774316753" className=" text-red-500 text-sm">{cta}</Link>
              </div>
              <div className="w-2/5">
                <Image 
                  alt={title}
                  src={img}
                  className="relative object-contain w-full h-auto max-h-160"
                  width={0}
                  height={0}
                  sizes="100svw"
                />
              </div>
            </div>
          ))
        }
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:flex items-center p-4 gap-8 container mx-auto px-4 py-20">
        <div className="xl:w-2/5">
          <Image 
            alt="about-image"
            src="/about.jpeg"
            className="relative object-contain w-full h-auto max-h-160 rounded-2xl"
            width={0}
            height={0}
            sizes="100svw"
          />
        </div>
        <div className="xl:w-3/5 space-y-4">
        <div className="space-y-8">
            <h3 className="text-4xl font-bold uppercase">
              Find Your Best Tasted Food & Drink Just in One Place
            </h3>
            <div className="h-1 bg-red-600 w-full max-w-1/3" />
          </div>
          <p className="">Experience the finest mobile culinary service in Zimbabwe. From savory main meals to delightful pastries and refreshing beverages, Cornerstone brings soul food that heals directly to your event, wherever you are.</p>
          <ul className="text-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <li className="flex items-center gap-2"><IconCircleCheck className="size-5 text-green-500" /> <span> Best Price - Affordable quality meals for every budget</span></li>
            <li className="flex items-center gap-2"><IconCircleCheck className="size-5 text-green-500" /> <span> Fresh Ingredient - Locally sourced, premium ingredients daily</span></li>
            <li className="flex items-center gap-2"><IconCircleCheck className="size-5 text-green-500" /> <span> Best Service - Professional catering with a personal touch</span></li>
            <li className="flex items-center gap-2"><IconCircleCheck className="size-5 text-green-500" /> <span> Health Protocol - Strict hygiene and safety standards maintained</span></li>
          </ul>
          <div>
            <Link href="https://wa.me/263774316753" className=" bg-green-500 px-4 py-2  rounded text-sm">Talk to Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}