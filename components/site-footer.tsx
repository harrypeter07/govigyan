import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, Twitter, Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* About */}
					<div>
						<Link href="/" className="inline-block mb-6">
							<Image
								src="/image-34.jpg?height=60&width=180"
								alt="Go Vigyan Logo"
								width={180}
								height={60}
								className="h-12 w-auto"
							/>
						</Link>
						<p className="text-gray-400 mb-6">
							Go Vigyan Anusandhan Kendra (GVAK) is a Non-Government
							Organization on a mission to rekindle the age-old bond between
							humans and cows.
						</p>
						<Button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold">
							<Heart className="mr-2 h-4 w-4" /> Donate Now
						</Button>
					</div>

					{/* Links */}
					<div>
						<h3 className="text-xl font-bold mb-6">Links</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about-us"
									className="text-gray-400 hover:text-white transition-colors"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									href="/cow-based-economy"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Cow Based Rural & Self Employment
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/donate"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Donations
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="lg:col-span-2">
						<h3 className="text-xl font-bold mb-6">Contact</h3>
						<p className="text-gray-400 mb-4">
							Kamdhenu Bhavan, Pt. Baccharaj Vyas Square, Chitar Oli, Mahal,
							Nagpur, India
						</p>
						<ul className="space-y-3 mb-6">
							<li className="flex items-start">
								<Mail className="h-5 w-5 mr-3 mt-0.5 text-amber-400" />
								<Link
									href="mailto:info@govigyan.com"
									className="text-gray-400 hover:text-white transition-colors"
								>
									info@govigyan.com
								</Link>
							</li>
							<li className="flex items-start">
								<Phone className="h-5 w-5 mr-3 mt-0.5 text-amber-400" />
								<Link
									href="tel:07122772273"
									className="text-gray-400 hover:text-white transition-colors"
								>
									+0712-2772273, 2734182
								</Link>
							</li>
						</ul>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Instagram className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 py-6">
					<p className="text-gray-500 text-center">
						© {new Date().getFullYear()}{" "}
						<span className="text-amber-400">Go Vigyan Anusandhan Kendra</span>.
						All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
