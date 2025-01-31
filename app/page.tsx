import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import BrandBanner from "@/components/BrandBanner"
import About from "@/components/About"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Booking from "@/components/Booking"
import Reviews from "@/components/Reviews"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-24">
      <Navigation />
      <Hero />
      <BrandBanner />
      <About />
      <Services />
      <Gallery />
      <Booking />
      <Reviews />
      <Footer />
    </main>
  )
}

