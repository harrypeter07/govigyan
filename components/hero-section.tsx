"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
  buttonIcon?: React.ReactNode
  overlay?: boolean
  height?: string
}

export function HeroSection({
  title,
  subtitle,
  imageSrc,
  buttonText,
  buttonLink = "#",
  buttonIcon,
  overlay = true,
  height = "h-[500px] md:h-[600px]",
}: HeroSectionProps) {
  return (
    <section className="relative" data-scroll-section>
      <div className={`relative w-full ${height}`}>
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        {overlay && <div className="absolute inset-0 bg-black/40" />}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
              {buttonText && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold" asChild>
                    <a href={buttonLink}>
                      {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
                      {buttonText}
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

