import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Filter, Search } from "lucide-react";

export default function ShopPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Go Vigyan Shop"
				subtitle="Authentic cow-based products for health, wellness, and sustainable living"
				imageSrc="/image-34.jpg?height=600&width=1920"
				buttonText="Explore Products"
				buttonLink="#products"
				buttonIcon={<ShoppingCart className="w-4 h-4" />}
			/>

			{/* Featured Products Section */}
			<section className="py-16 bg-white" id="products" data-scroll-section>
				<div className="container px-4 mx-auto">
					<SectionHeading
						title="Featured Products"
						subtitle="Our most popular cow-based products for health and wellness"
						centered
					/>

					<div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								title: "Panchagavya Ghrita",
								price: "₹450",
								rating: 5,
								image: "/image-34.jpg?height=300&width=300",
							},
							{
								title: "Cow Urine Ark",
								price: "₹250",
								rating: 4.5,
								image: "/image-34.jpg?height=300&width=300",
							},
							{
								title: "Herbal Cow Dung Soap",
								price: "₹120",
								rating: 4.8,
								image: "/image-34.jpg?height=300&width=300",
							},
							{
								title: "Panchagavya Hair Oil",
								price: "₹350",
								rating: 4.7,
								image: "/image-34.jpg?height=300&width=300",
							},
						].map((product, index) => (
							<Card
								key={index}
								className="overflow-hidden border-none shadow-md group"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={product.image || "/image-34.jpg"}
										alt={product.title}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
									<div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/10"></div>
								</div>
								<CardContent className="p-4">
									<div className="flex items-center mb-2">
										{Array.from({ length: 5 }).map((_, i) => (
											<Star
												key={i}
												className={`h-4 w-4 ${
													i < Math.floor(product.rating)
														? "text-green-600 fill-green-600"
														: i < product.rating
														? "text-green-600 fill-green-600"
														: "text-gray-300"
												}`}
											/>
										))}
										<span className="ml-1 text-sm text-gray-600">
											({product.rating})
										</span>
									</div>
									<h3 className="mb-1 font-bold">{product.title}</h3>
									<div className="flex items-center justify-between">
										<span className="font-bold text-green-600">
											{product.price}
										</span>
										<Button
											size="sm"
											className="text-white bg-green-600 hover:bg-green-700"
										>
											<ShoppingCart className="w-4 h-4 mr-1" /> Add
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Product Categories Section */}
			<section className="py-16 bg-gray-50" data-scroll-section>
				<div className="container px-4 mx-auto">
					<SectionHeading
						title="Shop by Category"
						subtitle="Browse our wide range of cow-based products"
						centered
					/>

					<Tabs defaultValue="all" className="max-w-6xl mx-auto">
						<div className="flex items-center justify-between mb-8">
							<TabsList>
								<TabsTrigger value="all">All Products</TabsTrigger>
								<TabsTrigger value="health">Health & Wellness</TabsTrigger>
								<TabsTrigger value="personal">Personal Care</TabsTrigger>
								<TabsTrigger value="home">Home & Garden</TabsTrigger>
							</TabsList>

							<div className="items-center hidden space-x-4 md:flex">
								<div className="relative">
									<input
										type="text"
										placeholder="Search products..."
										className="py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
									/>
									<Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
								</div>
								<Button variant="outline" size="icon">
									<Filter className="w-4 h-4" />
								</Button>
							</div>
						</div>

						<TabsContent value="all" className="mt-0">
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{Array.from({ length: 12 }).map((_, index) => (
									<Card
										key={index}
										className="overflow-hidden border-none shadow-md group"
									>
										<div className="relative h-64 overflow-hidden">
											<Image
												src={`/image-34.jpg?height=300&width=300&text=Product ${
													index + 1
												}`}
												alt={`Product ${index + 1}`}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
											<div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/10"></div>
										</div>
										<CardContent className="p-4">
											<div className="flex items-center mb-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < 4
																? "text-green-600 fill-green-600"
																: "text-gray-300"
														}`}
													/>
												))}
												<span className="ml-1 text-sm text-gray-600">
													(4.0)
												</span>
											</div>
											<h3 className="mb-1 font-bold">
												Product Name {index + 1}
											</h3>
											<div className="flex items-center justify-between">
												<span className="font-bold text-green-600">
													₹{Math.floor(Math.random() * 500) + 100}
												</span>
												<Button
													size="sm"
													className="text-white bg-green-600 hover:bg-green-700"
												>
													<ShoppingCart className="w-4 h-4 mr-1" /> Add
												</Button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>

							<div className="flex justify-center mt-12">
								<Button
									variant="outline"
									className="text-green-700 border-green-600 hover:bg-green-50"
								>
									Load More Products
								</Button>
							</div>
						</TabsContent>

						<TabsContent value="health" className="mt-0">
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{Array.from({ length: 8 }).map((_, index) => (
									<Card
										key={index}
										className="overflow-hidden border-none shadow-md group"
									>
										<div className="relative h-64 overflow-hidden">
											<Image
												src={`/image-34.jpg?height=300&width=300&text=Health ${
													index + 1
												}`}
												alt={`Health Product ${index + 1}`}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
											<div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/10"></div>
										</div>
										<CardContent className="p-4">
											<div className="flex items-center mb-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < 4
																? "text-green-600 fill-green-600"
																: "text-gray-300"
														}`}
													/>
												))}
												<span className="ml-1 text-sm text-gray-600">
													(4.0)
												</span>
											</div>
											<h3 className="mb-1 font-bold">
												Health Product {index + 1}
											</h3>
											<div className="flex items-center justify-between">
												<span className="font-bold text-green-600">
													₹{Math.floor(Math.random() * 500) + 100}
												</span>
												<Button
													size="sm"
													className="text-white bg-green-600 hover:bg-green-700"
												>
													<ShoppingCart className="w-4 h-4 mr-1" /> Add
												</Button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="personal" className="mt-0">
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{Array.from({ length: 8 }).map((_, index) => (
									<Card
										key={index}
										className="overflow-hidden border-none shadow-md group"
									>
										<div className="relative h-64 overflow-hidden">
											<Image
												src={`/image-34.jpg?height=300&width=300&text=Personal ${
													index + 1
												}`}
												alt={`Personal Care ${index + 1}`}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
											<div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/10"></div>
										</div>
										<CardContent className="p-4">
											<div className="flex items-center mb-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < 4
																? "text-green-600 fill-green-600"
																: "text-gray-300"
														}`}
													/>
												))}
												<span className="ml-1 text-sm text-gray-600">
													(4.0)
												</span>
											</div>
											<h3 className="mb-1 font-bold">
												Personal Care {index + 1}
											</h3>
											<div className="flex items-center justify-between">
												<span className="font-bold text-green-600">
													₹{Math.floor(Math.random() * 500) + 100}
												</span>
												<Button
													size="sm"
													className="text-white bg-green-600 hover:bg-green-700"
												>
													<ShoppingCart className="w-4 h-4 mr-1" /> Add
												</Button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="home" className="mt-0">
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{Array.from({ length: 8 }).map((_, index) => (
									<Card
										key={index}
										className="overflow-hidden border-none shadow-md group"
									>
										<div className="relative h-64 overflow-hidden">
											<Image
												src={`/image-34.jpg?height=300&width=300&text=Home ${
													index + 1
												}`}
												alt={`Home Product ${index + 1}`}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
											<div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/10"></div>
										</div>
										<CardContent className="p-4">
											<div className="flex items-center mb-2">
												{Array.from({ length: 5 }).map((_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < 4
																? "text-green-600 fill-green-600"
																: "text-gray-300"
														}`}
													/>
												))}
												<span className="ml-1 text-sm text-gray-600">
													(4.0)
												</span>
											</div>
											<h3 className="mb-1 font-bold">
												Home & Garden {index + 1}
											</h3>
											<div className="flex items-center justify-between">
												<span className="font-bold text-green-600">
													₹{Math.floor(Math.random() * 500) + 100}
												</span>
												<Button
													size="sm"
													className="text-white bg-green-600 hover:bg-green-700"
												>
													<ShoppingCart className="w-4 h-4 mr-1" /> Add
												</Button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container px-4 mx-auto">
					<div className="max-w-4xl mx-auto">
						<ContactForm
							formType="order"
							title="Need Help with Your Order?"
							subtitle="Have questions about our products or need assistance with your order? Fill out the form below and our team will get back to you as soon as possible."
							className="bg-white"
						/>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
