import dynamic from "next/dynamic"

const About = () => {
  return (
    <section className="py-32 bg-pearl-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-deep-purple mb-8 text-center">About Sofiélla</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg" alt="Sofiélla Beauty" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-deep-purple mb-4">
              Sofiélla is a futuristic beauty brand that combines cutting-edge technology with luxurious treatments to
              unveil your true glow. Our mission is to empower individuals to embrace their unique beauty through
              innovative and personalized experiences.
            </p>
            <p className="text-deep-purple mb-4">
              Founded by a team of beauty experts and tech enthusiasts, Sofiélla pushes the boundaries of traditional
              beauty treatments. We utilize advanced AI algorithms and state-of-the-art equipment to deliver
              unparalleled results tailored to your specific needs.
            </p>
            <p className="text-deep-purple">
              Step into the future of beauty with Sofiélla and discover a world where science meets artistry, and where
              your true radiance is revealed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(About), { ssr: false })

