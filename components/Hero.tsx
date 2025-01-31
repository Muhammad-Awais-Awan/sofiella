"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

function FuturisticSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[4.5, 124, 124]} ref={meshRef}>
        <MeshDistortMaterial
          color="#A38CD8"
          attach="material"
          distort={0.2}
          speed={1}
          roughness={0.6}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/20 to-champagne/20" />

      <div className="absolute inset-0 z-0 h-[90dvh] top-10">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FuturisticSphere />
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-playfair text-pink-300 mb-4 relative">
            <span className="relative inline-block">
              Sofiélla
              <span className="absolute -inset-1 bg-neon-blue/20 rounded-lg blur-lg" />
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-parisienne text-soft-lilac text-pink-200 mb-8">
            Unveil Your True Glow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-rose-gold underline  hover:bg-neon-blue hover:text-white text-pink-300 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg rounded-full relative group"
            >
              Book Your Glow
              <span className="absolute inset-0 rounded-full bg-neon-blue/20" />
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-2 border-deep-purple text-pink-300 hover:bg-deep-purple hover:text-white transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg rounded-full"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-6 h-6 text-deep-purple"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hero), { ssr: false });
