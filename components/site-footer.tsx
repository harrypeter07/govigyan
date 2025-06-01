"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SiteFooter() {
	const footerRef = useRef<HTMLElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Footer scroll animation
		if (footerRef.current) {
			gsap.from(footerRef.current, {
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top 80%",
					end: "top 20%",
					scrub: 1,
				},
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
			});
		}

		// Logo animation
		if (logoRef.current) {
			gsap.from(logoRef.current, {
				scrollTrigger: {
					trigger: logoRef.current,
					start: "top 80%",
					end: "top 20%",
					scrub: 1,
				},
				opacity: 0,
				x: -30,
				duration: 1,
				ease: "power3.out",
			});
		}

		// Links animation
		if (linksRef.current) {
			gsap.from(linksRef.current.children, {
				scrollTrigger: {
					trigger: linksRef.current,
					start: "top 80%",
					end: "top 20%",
					scrub: 1,
				},
				opacity: 0,
				y: 20,
				duration: 0.8,
				stagger: 0.1,
				ease: "power3.out",
			});
		}

		// Contact animation
		if (contactRef.current) {
			gsap.from(contactRef.current.children, {
				scrollTrigger: {
					trigger: contactRef.current,
					start: "top 80%",
					end: "top 20%",
					scrub: 1,
				},
				opacity: 0,
				y: 20,
				duration: 0.8,
				stagger: 0.1,
				ease: "power3.out",
			});
		}
	}, []);

	return (
		<footer
			ref={footerRef}
			className="bg-gradient-to-b from-gray-900 to-gray-950 text-white"
		>
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* About */}
					<div ref={logoRef} className="relative group">
						<Link href="/" className="inline-block mb-6">
							<Image
								src="/image-34.jpg?height=60&width=180"
								alt="Go Vigyan Logo"
								width={180}
								height={60}
								className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
						</Link>
						<p className="text-gray-400 mb-6 leading-relaxed">
							Go Vigyan Anusandhan Kendra (GVAK) is a Non-Government
							Organization on a mission to rekindle the age-old bond between
							humans and cows.
						</p>
						<Button className="bg-amber-400 hover:bg-amber-500 text-green-900 font-semibold shadow-lg hover:shadow-amber-400/30 transition-all duration-300">
							<Heart className="mr-2 h-4 w-4" /> Donate Now
						</Button>
					</div>

					{/* Links */}
					<div ref={linksRef}>
						<h3 className="text-xl font-bold mb-6 relative inline-block">
							Links
							<div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
						</h3>
						<ul className="space-y-3">
							{[
								{ href: "/about-us", label: "About us" },
								{
									href: "/cow-based-economy",
									label: "Cow Based Rural & Self Employment",
								},
								{ href: "/blog", label: "Blog" },
								{ href: "/donate", label: "Donations" },
							].map((link, index) => (
								<motion.li
									key={link.href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.1 * index }}
								>
									<Link
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors group relative inline-block group-hover:scale-105 group-hover:text-amber-400 transition-transform duration-200"
									>
										{link.label}
										<div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
									</Link>
								</motion.li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div ref={contactRef} className="lg:col-span-2">
						<h3 className="text-xl font-bold mb-6 relative inline-block">
							Contact
							<div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
						</h3>
						<p className="text-gray-400 mb-4 leading-relaxed">
							Kamdhenu Bhavan, Pt. Baccharaj Vyas Square, Chitar Oli, Mahal,
							Nagpur, India
						</p>
						<ul className="space-y-3 mb-6">
							{[
								{
									icon: Mail,
									href: "mailto:info@govigyan.com",
									text: "info@govigyan.com",
								},
								{
									icon: Phone,
									href: "tel:07122772273",
									text: "+0712-2772273, 2734182",
								},
							].map((item, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.1 * index }}
									className="flex items-start group"
								>
									<item.icon className="h-5 w-5 mr-3 mt-0.5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
									<Link
										href={item.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{item.text}
									</Link>
								</motion.li>
							))}
						</ul>
						<div className="flex space-x-4">
							{[
								{ icon: Twitter, href: "#" },
								{ icon: Facebook, href: "#" },
								{ icon: Instagram, href: "#" },
							].map((social, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 * index }}
								>
									<Link
										href={social.href}
										className="text-gray-400 hover:text-white transition-colors group"
									>
										<social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
									</Link>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 py-6">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-gray-500 text-center"
					>
						© {new Date().getFullYear()}{" "}
						<span className="text-amber-400">Go Vigyan Anusandhan Kendra</span>.
						All Rights Reserved.
					</motion.p>
				</div>
			</div>
		</footer>
	);
}
