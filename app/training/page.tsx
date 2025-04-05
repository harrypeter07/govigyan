import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, ArrowRight, CheckCircle, MapPin } from "lucide-react";

export default function TrainingPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Training Programs"
				subtitle="Learn traditional and sustainable cow-based practices from our experts"
				imageSrc="/image-34.jpg?height=600&width=1920"
				buttonText="Explore Programs"
				buttonLink="#programs"
			/>

			{/* Overview Section */}
			<section className="py-16 bg-card" id="programs" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Training Programs"
						subtitle="Comprehensive courses designed to empower individuals with traditional knowledge and sustainable practices"
						centered
					/>

					<Tabs defaultValue="economy" className="max-w-5xl mx-auto">
						<TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
							<TabsTrigger value="economy">Cow Economy</TabsTrigger>
							<TabsTrigger value="farming">Organic Farming</TabsTrigger>
							<TabsTrigger value="vermicompost">Vermicompost</TabsTrigger>
							<TabsTrigger value="fertilizer">Natural Fertilizers</TabsTrigger>
							<TabsTrigger value="pestcontrol">Pest Control</TabsTrigger>
						</TabsList>

						<TabsContent
							value="economy"
							className="border-accent/20 rounded-lg p-6"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-2xl font-bold mb-4">Cow Based Economy</h3>
									<p className="text-card-foreground mb-6">
										Learn how to build sustainable businesses around indigenous
										cows and their products. This program covers
										entrepreneurship opportunities, product development, and
										market strategies.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>
												Product development from cow milk, urine, and dung
											</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>
												Marketing and distribution of cow-based products
											</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>
												Financial planning and sustainable business models
											</span>
										</li>
									</ul>
									<Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
										Register Now <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<div className="relative h-[300px] rounded-lg overflow-hidden">
									<Image
										src="/image-34.jpg?height=300&width=400"
										alt="Cow Based Economy"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>

						<TabsContent
							value="farming"
							className="border-accent/20 rounded-lg p-6"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-2xl font-bold mb-4">
										Organic Farming - सेंद्रिय खेती
									</h3>
									<p className="text-card-foreground mb-6">
										Learn traditional and modern techniques of organic farming
										using cow-based inputs. This program covers soil health,
										crop rotation, and natural pest management.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>
												Soil preparation using cow dung and other organic matter
											</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Natural crop protection methods</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Sustainable water management techniques</span>
										</li>
									</ul>
									<Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
										Register Now <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<div className="relative h-[300px] rounded-lg overflow-hidden">
									<Image
										src="/image-34.jpg?height=300&width=400"
										alt="Organic Farming"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>

						<TabsContent
							value="vermicompost"
							className="border-accent/20 rounded-lg p-6"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-2xl font-bold mb-4">
										Vermicompost - केंचुआ खेती
									</h3>
									<p className="text-card-foreground mb-6">
										Master the art of vermicomposting using earthworms and cow
										dung. Learn how to create nutrient-rich compost for your
										plants and crops.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Setting up vermicompost beds</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Earthworm cultivation and management</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Harvesting and using vermicompost</span>
										</li>
									</ul>
									<Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
										Register Now <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<div className="relative h-[300px] rounded-lg overflow-hidden">
									<Image
										src="/image-34.jpg?height=300&width=400"
										alt="Vermicompost"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>

						<TabsContent
							value="fertilizer"
							className="border-accent/20 rounded-lg p-6"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-2xl font-bold mb-4">
										Fertilizer - अमृत पानी -उर्वरक
									</h3>
									<p className="text-card-foreground mb-6">
										Learn to prepare natural fertilizers using cow urine, dung,
										and other organic materials to enhance soil fertility and
										plant growth.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>
												Preparation of Jeevamrut and other liquid fertilizers
											</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Composting techniques for different crops</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Application methods and timing</span>
										</li>
									</ul>
									<Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
										Register Now <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<div className="relative h-[300px] rounded-lg overflow-hidden">
									<Image
										src="/image-34.jpg?height=300&width=400"
										alt="Natural Fertilizers"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="pestcontrol" className="border rounded-lg p-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-2xl font-bold mb-4">
										Keet Niyantrak - कीट नियंत्रकरक
									</h3>
									<p className="text-card-foreground mb-6">
										Learn to prepare natural pest control solutions using cow
										urine, neem, and other botanical ingredients to protect
										crops without harmful chemicals.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>
												Preparation of cow urine-based pest repellents
											</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Companion planting for pest management</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
											<span>Integrated pest management techniques</span>
										</li>
									</ul>
									<Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
										Register Now <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<div className="relative h-[300px] rounded-lg overflow-hidden">
									<Image
										src="/image-34.jpg?height=300&width=400"
										alt="Natural Pest Control"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Training Schedule Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Upcoming Training Programs"
						subtitle="Join our expert-led training sessions and workshops"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{[
							{
								title: "Cow Based Economy Workshop",
								date: "June 15-17, 2025",
								location: "Kamdhenu Bhavan, Nagpur",
								seats: 30,
							},
							{
								title: "Organic Farming Intensive",
								date: "July 10-14, 2025",
								location: "Training Center, Wardha",
								seats: 25,
							},
							{
								title: "Panchagavya Preparation",
								date: "August 5-7, 2025",
								location: "Kamdhenu Bhavan, Nagpur",
								seats: 20,
							},
						].map((program, index) => (
							<Card
								key={index}
								className="overflow-hidden border-none shadow-md"
							>
								<div className="bg-green-600 h-2"></div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-4">{program.title}</h3>
									<div className="space-y-3 mb-6">
										<div className="flex items-center text-gray-700">
											<Calendar className="h-5 w-5 mr-3 text-green-600" />
											<span>{program.date}</span>
										</div>
										<div className="flex items-center text-gray-700">
											<MapPin className="h-5 w-5 mr-3 text-green-600" />
											<span>{program.location}</span>
										</div>
										<div className="flex items-center text-gray-700">
											<Users className="h-5 w-5 mr-3 text-green-600" />
											<span>{program.seats} seats available</span>
										</div>
									</div>
									<Button className="w-full bg-green-600 hover:bg-green-700 text-white">
										Register
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Success Stories"
						subtitle="Hear from participants who have transformed their lives through our training programs"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<Card className="border-none shadow-md">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
										<Image
											src="/image-34.jpg?height=100&width=100"
											alt="Testimonial"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-bold">Mr. Pavan Katankar</h3>
										<p className="text-sm text-gray-600">
											Gondia District, Maharashtra
										</p>
									</div>
								</div>
								<p className="text-gray-700 italic">
									I came to Go Vigyan after my jersey cow based dairy went in
									loss. I was hugely benefitted by the training of producing cow
									based products. Thanks to Go Vigyan I was able to start a new
									business.
								</p>
							</CardContent>
						</Card>

						<Card className="border-none shadow-md">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
										<Image
											src="/image-34.jpg?height=100&width=100"
											alt="Testimonial"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-bold">Mr. Nagorao Deshmukh</h3>
										<p className="text-sm text-gray-600">
											Karanja Ghadge, Wardha
										</p>
									</div>
								</div>
								<p className="text-gray-700 italic">
									After the training, I started farming as told by Go Vigyan. My
									input cost was reduced considerably and my income grew with
									this. Now I am earning 2 Lakh Rupees per year from my 2 Acre
									Land.
								</p>
							</CardContent>
						</Card>

						<Card className="border-none shadow-md">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
										<Image
											src="/image-34.jpg?height=100&width=100"
											alt="Testimonial"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-bold">Mrs. Sunita Patil</h3>
										<p className="text-sm text-gray-600">
											Amravati, Maharashtra
										</p>
									</div>
								</div>
								<p className="text-gray-700 italic">
									The training on Panchagavya preparation has transformed my
									small farm. The natural fertilizers and pest control solutions
									have improved my crop yield while reducing costs. I m grateful
									to Go Vigyan.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 bg-gray-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<ContactForm
							formType="training"
							title="Register for Training"
							subtitle="Fill out the form below to register for our training programs or inquire about custom training for your organization"
							className="bg-white"
						/>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
