import React from "react";

export default function ShopFeatures() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6">Shop Features</h1>
			<div className="grid gap-6">
				<div className="p-6 bg-white rounded-lg shadow">
					<h2 className="text-xl font-semibold mb-4">Our Features</h2>
					<ul className="space-y-4">
						<li className="flex items-center">
							<span className="mr-2">✓</span>
							Quality Products
						</li>
						<li className="flex items-center">
							<span className="mr-2">✓</span>
							Fast Shipping
						</li>
						<li className="flex items-center">
							<span className="mr-2">✓</span>
							24/7 Customer Support
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
