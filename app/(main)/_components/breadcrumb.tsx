'use client'
import { IconCircleChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {

  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => ({
    label: segment.replace(/-/g, ' ').charAt(0).toUpperCase() + segment.replace(/-/g, ' ').slice(1),
    href: '/' + segments.slice(0, index + 1).join('/'),
  }));
  const pageTitle = segments[segments.length - 1]?.replace(/-/g, ' ').charAt(0).toUpperCase() + segments[segments.length - 1]?.replace(/-/g, ' ').slice(1) || '';

  const hide = pathname === '/' || pathname.match(/^\/articles\/[^/]+$/) !== null

  return (
      <section className={`relative h-[600px] ${hide ? 'hidden' : ''}`}>
        <Image
          alt={pageTitle}
          className="absolute object-cover object-top inset-0"
          src="/hero/breadcrumb.jpg"
          fill
          sizes="100svw"
        />
        <div className="absolute w-full h-full inset-0 bg-linear-to-t from-red-800/60 to-transparent" />
        <div className="relative flex items-end w-full h-full inset-0 py-20 container mx-auto px-4 text-white">
            <div className="space-y-5">
                <h1 className={`text-4xl 2xl:text-6xl font-medium capitalize `} >{pageTitle}</h1>
                <nav className="flex-wrap inline-flex items-center gap-2 whitespace-nowrap">
                  {
                    breadcrumbs.map(({label, href}, index) => 
                    <div className="flex-1 flex items-center gap-2" key={label}>
                      <Link className={`font-medium capitalize`}  href={href}>{label}</Link>
                      {
                        index !== breadcrumbs.length - 1 && <IconCircleChevronRight className="size-5" />
                      }
                    </div>
                    )
                  }
                </nav>
            </div>
        </div>
      </section>
  )
}