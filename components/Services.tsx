"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const services = [
  {
    title: "Luxury Glow Facial",
    description:
      "Revitalize your skin with our premium facial treatment using advanced technology and luxurious products.",
    price: "$199",
  },
  {
    title: "Celestial Makeup Experience",
    description: "Redefine elegance with our signature makeup styles, perfect for special occasions or a night out.",
    price: "$149",
  },
  {
    title: "Ethereal Hair Styling",
    description: "Transform your hair with our futuristic styling techniques and premium hair care products.",
    price: "$129",
  },
  {
    title: "Holographic Nail Art",
    description: "Experience the future of nail art with our holographic designs and long-lasting formulas.",
    price: "$79",
  },
]

const ServiceCard = ({ title, description, price }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <div className="h-full">
        <div className="p-6 h-full flex flex-col justify-between">
          <h3 className="text-2xl font-playfair text-deep-purple mb-4">{title}</h3>
          {!isFlipped ? (
            <p className="text-soft-lilac mb-4">{description}</p>
          ) : (
            <div className="transform rotate-180">
              <p className="text-neon-blue text-2xl font-bold mb-2">{price}</p>
              <button className="bg-rose-gold text-deep-purple font-semibold py-2 px-4 rounded-full hover:bg-neon-blue hover:text-white transition-colors duration-300">
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="py-32 bg-champagne">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-deep-purple mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Services), { ssr: false })

