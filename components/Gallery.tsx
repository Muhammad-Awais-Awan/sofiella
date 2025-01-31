"use client"

import { useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const images = [
  { src: "/placeholder.svg", alt: "Before and After 1" },
  { src: "/placeholder.svg", alt: "Before and After 2" },
  { src: "/placeholder.svg", alt: "Before and After 3" },
  { src: "/placeholder.svg", alt: "Before and After 4" },
  { src: "/placeholder.svg", alt: "Before and After 5" },
  { src: "/placeholder.svg", alt: "Before and After 6" },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-32 bg-pearl-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-deep-purple mb-12 text-center">Transformations Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="rounded-lg shadow-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white p-4 rounded-lg">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default dynamic(() => Promise.resolve(Gallery), { ssr: false })

