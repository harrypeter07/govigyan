import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, Clock, Beaker, Target } from "lucide-react";

export default function TrainingFeaturesPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Training Features"
				subtitle="What makes our training programs unique and effective"
				imageSrc="/geike-verniers-z05jp25aYV8-unsplash.jpg?height=600&width=1920"
			/>

			{/* Key Features Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Program Features"
						subtitle="Discover the unique aspects of our training methodology"
						centered
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								title: "Expert Instructors",
								description:
									"Learn from experienced practitioners with decades of expertise in cow-based practices",
								icon: Users,
							},
							{
								title: "Comprehensive Curriculum",
								description:
									"Well-structured courses covering both theoretical knowledge and practical applications",
								icon: BookOpen,
							},
							{
								title: "Certification",
								description:
									"Receive recognized certificates upon successful completion of training programs",
								icon: Award,
							},
							{
								title: "Flexible Schedule",
								description:
									"Choose from various time slots that suit your availability and learning pace",
								icon: Clock,
							},
							{
								title: "Practical Training",
								description:
									"Hands-on experience with real-world applications and product development",
								icon: Beaker,
							},
							{
								title: "Career Guidance",
								description:
									"Support in establishing your own ventures in cow-based products and services",
								icon: Target,
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

			{/* Teaching Methodology */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/geike-verniers-z05jp25aYV8-unsplash.jpg?height=400&width=600"
								alt="Teaching Methodology"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<SectionHeading
								title="Teaching Methodology"
								subtitle="Our approach to effective learning and skill development"
							/>
							<div className="space-y-6">
								<div className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-2">
										Interactive Learning
									</h3>
									<p className="text-gray-600">
										Engaging sessions with demonstrations, discussions, and
										hands-on activities to ensure better understanding and
										retention.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-2">
										Practical Application
									</h3>
									<p className="text-gray-600">
										Real-world projects and case studies to help you apply
										theoretical knowledge in practical situations.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-2">Continuous Support</h3>
									<p className="text-gray-600">
										Ongoing guidance and mentorship from experts throughout your
										learning journey and beyond.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
