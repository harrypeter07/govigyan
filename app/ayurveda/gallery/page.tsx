import React from "react";

export default function AyurvedaGallery() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6">Ayurveda Gallery</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Add your gallery images here */}
				<div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
					<p className="text-gray-500">Gallery Coming Soon</p>
				</div>
			</div>
		</div>
	);
}
