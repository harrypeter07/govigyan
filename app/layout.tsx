import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/loading-provider"
import { LocomotiveScrollProvider } from "@/components/locomotive-scroll-provider"
import "./globals.css"

export const metadata = {
  title: "Go Vigyan Anusandhan Kendra",
  description: "Rediscovering the age-old bond between humans and cows through research and tradition",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingProvider>
            <LocomotiveScrollProvider>
              <div className="flex flex-col min-h-screen">
                <SiteHeader />
                <main className="flex-1 pt-20">{children}</main>
                <SiteFooter />
              </div>
            </LocomotiveScrollProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

