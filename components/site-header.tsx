"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [activeLink, setActiveLink] = useState("/");
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);
	const headerRef = useRef<HTMLElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		// Set active link based on current path
		setActiveLink(window.location.pathname);

		// GSAP animations
		if (logoRef.current) {
			gsap.from(logoRef.current, {
				opacity: 0,
				x: -50,
				duration: 1,
				ease: "power3.out",
			});
		}

		if (navRef.current) {
			gsap.from(navRef.current.children, {
				opacity: 0,
				y: -20,
				duration: 0.8,
				stagger: 0.1,
				ease: "power3.out",
			});
		}

		// Header scroll animation
		if (headerRef.current) {
			gsap.to(headerRef.current, {
				scrollTrigger: {
					trigger: headerRef.current,
					start: "top top",
					end: "+=100",
					scrub: 1,
				},
				backgroundColor: "rgba(255, 255, 255, 0.95)",
				boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
				backdropFilter: "blur(10px)",
			});
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/training", label: "Training" },
		{ href: "/ayurveda", label: "Panchagavya Ayurved" },
		{ href: "/shop", label: "Shop" },
	];

	return (
		<header
			ref={headerRef}
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-500",
				scrolled
					? "bg-white/95 backdrop-blur-md shadow-lg py-2"
					: "bg-transparent py-3"
			)}
		>
			{/* Top Bar */}
			<div
				className={cn(
					"hidden md:block transition-all duration-500",
					scrolled
						? "opacity-0 h-0 overflow-hidden"
						: "opacity-100 py-2.5 bg-gradient-to-r from-green-900/20 to-amber-900/20 backdrop-blur-sm border-b border-white/10"
				)}
			>
				<div className="container mx-auto px-8">
					<div className="flex justify-between items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="text-sm text-white/90 font-medium hover:text-white transition-colors"
						>
							Go Vigyan Anusandhan Kendra
						</motion.div>
						<div className="flex items-center space-x-8">
							{[
								{ icon: Phone, text: "+0712-2772273, 2734182" },
								{ icon: Mail, text: "info@govigyan.com" },
								{ icon: MapPin, text: "Kamdhenu Bhavan, Nagpur, India" },
							].map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 * index }}
									className="flex items-center text-sm text-white/90 hover:text-white transition-colors group"
								>
									<item.icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
									<span>{item.text}</span>
									<div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="container mx-auto px-8">
				<div className="flex justify-between items-center py-2">
					<div ref={logoRef} className="flex-shrink-0">
						<Link href="/" className="flex items-center group">
							<Image
								src="/image-34.jpg"
								alt="Go Vigyan Logo"
								width={140}
								height={45}
								className="transition-all duration-300 group-hover:scale-105"
							/>
							<div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav ref={navRef} className="hidden md:flex items-center space-x-8">
						{navLinks.map((link, index) => (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								className="relative group"
								onMouseEnter={() => setHoveredLink(link.href)}
								onMouseLeave={() => setHoveredLink(null)}
							>
								<Link
									href={link.href}
									className={cn(
										"relative text-gray-700 hover:text-green-700 font-medium transition-colors py-2 flex items-center",
										activeLink === link.href && "text-green-700"
									)}
								>
									{link.label}
									{link.href !== "/shop" && (
										<ChevronDown className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
									)}
									<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
									{activeLink === link.href && (
										<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 transform origin-left scale-x-100" />
									)}
								</Link>
								<AnimatePresence>
									{hoveredLink === link.href && link.href !== "/shop" && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											transition={{ duration: 0.2 }}
											className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 mt-2"
										>
											<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-amber-400 rounded-t-lg" />
											<div className="px-4 py-2">
												<Link
													href={`${link.href}/overview`}
													className="block text-gray-700 hover:text-green-700 py-1"
												>
													Overview
												</Link>
												<Link
													href={`${link.href}/features`}
													className="block text-gray-700 hover:text-green-700 py-1"
												>
													Features
												</Link>
												<Link
													href={`${link.href}/gallery`}
													className="block text-gray-700 hover:text-green-700 py-1"
												>
													Gallery
												</Link>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/30">
								Donate Now
							</Button>
						</motion.div>
					</nav>

					{/* Mobile Navigation */}
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden text-gray-700 hover:bg-green-50"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="w-[300px] sm:w-[400px] bg-gradient-to-b from-white to-green-50">
							<div className="flex justify-between items-center mb-8">
								<Image
									src="/image-34.jpg"
									alt="Go Vigyan Logo"
									width={120}
									height={40}
									className="transition-all duration-300"
								/>
							</div>
							<div className="flex flex-col space-y-4">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={cn(
											"text-lg font-medium py-2 border-b border-green-100 hover:border-green-200 transition-colors duration-300",
											activeLink === link.href
												? "text-green-700"
												: "text-gray-700 hover:text-green-700"
										)}
									>
										{link.label}
									</Link>
								))}
								<div className="pt-4">
									<Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-green-500/30">
										Donate Now
									</Button>
								</div>
								<div className="pt-6 space-y-4">
									{[
										{ icon: Phone, text: "+0712-2772273, 2734182" },
										{ icon: Mail, text: "info@govigyan.com" },
										{ icon: MapPin, text: "Kamdhenu Bhavan, Nagpur, India" },
									].map((item, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: 0.1 * index }}
											className="flex items-center text-sm group"
										>
											<item.icon className="h-4 w-4 mr-2 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
											<span className="group-hover:text-green-700 transition-colors duration-300">
												{item.text}
											</span>
										</motion.div>
									))}
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
