import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Globe, Star, Shield, Users } from "lucide-react";

export default function AboutFeaturesPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Our Features"
				subtitle="What makes Go Vigyan unique in cow conservation and research"
				imageSrc="/image-34.jpg?height=600&width=1920"
			/>

			{/* Core Values Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Core Values"
						subtitle="The principles that guide our mission and work"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								icon: <Leaf className="h-8 w-8 text-green-600" />,
								title: "Sustainable Practices",
								description:
									"We promote environmentally conscious methods in all our operations.",
							},
							{
								icon: <Heart className="h-8 w-8 text-green-600" />,
								title: "Compassionate Care",
								description:
									"Our approach is rooted in respect and care for all living beings.",
							},
							{
								icon: <Globe className="h-8 w-8 text-green-600" />,
								title: "Global Impact",
								description:
									"Our research and practices have influenced organizations worldwide.",
							},
						].map((feature, index) => (
							<Card key={index} className="bg-white border-none shadow-md">
								<CardContent className="p-6">
									<div className="flex justify-center mb-4">{feature.icon}</div>
									<h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
										{feature.title}
									</h3>
									<p className="text-gray-700 text-center">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Impact Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<div>
							<SectionHeading
								title="Our Impact"
								subtitle="Making a difference in communities and environment"
							/>
							<div className="space-y-6">
								<div className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-2">
										Environmental Impact
									</h3>
									<p className="text-gray-600">
										Promoting organic farming and sustainable practices that
										reduce carbon footprint and preserve natural resources.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-2">Social Impact</h3>
									<p className="text-gray-600">
										Empowering farmers and entrepreneurs through training and
										support in cow-based sustainable businesses.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-2">Economic Impact</h3>
									<p className="text-gray-600">
										Creating sustainable livelihoods and economic opportunities
										through cow-based products and services.
									</p>
								</div>
							</div>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/image-34.jpg?height=400&width=600"
								alt="Our Impact"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
