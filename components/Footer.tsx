"use client";

import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

function Logo3D() {
  return (
    <Float speed={4} rotationIntensity={0.4} floatIntensity={0.4}>
      <Center>
        <Text3D
          font="fonts/Geist.json"
          size={3.5} // Increased size
          height={0.4} // Increased depth
          curveSegments={5}
        >
          {`Sofiélla`}
          <meshStandardMaterial
            color="#2D1B4D"
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

const Footer = () => {
  return (
    <footer className="bg-champagne py-32">
      <div className="container mx-auto px-4">
        <div className="h-60 mb-12">
          {" "}
          {/* Increased height */}
          <Canvas camera={{ position: [0, 0, 6] }}>
            {" "}
            {/* Adjusted camera position */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Logo3D />
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-playfair text-deep-purple mb-4">
              Contact
            </h3>
            <p className="text-soft-lilac">123 Beauty Lane</p>
            <p className="text-soft-lilac">New York, NY 10001</p>
            <p className="text-soft-lilac">contact@sofiella.com</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-playfair text-deep-purple mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-deep-purple hover:text-neon-blue transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-playfair text-deep-purple mb-4">
              Hours
            </h3>
            <p className="text-soft-lilac">Mon - Fri: 9am - 8pm</p>
            <p className="text-soft-lilac">Saturday: 10am - 6pm</p>
            <p className="text-soft-lilac">Sunday: Closed</p>
          </div>
        </div>

        <div className="mt-12 text-center text-soft-lilac">
          <p>
            &copy; {new Date().getFullYear()} Sofiélla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
