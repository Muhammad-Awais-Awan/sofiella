"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <section className="py-32 bg-soft-pink">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-deep-purple mb-12 text-center">Book Your Glow</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form>
            <div className="mb-6">
              <Label htmlFor="service">Select Service</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facial">Luxury Glow Facial</SelectItem>
                  <SelectItem value="makeup">Celestial Makeup Experience</SelectItem>
                  <SelectItem value="hair">Ethereal Hair Styling</SelectItem>
                  <SelectItem value="nails">Holographic Nail Art</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-6">
              <Label htmlFor="date">Select Date</Label>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </div>
            <div className="mb-6">
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-6">
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            <Button className="w-full bg-rose-gold text-deep-purple hover:bg-neon-blue hover:text-white transition-colors duration-300">
              Book Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Booking), { ssr: false })

