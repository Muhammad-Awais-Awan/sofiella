"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-parisienne text-deep-purple hover:text-neon-blue transition-colors duration-300"
            >
              Sofiélla
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Gallery", id: "gallery" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-deep-purple hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-deep-purple hover:text-neon-blue focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden bg-white/80 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Gallery", id: "gallery" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-deep-purple hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation

