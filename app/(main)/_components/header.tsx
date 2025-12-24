'use client'
import { IconChevronDown, IconChevronUp, IconHomeFilled, IconMenu3, IconTruckDelivery, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname()
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
       <div className="fixed top-0 z-50 backdrop-blur-xl dark:border-yellow-800/10 m-0 w-full">
          <div className="flex items-center justify-between w-full gap-4 min-h-20 container mx-auto px-4">
            <div className=''>
                <Image
                    alt="card image"
                    src="/logo/logo.png"
                    className="h-full w-auto max-h-12 lg:max-h-16 object-contain"
                    width={0}
                    height={0}
                    sizes="100svw"
                />
            </div>
            <nav className='hidden flex-1 xl:flex items-center justify-end py-2 text-white'>
                <ul className="flex items-center gap-4">
                  <li>
                    <Link href="/">
                      <IconTruckDelivery strokeWidth={1.2} className="text-red-500 size-10 scale-x-[-1] hover:text-green-500" />
                    </Link>
                  </li>
                    {
                        _nav.map((item, index) => (
                            <li key={index} className="relative">
                                {item.children ? (
                                    <Dropdown 
                                        item={item} 
                                        isOpen={openDropdown === item.title}
                                        onToggle={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                                    />
                                ) : (
                                    <Link 
                                        className={`text-sm text-foreground whitespace-nowrap px-4 p-2 rounded-sm ${item.path === pathname ? ' border-b-4 border-yellow-800/40' : 'hover:bg-green-500/20'}`} 
                                        href={item.href}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <button className="lg:hidden" onClick={toggleMobile}>
              <IconMenu3 className="size-8 text-red-950" />
            </button>
          </div>
        <Mobile />
      </div>
    )
}

function Dropdown({ item, isOpen, onToggle }: { 
    item: typeof _nav[0]; 
    isOpen: boolean; 
    onToggle: () => void 
}) {
    return (
        <div onMouseEnter={onToggle} onMouseLeave={onToggle} className="relative">
            <button
                className={`mx-1 uppercase font-bold flex items-center gap-1 text-xs px-4 p-2 rounded-lg border-yellow-800/40 hover:bg-yellow-900/10`}
            >
                {item.title}
                {/* {isOpen ? (
                    <IconChevronUp className="w-4 h-4" />
                ) : (
                    <IconChevronDown className="w-4 h-4" />
                )} */}
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 min-w-[200px] bg-red-950 backdrop-blur-2xl border rounded-lg shadow-lg z-50 overflow-hidden py-4"
                    >
                        {item.children?.map((child, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={child.href}
                                    className="block px-4 py-2 text-sm hover:bg-yellow-500/40 transition-colors"
                                >
                                    {child.title}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function Mobile() {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null)

    return (
        <section
            id="mobile"
            className="fixed z-50 space-y-10 pb-10 min-h-screen w-full top-[-100vh] bg-background transition-all duration-700 ease-in-out overflow-y-scroll hide-scrollbar"
        >
            <div className="sticky top-0 flex items-center justify-between container mx-auto px-4 py-2 bg-background">
                <div className="relative ">
                    <Image
                        alt="card image"
                        src="/logo/logo.png"
                        className="h-full max-h-12 w-auto object-contain"
                        width={0}
                        height={0}
                        sizes="100svw"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => toggleMobile()} className="flex size-7" size="icon" variant="outline">
                        <IconX className="size-4" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 container mx-auto px-4 py-2">
                <nav className="md:w-1/2 xl:w-2/5">
                    <ul className="space-y-5">
                        {_nav.map((item) => (
                            <li key={item.title}>
                                {item.children ? (
                                    <div className="space-y-2">
                                        <button
                                            variant="ghost"
                                            className="flex items-center justify-between w-full text-2xl text-foreground p-0 hover:bg-transparent"
                                            onClick={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                                        >
                                            {item.title}
                                            {openAccordion === item.title ? (
                                                <IconChevronUp className="w-5 h-5" />
                                            ) : (
                                                <IconChevronDown className="w-5 h-5" />
                                            )}
                                        </button>
                                        
                                        <AnimatePresence>
                                            {openAccordion === item.title && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden pl-4 space-y-3"
                                                >
                                                    {item.children.map((child, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.05 }}
                                                        >
                                                            <Link 
                                                                href={child.href} 
                                                                className="text-lg text-foreground/80 hover:text-foreground"
                                                                onClick={toggleMobile}
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link 
                                        href={item.href} 
                                        className="text-2xl text-foreground block"
                                        onClick={toggleMobile}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export const toggleMobile = () => {
    const navigation = document.getElementById('mobile')
    const active = navigation?.classList.contains('top-[-100vh]')
  
    switch (active) {
        case true:
            navigation?.classList.remove('top-[-100vh]')
            navigation?.classList.add('top-0')
            break
        case false:
            navigation?.classList.remove('top-0')
            navigation?.classList.add('top-[-100vh]')
            break
    }
}

interface Link {
title: string 
href: string 
path: string
children?: Link[]
}

// Navigation Array
export const _nav: Link[] = [
  {
    title: "About",
    href: "#about",
    path: "about"
  },
  {
    title: "Pastry Snacks",
    href: "#menu",
    path: "pastry-snacks"
  },
  {
    title: "Main Meals",
    href: "#menu",
    path: "main-meals"
  },
  {
    title: "Salads",
    href: "#menu",
    path: "salads"
  },
  {
    title: "Dipping Sauces",
    href: "#menu",
    path: "dipping-sauces"
  },
  {
    title: "Contact",
    href: "#contact",
    path: "contact"
  }
];
