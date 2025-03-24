"use client"

import type React from "react"

import { useRef, useEffect, createContext, useContext, useState } from "react"
import { usePathname } from "next/navigation"
import { useLoading } from "./loading-provider"

interface LocomotiveScrollContextType {
  scroll: any
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextType>({
  scroll: null,
})

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext)

export function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading()
  const containerRef = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState<any>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (isLoading) return

    // Dynamic import of locomotive-scroll
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default

        if (!containerRef.current) return

        const locomotiveScroll = new LocomotiveScroll({
          el: document.documentElement,
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
          lerp: 0.07,
        })

        setScroll(locomotiveScroll)

        // Cleanup function
        return () => {
          locomotiveScroll.destroy()
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error)
      }
    }

    initLocomotiveScroll()
  }, [isLoading])

  // Reset scroll position when route changes
  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
      scroll.update()
    }
  }, [pathname, scroll])

  return (
    <LocomotiveScrollContext.Provider value={{ scroll }}>
      <div ref={containerRef} data-scroll-container>
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  )
}

