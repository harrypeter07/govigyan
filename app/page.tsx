"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, Check, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { BentoGrid } from "@/components/bento-grid";

export default function Home() {
	return (
		<PageTransition>
			<div className="flex flex-col min-h-screen">
				{/* Hero Section */}
				<section className="relative" data-scroll-section>
					<div className="relative w-full h-[600px] md:h-[80vh]">
						<Image
							src="/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg"
							alt="Go Vigyan Hero"
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-transparent flex items-center">
							<motion.div
								className="container mx-auto px-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
							>
								<div className="max-w-3xl text-white">
									<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
										Go Vigyan Anusandhan Kendra
									</h1>
									<p className="text-lg md:text-xl mb-8">
										Rediscovering the age-old bond between humans and cows
										through research and tradition
									</p>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
											<Heart className="mr-2 h-4 w-4" /> Donate Now
										</Button>
									</motion.div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
								<Image
									src="/denis-lekaj-kiLPiOtirsU-unsplash.jpg"
									alt="About Go Vigyan"
									fill
									className="object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div>
								<h2 className="text-3xl font-bold mb-6 text-gray-900">
									Go-Vigyan Anusandhan Kendra
								</h2>
								<p className="text-gray-700 mb-6">
									Go Vigyan Anusandhan Kendra (GVAK) is a Non-Government
									Organization on a mission to rekindle the age-old bond between
									humans and cows. Rooted in the rich heritage of Indian
									agriculture and traditional wisdom, our organization is
									dedicated to researching and promoting the multifaceted
									benefits of cows and their five essential products: milk,
									curds, ghee, urine, and dung &ndash; collectively known as
									Panchgavya.
								</p>
								<motion.div whileHover={{ scale: 1.05 }}>
									<Button
										variant="outline"
										className="border-green-600 text-green-700 hover:bg-green-50"
									>
										Discover More <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Call to Action Banner */}
				<section
					className="py-16 bg-gradient-to-r from-amber-50 to-green-50 relative overflow-hidden"
					data-scroll-section
				>
					<div className="container mx-auto px-4 relative z-10">
						<motion.div
							className="max-w-3xl mx-auto text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold mb-6 text-green-800">
								Join us in rediscovering the vast potential of cows and their
								products to enhance lives and sustain the environment.
							</h2>
							<motion.div whileHover={{ scale: 1.05 }}>
								<Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
									Discover More
								</Button>
							</motion.div>
						</motion.div>
					</div>
					<div className="absolute inset-0 opacity-5">
						<Image
							src="/geike-verniers-rXk9hA2-m70-unsplash.jpg"
							alt="Background Pattern"
							fill
							className="object-cover"
						/>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<motion.h2
							className="text-3xl font-bold mb-12 text-center text-green-800"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							Discover Our Initiatives
						</motion.h2>
						<BentoGrid
							items={[
								{
									title: "Panchagavya Research",
									description:
										"Leading research in cow-based natural remedies and products, combining traditional wisdom with modern science.",
									image: "/denis-lekaj-zL5-09nwMHU-unsplash.jpg",
									className: "row-span-2",
									imageClassName: "h-72",
								},
								{
									title: "Sustainable Farming",
									description:
										"Promoting organic farming practices using cow-based fertilizers and pest control methods.",
									image: "/anshu-a-FHPX-7srnxc-unsplash.jpg",
								},
								{
									title: "Training Programs",
									description:
										"Comprehensive training in cow-based farming and product development for farmers and entrepreneurs.",
									image: "/denis-lekaj-Gj4DOQr2hVk-unsplash.jpg",
								},
								{
									title: "Product Development",
									description:
										"Creating innovative cow-based products for health, agriculture, and daily use.",
									image: "/geike-verniers-z05jp25aYV8-unsplash.jpg",
								},
								{
									title: "Community Outreach",
									description:
										"Building a network of farmers and practitioners committed to sustainable agriculture.",
									image: "/ivana-vavrova-wzPCL1Qe-RQ-unsplash.jpg",
								},
								{
									title: "Cultural Preservation",
									description:
										"Preserving and promoting the cultural significance of indigenous cow breeds.",
									image: "/anand-thakur-y0dSeflqUWo-unsplash.jpg",
								},
							]}
						/>
					</div>
				</section>

				{/* Testimonials Section */}
				<section
					className="py-16 bg-gradient-to-br from-green-50 to-amber-50"
					data-scroll-section
				>
					<div className="container mx-auto px-4">
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 gap-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div>
								<h2 className="text-3xl font-bold mb-4 text-green-800">
									Our Testimonials
								</h2>
								<p className="text-xl text-gray-700">
									What they are talking about Go Vigyan Anusandhan Kendra
								</p>
							</div>
							<motion.div
								className="bg-white p-8 rounded-2xl shadow-lg border-0"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<div className="mb-6">
									<h3 className="text-xl font-bold text-green-800">
										Mr. Pavan Katankar
									</h3>
									<p className="text-gray-600">
										Cow Based Products Manufacturer, Gondia Dist., Maharashtra,
										India
									</p>
								</div>
								<p className="text-gray-700 italic">
									&quot;I came to Go Vigyan after my jersey cow based dairy went
									in loss. I was hugely benefitted by the training of producing
									cow based products. Thanks to Go Vigyan I was able to start a
									new business. I get regular consultation from Go Vigyan &amp;
									my business has grown since then&quot;
								</p>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Gallery Section */}
				<section className="py-16 bg-white" data-scroll-section>
					<div className="container mx-auto px-4">
						<motion.h2
							className="text-3xl font-bold mb-12 text-center text-green-800"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							Our Photo Gallery
						</motion.h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{[
								{
									title: "Sacred Bond",
									subtitle: "Traditional Care",
									image: "/anand-thakur-y0dSeflqUWo-unsplash.jpg",
								},
								{
									title: "Organic Farming",
									subtitle: "Go-vigyan",
									image: "/anshu-a-FHPX-7srnxc-unsplash.jpg",
								},
								{
									title: "Natural Living",
									subtitle: "Go-vigyan",
									image: "/denis-lekaj-Gj4DOQr2hVk-unsplash.jpg",
								},
								{
									title: "Pure Connection",
									subtitle: "Spiritual Bond",
									image: "/geike-verniers-z05jp25aYV8-unsplash.jpg",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className="group relative overflow-hidden rounded-2xl shadow-lg"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ y: -10 }}
								>
									<div className="aspect-square relative">
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
											<div className="text-white">
												<h3 className="text-xl font-bold">{item.title}</h3>
												<p className="text-sm">{item.subtitle}</p>
											</div>
										</div>
									</div>
								</motion.div>
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
				<section className="py-16 bg-background" data-scroll-section>
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
