"use client"
import dynamic from "next/dynamic"

const BrandBanner = () => {
  return (
    <section className="w-full py-24 bg-deep-purple overflow-hidden">
      <div className="container mx-auto">
        <p className="text-rose-gold/80 text-sm md:text-base lg:text-lg tracking-widest uppercase text-center mb-4">
          Elevating Beauty Through Innovation and Luxury
        </p>
        <div className="relative">
          <h2 className="text-[15vw] md:text-[20vw] font-playfair text-champagne leading-none text-center mx-auto tracking-tight">
            SOFIÉLLA
          </h2>
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(BrandBanner), { ssr: false })

