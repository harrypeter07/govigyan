"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample product data - replace with your actual products
const products = [
	{
		id: 1,
		title: "Panchagavya Ghrita",
		price: "₹450",
		rating: 5,
		image: "/image-34.jpg",
		description: "Traditional Ayurvedic formulation",
		category: "health",
	},
	{
		id: 2,
		title: "Cow Urine Ark",
		price: "₹250",
		rating: 4.5,
		image: "/image-34.jpg",
		description: "Pure and natural cow urine distillate",
		category: "health",
	},
	{
		id: 3,
		title: "Herbal Cow Dung Soap",
		price: "₹120",
		rating: 4.8,
		image: "/image-34.jpg",
		description: "Natural cleansing soap with herbal benefits",
		category: "personal",
	},
	{
		id: 4,
		title: "Panchagavya Hair Oil",
		price: "₹350",
		rating: 4.7,
		image: "/image-34.jpg",
		description: "Nourishing hair oil with five cow products",
		category: "personal",
	},
];

const categories = ["all", "health", "personal", "home"];

export default function Shop() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [cart, setCart] = useState([]);

	// Filter products based on search and category
	const filteredProducts = products.filter((product) => {
		const matchesSearch =
			product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			product.description.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || product.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const addToCart = (product) => {
		setCart([...cart, product]);
		// You can add more sophisticated cart management here
	};

	return (
		<PageTransition>
			<HeroSection
				title="Go Vigyan Shop"
				subtitle="Authentic cow-based products for health, wellness, and sustainable living"
				imageSrc="/image-34.jpg?height=600&width=1920"
				buttonText="Explore Products"
				buttonLink="#products"
				buttonIcon={<ShoppingCart className="h-4 w-4" />}
			/>

			{/* Featured Products Section */}
			<section className="py-16 bg-white" id="products" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Featured Products"
						subtitle="Our most popular cow-based products for health and wellness"
						centered
					/>

					<div className="flex justify-between items-center mb-8">
						<div className="relative flex-1 max-w-md">
							<Input
								type="text"
								placeholder="Search products..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10"
							/>
							<Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
						</div>
						<button className="relative p-2 ml-4">
							<ShoppingCart className="h-6 w-6" />
							{cart.length > 0 && (
								<span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
									{cart.length}
								</span>
							)}
						</button>
					</div>

					<Tabs defaultValue="all" className="max-w-6xl mx-auto">
						<div className="flex justify-between items-center mb-8">
							<TabsList>
								{categories.map((category) => (
									<TabsTrigger
										key={category}
										value={category}
										onClick={() => setSelectedCategory(category)}
									>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</TabsTrigger>
								))}
							</TabsList>
						</div>

						<TabsContent value={selectedCategory}>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
								{filteredProducts.map((product, index) => (
									<Card key={index} className="group overflow-hidden">
										<div className="relative aspect-square">
											<Image
												src={product.image}
												alt={product.title}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
										</div>
										<CardContent className="p-4">
											<div className="flex items-center mb-2">
												<div className="flex items-center">
													<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
													<span className="ml-1 text-sm text-gray-600">
														{product.rating}
													</span>
												</div>
											</div>
											<h3 className="font-bold mb-1">{product.title}</h3>
											<p className="text-sm text-gray-600 mb-4">
												{product.description}
											</p>
											<div className="flex justify-between items-center">
												<span className="font-bold text-green-600">
													{product.price}
												</span>
												<Button
													size="sm"
													className="bg-green-600 hover:bg-green-700 text-white"
													onClick={() => addToCart(product)}
												>
													<ShoppingCart className="h-4 w-4 mr-1" /> Add
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
				<div className="container mx-auto px-4">
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
