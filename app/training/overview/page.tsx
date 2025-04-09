import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function TrainingOverviewPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Training Programs"
				subtitle="Comprehensive Education in Cow-Based Sustainable Practices"
				imageSrc="/denis-lekaj-Gj4DOQr2hVk-unsplash.jpg?height=600&width=1920"
			/>

			{/* Introduction Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<SectionHeading
								title="Educational Excellence"
								subtitle="Empowering Through Knowledge and Practical Experience"
							/>
							<p className="text-gray-700 mb-6">
								Our training programs combine traditional wisdom with modern
								scientific understanding, offering comprehensive education in
								cow-based sustainable practices.
							</p>
							<p className="text-gray-700">
								From hands-on workshops to certified courses, we provide
								practical knowledge that enables participants to implement
								sustainable solutions in their communities.
							</p>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/ivana-vavrova-wzPCL1Qe-RQ-unsplash.jpg?height=400&width=600"
								alt="Training Session"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Programs Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Programs"
						subtitle="Specialized Training for Various Skill Levels"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Foundation Course</h3>
								<p className="text-gray-700">
									Introductory program covering basics of cow-based farming and
									product development.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">
									Advanced Certification
								</h3>
								<p className="text-gray-700">
									In-depth training for professionals in Panchagavya preparation
									and applications.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Specialist Workshops</h3>
								<p className="text-gray-700">
									Focused sessions on specific aspects like organic farming or
									Ayurvedic preparations.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Program Features"
						subtitle="What Makes Our Training Programs Unique"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">
									Expert Instructors
								</h3>
								<p className="text-gray-600">
									Learn from experienced practitioners and researchers
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">
									Hands-on Learning
								</h3>
								<p className="text-gray-600">
									Practical experience through interactive sessions
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">
									Flexible Schedule
								</h3>
								<p className="text-gray-600">
									Programs designed to accommodate various time commitments
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-none shadow-md">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">Certification</h3>
								<p className="text-gray-600">
									Recognized credentials upon successful completion
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
