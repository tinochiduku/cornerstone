import type { Metadata } from 'next';
import Header from './_components/header';
import Footer from './_components/footer';
import Breadcrumb from './_components/breadcrumb';
import { clash_grotesk } from '../fonts';

export const metadata: Metadata = {
  title: 'Corner Stone Burger Booth - Street Food Real Flavor',
  description: 'Soul food that heals the soul. Mobile culinary service bringing exceptional flavors to your events across Zimbabwe.'
};

export default async function EntertainmentLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
        <div className={`bg-black text-white overflow-y-scroll h-screen space-y-5 ${clash_grotesk.className}`}>
          <Header />
          <Breadcrumb />
          {children}
          <Footer />
        </div>
  );
}
