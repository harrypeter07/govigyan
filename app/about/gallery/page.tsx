import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutGalleryPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Gallery"
				subtitle="Visual journey through our facilities and impact"
				imageSrc="/galleryabout.png?height=600&width=1920"
			/>

			{/* Gallery Grid Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Journey in Pictures"
						subtitle="Explore our facilities, research activities, and community impact"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "Research Facility",
								description:
									"State-of-the-art laboratories for cow-based research",
								image: "/mery-khachatryan-qYVoX-F-Jls-unsplash.jpg",
							},
							{
								title: "Indigenous Cow Conservation",
								description: "Preserving and protecting native cow breeds",
								image: "/geike-verniers-z05jp25aYV8-unsplash.jpg",
							},
							{
								title: "Product Development",
								description: "Creating sustainable cow-based products",
								image: "/denis-lekaj-Gj4DOQr2hVk-unsplash.jpg",
							},
							{
								title: "Community Engagement",
								description: "Working with local farmers and communities",
								image: "/denis-lekaj-kiLPiOtirsU-unsplash.jpg",
							},
							{
								title: "Sustainable Practices",
								description: "Promoting eco-friendly farming methods",
								image: "/denis-lekaj-zL5-09nwMHU-unsplash.jpg",
							},
							{
								title: "Knowledge Sharing",
								description: "Educational programs and workshops",
								image: "/ivana-vavrova-wzPCL1Qe-RQ-unsplash.jpg",
							},
						].map((item, index) => (
							<Card
								key={index}
								className="overflow-hidden group cursor-pointer"
							>
								<div className="relative h-64">
									<Image
										src={`${item.image}?height=400&width=600`}
										alt={item.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<div className="text-center p-4">
											<h3 className="text-xl font-bold text-white mb-2">
												{item.title}
											</h3>
											<p className="text-white/90">{item.description}</p>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
