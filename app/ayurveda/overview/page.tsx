import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AyurvedaOverviewPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Ayurveda Overview"
				subtitle="Exploring the Ancient Wisdom of Cow-Based Ayurvedic Practices"
				imageSrc="/ivana-vavrova-wzPCL1Qe-RQ-unsplash.jpg?height=600&width=1920"
			/>

			{/* Introduction Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<SectionHeading
								title="Understanding Cow-Based Ayurveda"
								subtitle="The Sacred Connection Between Cows and Traditional Medicine"
							/>
							<p className="text-gray-700 mb-6">
								Cow-based Ayurveda represents a unique branch of traditional
								medicine that harnesses the healing properties of Panchagavya -
								the five sacred products derived from indigenous cows.
							</p>
							<p className="text-gray-700">
								Our research combines ancient Ayurvedic wisdom with modern
								scientific validation to develop effective natural remedies and
								health solutions.
							</p>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/ivana-vavrova-wzPCL1Qe-RQ-unsplash.jpg?height=400&width=600"
								alt="Ayurvedic Preparations"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Key Benefits"
						subtitle="The Healing Power of Panchagavya in Ayurvedic Medicine"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Holistic Healing</h3>
								<p className="text-gray-700">
									Promotes complete physical, mental, and spiritual well-being
									through natural remedies.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Immune Support</h3>
								<p className="text-gray-700">
									Strengthens the body's natural defense mechanisms using
									Panchagavya-based preparations.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Natural Balance</h3>
								<p className="text-gray-700">
									Restores and maintains the body's natural equilibrium through
									traditional formulations.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Applications Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Applications"
						subtitle="Diverse Uses of Cow-Based Ayurvedic Products"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">
									Health & Wellness
								</h3>
								<p className="text-gray-600">
									Medicinal preparations for various health conditions
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">Skin Care</h3>
								<p className="text-gray-600">
									Natural cosmetic and therapeutic skin treatments
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">Nutrition</h3>
								<p className="text-gray-600">
									Dietary supplements and nutritional products
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">Agriculture</h3>
								<p className="text-gray-600">
									Organic farming and soil enrichment solutions
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
