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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								title: "Sustainability",
								description:
									"Promoting eco-friendly practices and sustainable development through indigenous cow conservation",
								icon: Leaf,
							},
							{
								title: "Compassion",
								description:
									"Treating every cow with care and respect, recognizing their sacred role in our culture",
								icon: Heart,
							},
							{
								title: "Global Impact",
								description:
									"Sharing knowledge and practices that benefit communities worldwide",
								icon: Globe,
							},
							{
								title: "Excellence",
								description:
									"Maintaining high standards in research, education, and product development",
								icon: Star,
							},
							{
								title: "Integrity",
								description:
									"Conducting our work with transparency and ethical responsibility",
								icon: Shield,
							},
							{
								title: "Community",
								description:
									"Building strong relationships with farmers, researchers, and stakeholders",
								icon: Users,
							},
						].map((feature, index) => {
							const Icon = feature.icon;
							return (
								<Card
									key={index}
									className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
								>
									<CardContent className="p-6">
										<div className="mb-4">
											<Icon className="h-8 w-8 text-amber-500" />
										</div>
										<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
										<p className="text-gray-600">{feature.description}</p>
									</CardContent>
								</Card>
							);
						})}
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
