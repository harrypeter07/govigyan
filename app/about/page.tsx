import { PageTransition } from "@/components/page-transition"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/section-heading"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <PageTransition>
      <HeroSection
        title="About Go Vigyan"
        subtitle="Discover our mission, vision, and the journey of preserving India's cow heritage"
        imageSrc="/placeholder.svg?height=600&width=1920"
        buttonText="Our Mission"
        buttonLink="#mission"
      />

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white" id="mission" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading
                title="Our Mission & Vision"
                subtitle="Dedicated to researching and promoting the multifaceted benefits of cows and their five essential products"
              />
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To rekindle the age-old bond between humans and cows through scientific research, education, and
                    promotion of traditional cow-based practices for sustainable living.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    A world where the sacred relationship between humans and cows is restored, leading to healthier
                    communities, sustainable agriculture, and preservation of traditional knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Go Vigyan Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-amber-50" data-scroll-section>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our History"
            subtitle="The journey of Go Vigyan Anusandhan Kendra from its inception to the present day"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-amber-400 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-bold mb-2">Foundation (1996)</h3>
              <p className="text-gray-700 mb-8">
                Go Vigyan Anusandhan Kendra was established with the vision of preserving and promoting the traditional
                knowledge about indigenous cows and their products.
              </p>
            </div>
            <div className="relative border-l-2 border-amber-400 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-bold mb-2">Research Expansion (2005)</h3>
              <p className="text-gray-700 mb-8">
                Expanded research facilities to study the medicinal properties of Panchagavya and its applications in
                healthcare and agriculture.
              </p>
            </div>
            <div className="relative border-l-2 border-amber-400 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-bold mb-2">Training Programs (2010)</h3>
              <p className="text-gray-700 mb-8">
                Launched comprehensive training programs for farmers, entrepreneurs, and healthcare practitioners on
                cow-based sustainable practices.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-bold mb-2">Present Day</h3>
              <p className="text-gray-700">
                Today, Go Vigyan continues its mission with expanded research, training programs, and advocacy for
                indigenous cow protection and promotion of cow-based products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white" data-scroll-section>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the dedicated team behind Go Vigyan Anusandhan Kendra"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team Member ${i}`}
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Suresh Sharma</h3>
                  <p className="text-amber-600 mb-4">Director of Research</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in Ayurvedic research, Dr. Sharma leads our scientific studies on
                    Panchagavya.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50" data-scroll-section>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Achievements"
            subtitle="Milestones and recognition in our journey of cow conservation and research"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">25+</div>
                <h3 className="text-lg font-semibold mb-2">Years of Service</h3>
                <p className="text-gray-600">Dedicated to cow conservation and research</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">10,000+</div>
                <h3 className="text-lg font-semibold mb-2">Farmers Trained</h3>
                <p className="text-gray-600">In organic and cow-based farming practices</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
                <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
                <p className="text-gray-600">Published on benefits of Panchagavya</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">15</div>
                <h3 className="text-lg font-semibold mb-2">National Awards</h3>
                <p className="text-gray-600">For contribution to sustainable agriculture</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

