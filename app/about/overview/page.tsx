import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutOverviewPage() {
	return (
		<PageTransition>
			<HeroSection
				title="About Go Vigyan"
				subtitle="A Comprehensive Overview of Our Organization and Mission"
				imageSrc="/image-34.jpg?height=600&width=1920"
			/>

			{/* Overview Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<SectionHeading
								title="Who We Are"
								subtitle="A Pioneer in Cow-Based Research and Sustainable Practices"
							/>
							<p className="text-gray-700 mb-6">
								Go Vigyan Anusandhan Kendra is a leading research institution
								dedicated to the scientific study and promotion of indigenous
								cow breeds and their products. Established in 1996, we have been
								at the forefront of combining traditional knowledge with modern
								scientific research.
							</p>
							<p className="text-gray-700">
								Our work spans across various domains including agriculture,
								health, and sustainable development, all centered around the
								indigenous cow and its five primary products (Panchagavya).
							</p>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/image-34.jpg?height=400&width=600"
								alt="Go Vigyan Research Center"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Core Values"
						subtitle="The principles that guide our research and initiatives"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">
									Scientific Excellence
								</h3>
								<p className="text-gray-700">
									We maintain the highest standards of scientific research while
									validating traditional knowledge through modern methodologies.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">
									Sustainable Practices
								</h3>
								<p className="text-gray-700">
									We promote environmentally conscious methods and products that
									contribute to a sustainable future.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Community Impact</h3>
								<p className="text-gray-700">
									We work closely with farmers, researchers, and communities to
									create meaningful social and economic impact.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
