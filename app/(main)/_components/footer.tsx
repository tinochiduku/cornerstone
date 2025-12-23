'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6'
import { _nav } from './header'

function Footer() {
  return (
    <footer className="section relative z-10 py-10">
      <div className="border-t container mx-auto pt-10 px-4 space-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/5">
            <div className="space-y-5 w-full">
              <h4 className="text-sm">Subscribe to our newsletter for menu updates</h4>
              <div className="relative flex items-center">
                <input
                  placeholder="Enter your email address"
                  className="w-full text-white py-4 px-4 rounded text-sm bg-green-500/90 backdrop-blur-md"
                />
                <button className="absolute right-1.5 px-4 py-2 bg-white text-black rounded">
                  submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-end lg:justify-end w-full md:w-2/5">
            <div className="space-y-5">
              <h4 className="text-sm">Follow Us On Socials</h4>
              <div className="flex items-center gap-2">
                <Link
                  href="https://wa.me/263774316753"
                  target="_blank"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-2xl hover:bg-opacity-100 hover:scale-90 transition-transform duration-300 ease-in-out bg-red-950/90 backdrop-blur-md text-white"
                >
                  <span>
                    <FaWhatsapp className="size-5 group-hover:text-green-500 group-hover:transition ease-in-out" />
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-2xl hover:bg-opacity-100 hover:scale-90 transition-transform duration-300 ease-in-out bg-red-950/90 backdrop-blur-md text-white"
                >
                  <span>
                    <FaFacebookF className="size-5 group-hover:text-green-500 group-hover:transition ease-in-out" />
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-2xl hover:bg-opacity-100 hover:scale-90 transition-transform duration-300 ease-in-out bg-red-950/90 backdrop-blur-md text-white"
                >
                  <span>
                    <FaXTwitter className="size-5 group-hover:text-green-500 group-hover:transition ease-in-out" />
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-2xl hover:bg-opacity-100 hover:scale-90 transition-transform duration-300 ease-in-out bg-red-950/90 backdrop-blur-md text-white"
                >
                  <span>
                    <FaInstagram className="size-5 group-hover:text-green-500 group-hover:transition ease-in-out" />
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-2xl hover:bg-opacity-100 hover:scale-90 transition-transform duration-300 ease-in-out bg-red-950/90 backdrop-blur-md text-white"
                >
                  <span>
                    <FaLinkedinIn className="size-5 group-hover:text-green-500 group-hover:transition ease-in-out" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-4">
          <div className='space-y-10'>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold tracking-wider">
                About Cornerstone
              </h3>
              <div className="h-0.5 w-1/3 bg-red-950/90" />
            </div>
            <p className="text-sm leading-relaxed">
              Soul food that heals the soul. Mobile culinary service bringing exceptional flavors to your events across Zimbabwe.
            </p>
          </div>
          <div className='space-y-10'>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold tracking-wider">
                Our Services
              </h3>
              <div className="h-0.5 w-1/3 bg-red-950/90" />
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 group">
                <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                <span>Outdoor Events</span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                <span>Corporate Events</span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                <span>Educational Trips</span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                <span>Sporting Events</span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                <span>Church Camps</span>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                <span>Private Chef Services</span>
              </li>
            </ul>
          </div>
          <div className='space-y-10'>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold tracking-wider">
                Menu
              </h3>
              <div className="h-0.5 w-1/3 bg-red-950/90" />
            </div>
            <ul className="space-y-3">
              {_nav.map(({title, href}) => 
                <Link key={title} href={href} className="flex items-center gap-2 group cursor-pointer">
                  <span className="bg-red-950/90 w-0 h-0.5 group-hover:w-4 group-hover:transition-all duration-150 ease-in-out" />
                  <span>{title}</span>
                </Link>
              )}
            </ul>
          </div>
          <div className='space-y-10'>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold tracking-wider">
                Contact Info
              </h3>
              <div className="h-0.5 w-1/3 bg-red-950/90" />
            </div>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold mb-1">Location</p>
                <p>90 Five Avenue</p>
                <p>Harare, Zimbabwe</p>
              </li>
              <li>
                <p className="font-semibold mb-1">Contact</p>
                <p>Chef Ronnie: +263 77 431 6753</p>
                <p>Tariro: +263 78 399 5508</p>
              </li>
              <li>
                <p className="font-semibold mb-1">Service Areas</p>
                <p>Mobile Service Nationwide</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-[12px] bg-red-500/10 backdrop-blur-md py-2">
          <div className="flex flex-col sm:flex-row items-center gap-4 px-1.5">
            <Image
              alt="Cornerstone Culinary logo"
              src="/logo/logo.png"
              className="w-auto h-12 object-contain"
              width="0"
              height="0"
              sizes="100svw"
            />
            <div className="flex items-center gap-2 text-xs">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="w-0.5 h-4 bg-white bg-opacity-[0.66]" />
              <Link href="/terms-conditions">Terms and Conditions</Link>
            </div>
          </div>
          <div className="px-4">
            <p className="text-xs">
              Copyright &copy; Cornerstone Culinary Services {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
