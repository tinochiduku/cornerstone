"use client"
import Link from "next/link";
import Hero from "./_components/hero";
import Image from "next/image";
import { IconCircleCheck } from "@tabler/icons-react";
import { useState } from "react";
import { categories, menuItems } from "./data";
import { motion } from "framer-motion";

interface Promo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  type: 'food' | 'beverage';
  img: string;
}

export default function Page() {
  const [active, setActive] = useState('Main Meals')

  const featured = [
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Featured Section */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-20 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featured.map(({title, desc, img, bg}, index) => (
          <motion.div 
            key={title} 
            className={`${bg} flex-1 flex items-center overflow-hidden rounded-xl h-40 cursor-pointer`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-2/5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Image 
                alt={title}
                src={img}
                className="relative object-contain w-full h-auto max-h-160"
                width={0}
                height={0}
                sizes="100svw"
              />
            </motion.div>
            <div className="w-3/5 space-y-2">
              <h3 className="uppercase text-4xl font-bold tracking-wider">{title}</h3>
              <p className="text-sm">{desc}</p>
              <Link href="https://wa.me/263774316753" className="">Buy Online</Link>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Promos Section */}
      <motion.section 
        className="container mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {promos.map(({id, title, description, cta, subtitle, type, img}, index) => (
          <motion.div 
            key={id} 
            className="flex items-center bg-white/10 w-full h-full overflow-hidden rounded-xl p-4 gap-8"
            variants={scaleVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="w-3/5 space-y-4">
              <motion.h3 
                className="capitalize text-sm font-bold tracking-wider text-green-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h3>
              <motion.h3 
                className="uppercase text-3xl font-bold tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {subtitle}
              </motion.h3>
              <motion.p 
                className="text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {description}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://wa.me/263774316753" className="text-red-500 text-sm">{cta}</Link>
              </motion.div>
            </div>
            <motion.div 
              className="w-2/5"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                alt={title}
                src={img}
                className="relative object-contain w-full h-auto max-h-160"
                width={0}
                height={0}
                sizes="100svw"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.section>

      {/* About Section */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 xl:flex items-center p-4 gap-8 container mx-auto px-4 py-20">
        <motion.div 
          className="xl:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            alt="about-image"
            src="/about.jpeg"
            className="relative object-contain w-full h-auto max-h-160 rounded-2xl"
            width={0}
            height={0}
            sizes="100svw"
          />
        </motion.div>
        <motion.div 
          className="xl:w-3/5 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-4xl font-bold uppercase">
              Find Your Best Tasted Food & Drink Just in One Place
            </h3>
            <div className="h-1 bg-red-600 w-full max-w-1/3" />
          </motion.div>
          <motion.p variants={itemVariants}>
            Experience the finest mobile culinary service in Zimbabwe. From savory main meals to delightful pastries and refreshing beverages, Cornerstone brings soul food that heals directly to your event, wherever you are.
          </motion.p>
          <motion.ul 
            className="text-sm grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {[
              "Best Price - Affordable quality meals for every budget",
              "Fresh Ingredient - Locally sourced, premium ingredients daily",
              "Best Service - Professional catering with a personal touch",
              "Health Protocol - Strict hygiene and safety standards maintained"
            ].map((text, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <IconCircleCheck className="size-5 text-green-500" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://wa.me/263774316753" className="bg-green-500 px-4 py-2 rounded text-sm inline-block">
                Talk to Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="flex flex-col items-center container mx-auto px-4 space-y-10 py-20">
        <motion.div 
          className="flex flex-col items-center space-y-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-4xl font-bold uppercase">
              Our best menu
            </h3>
            <motion.div 
              className="h-1 bg-red-600 w-full max-w-1/3"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <p className="max-w-lg text-center">
            Discover our signature dishes crafted with passion and soul. From hearty main meals to delectable pastries and refreshing beverages.
          </p>
        </motion.div>
        
        <motion.div 
          className="inline-block space-x-4 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button 
              onClick={() => setActive(category)} 
              key={category} 
              className={`${active === category ? 'bg-red-500' : 'bg-green-500'} px-4 py-2 rounded text-sm cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10"
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {menuItems
            .filter(item => item.category === active)
            .map(({ id, name, category, price, description, isVegetarian, img }) => (
              <motion.div 
                className="flex flex-col space-y-5" 
                key={id}
                variants={scaleVariants}
                layout
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-center justify-around bg-white/10 w-full h-full aspect-square overflow-hidden rounded-2xl"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image 
                      alt={name}
                      src={img}
                      className="relative aspect-square object-contain w-full h-full rounded-full scale-70"
                      width={0}
                      height={0}
                      sizes="100svw"
                    />
                  </motion.div>
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold uppercase">
                    {name}
                  </h3>
                  <p className="text-sm">
                    {description}
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://wa.me/263774316753" className="font-bold text-lg rounded text-red-500">
                      ${price.toFixed(2)}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <Image 
            alt="call-to-action-background"
            src="/cta-bg.jpeg"
            className="w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <motion.div 
          className="relative z-10 container mx-auto px-4 text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold uppercase"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Experience Soul Food?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let us bring exceptional culinary experiences to your next event. Contact us today to discuss your catering needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://wa.me/263774316753" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-4xl font-bold uppercase">Get In Touch</h2>
              <motion.div 
                className="h-1 bg-red-600 w-32 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <p className="text-lg">
                Have questions or ready to book? Send us a message and we'll get back to you soon.
              </p>
            </div>

            <motion.form 
              className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  placeholder="Your phone number"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  placeholder="Your email address"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all resize-none"
                  placeholder="Write us something"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}