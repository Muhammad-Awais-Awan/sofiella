"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Star } from "lucide-react"
import dynamic from "next/dynamic"

const reviews = [
  {
    name: "Emma Thompson",
    review:
      "Sofiélla's Luxury Glow Facial transformed my skin! The futuristic technology and personalized approach left me feeling rejuvenated and radiant.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    review:
      "The Celestial Makeup Experience was out of this world! The holographic effects and precision application made me feel like a star.",
    rating: 5,
  },
  {
    name: "Sophia Rodriguez",
    review:
      "I'm in love with my Ethereal Hair Styling! The team at Sofiélla truly understands how to bring out the best in your natural beauty.",
    rating: 4,
  },
  {
    name: "Liam O'Connor",
    review:
      "The Holographic Nail Art is simply mesmerizing. I've never received so many compliments on my nails before!",
    rating: 5,
  },
]

const ReviewCard = ({ name, review, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <p className="text-deep-purple mb-4">{review}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-soft-lilac">{name}</span>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-neon-blue fill-current" />
          ))}
        </div>
      </div>
    </div>
  )
}

const Reviews = () => {
  return (
    <section className="py-32 bg-champagne">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-deep-purple mb-12 text-center">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Reviews), { ssr: false })

