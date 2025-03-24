import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, Check, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
	return (
		<PageTransition>
			<div className="flex flex-col min-h-screen">
				{/* Hero Section */}
				<section className="relative" data-scroll-section>
					<div className="relative w-full h-[500px] md:h-[600px]">
						<Image
							src="/image-34.jpg?height=600&width=1920"
							alt="Go Vigyan Hero"
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-black/40 flex items-center">
							<div className="container mx-auto px-4">
								<div className="max-w-3xl text-white">
									<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
										Go Vigyan Anusandhan Kendra
									</h1>
									<p className="text-lg md:text-xl mb-8">
										Rediscovering the age-old bond between humans and cows
										through research and tradition
									</p>
									<Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
										<Heart className="mr-2 h-4 w-4" /> Donate Now
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div className="relative h-[400px] rounded-lg overflow-hidden">
								<Image
									src="/image-34.jpg?height=400&width=600"
									alt="About Go Vigyan"
									fill
									className="object-cover"
								/>
							</div>
							<div>
								<h2 className="text-3xl font-bold mb-6">
									Go-Vigyan Anusandhan Kendra
								</h2>
								<p className="text-gray-700 mb-6">
									Go Vigyan Anusandhan Kendra (GVAK) is a Non-Government
									Organization on a mission to rekindle the age-old bond between
									humans and cows. Rooted in the rich heritage of Indian
									agriculture and traditional wisdom, our organization is
									dedicated to researching and promoting the multifaceted
									benefits of cows and their five essential products: milk,
									curds, ghee, urine, and dung – collectively known as
									Panchgavya.
								</p>
								<Button
									variant="outline"
									className="border-green-600 text-green-700 hover:bg-green-50"
								>
									Discover More <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Call to Action Banner */}
				<section
					className="py-16 bg-amber-50 relative overflow-hidden"
					data-scroll-section
				>
					<div className="container mx-auto px-4 relative z-10">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl font-bold mb-6">
								Join us in rediscovering the vast potential of cows and their
								products to enhance lives and sustain the environment.
							</h2>
							<Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
								Discover More
							</Button>
						</div>
					</div>
					<div className="absolute inset-0 opacity-10">
						<Image
							src="/image-34.jpg?height=600&width=1920"
							alt="Background Pattern"
							fill
							className="object-cover"
						/>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Feature 1 */}
							<Card className="border-green-200">
								<CardContent className="p-6">
									<div className="flex items-center mb-4">
										<div className="bg-green-100 p-3 rounded-full mr-4">
											<Image
												src="/image-34.jpg?height=40&width=40"
												alt="Cow Icon"
												width={40}
												height={40}
											/>
										</div>
										<h3 className="text-2xl font-bold">
											Join us & become a GO-Sevak
										</h3>
									</div>
									<p className="text-gray-700 mb-6">
										As a Go Sevak, you contribute to the preservation of Indian
										culture and traditions deeply rooted in the significance of
										cows.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
											<span>
												Be part of a community dedicated to cow welfare.
											</span>
										</li>
										<li className="flex items-start">
											<Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
											<span>
												Uphold the significance of cows in Indian culture.
											</span>
										</li>
										<li className="flex items-start">
											<Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
											<span>Learn and share the value of cows.</span>
										</li>
									</ul>
								</CardContent>
							</Card>

							{/* Feature 2 */}
							<Card className="border-green-200">
								<CardContent className="p-6">
									<div className="flex items-center mb-4">
										<div className="bg-green-100 p-3 rounded-full mr-4">
											<Image
												src="/image-34.jpg?height=40&width=40"
												alt="Cow Icon"
												width={40}
												height={40}
											/>
										</div>
										<h3 className="text-2xl font-bold">
											Donate for the Well-Being of Cows
										</h3>
									</div>
									<p className="text-gray-700 mb-6">
										Support the preservation of the sacred and cultural
										significance of cows in India.
									</p>
									<ul className="space-y-3">
										<li className="flex items-start">
											<Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
											<span>
												Contribute to the protection of a cultural icon.
											</span>
										</li>
										<li className="flex items-start">
											<Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
											<span>
												Donate to provide nourishment and shelter for cows.
											</span>
										</li>
										<li className="flex items-start">
											<Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
											<span>
												Small contributions lead to significant change.
											</span>
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="py-16 bg-gray-50" data-scroll-section>
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<div>
								<h2 className="text-3xl font-bold mb-4">Our Testimonials</h2>
								<p className="text-xl text-gray-700">
									What they are talking about Go Vigyan Anusandhan Kendra
								</p>
							</div>
							<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
								<div className="mb-6">
									<h3 className="text-xl font-bold">Mr. Pavan Katankar</h3>
									<p className="text-gray-600">
										Cow Based Products Manufacturer, Gondia Dist., Maharashtra,
										India
									</p>
								</div>
								<p className="text-gray-700 italic">
									I came to Go Vigyan after my jersey cow based dairy went in
									loss. I was hugely benefitted by the training of producing cow
									based products. Thanks to Go Vigyan I was able to start a new
									business. I get regular consultation from Go Vigyan & my
									business has grown since then
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Gallery Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-12 text-center">
							Our Photo Gallery
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
							{[
								{ title: "Cow", subtitle: "Adopt" },
								{ title: "Organic Farming", subtitle: "Go-vigyan" },
								{ title: "Activities", subtitle: "Go-vigyan" },
								{ title: "Compost", subtitle: "Vermi" },
								{
									title: "Panchagavya Ayurvedic Medicines",
									subtitle: "Go-vigyan cow based",
								},
							].map((item, index) => (
								<div
									key={index}
									className="group relative overflow-hidden rounded-lg"
								>
									<div className="aspect-square relative">
										<Image
											src={`/image-34.jpg?height=300&width=300`}
											alt={item.title}
											fill
											className="object-cover transition-transform group-hover:scale-110"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
										<p className="text-sm font-light">{item.subtitle}</p>
										<h3 className="text-lg font-bold">{item.title}</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* News Section */}
				<section className="py-16 bg-gray-50" data-scroll-section>
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">News & Articles</h2>
							<p className="text-xl text-gray-700">
								Directly from the latest news and articles
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<Card className="overflow-hidden">
								<div className="relative h-48">
									<Image
										src="/image-34.jpg?height=200&width=400"
										alt="News Image"
										fill
										className="object-cover"
									/>
								</div>
								<CardContent className="p-6">
									<div className="text-sm text-gray-500 mb-2">
										1 Nov 2023 • govigyan
									</div>
									<h3 className="text-xl font-bold mb-4">
										India s Cherished Heritage: Cow-Centric Culture and
										Traditions
									</h3>
									<Link
										href="#"
										className="text-green-600 hover:text-green-700 inline-flex items-center"
									>
										Read More <ChevronRight className="h-4 w-4 ml-1" />
									</Link>
								</CardContent>
							</Card>

							{/* Placeholder for additional news cards */}
							<div className="hidden md:block">
								<Card className="h-full opacity-0">
									<CardContent></CardContent>
								</Card>
							</div>
							<div className="hidden md:block">
								<Card className="h-full opacity-0">
									<CardContent></CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<ContactForm />
						</div>
					</div>
				</section>
			</div>
		</PageTransition>
	);
}
