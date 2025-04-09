import React from "react";

export default function ShopOverview() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6">Shop Overview</h1>
			<div className="prose max-w-none">
				<p className="text-lg mb-4">
					Welcome to our shop! We offer a wide range of high-quality Ayurvedic
					products and supplements.
				</p>
				<div className="grid md:grid-cols-2 gap-6 mt-8">
					<div className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Our Products</h2>
						<p>
							Discover our carefully curated selection of authentic Ayurvedic
							products, sourced from trusted manufacturers and suppliers.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Quality Assurance</h2>
						<p>
							All our products undergo rigorous quality testing to ensure they
							meet the highest standards of purity and effectiveness.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
