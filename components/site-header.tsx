"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [activeLink, setActiveLink] = useState("/");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		// Set active link based on current path
		setActiveLink(window.location.pathname);

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
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				scrolled
					? "bg-green-600/85 backdrop-blur-md shadow-md py-2"
					: "bg-green-600/70 backdrop-blur-sm py-4"
			)}
		>
			{/* Top Bar */}
			<div
				className={cn(
					"hidden md:block transition-all duration-300",
					scrolled
						? "opacity-0 h-0 overflow-hidden"
						: "opacity-100 py-2 bg-white/20 backdrop-blur-sm"
				)}
			>
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center">
						<div className="text-sm text-white font-medium">
							Go Vigyan Anusandhan Kendra
						</div>
						<div className="flex items-center space-x-6">
							<div className="flex items-center text-sm text-white">
								<Phone className="h-4 w-4 mr-2" />
								<span>+0712-2772273, 2734182</span>
							</div>
							<div className="flex items-center text-sm text-white">
								<Mail className="h-4 w-4 mr-2" />
								<span>info@govigyan.com</span>
							</div>
							<div className="flex items-center text-sm text-white">
								<MapPin className="h-4 w-4 mr-2" />
								<span>Kamdhenu Bhavan, Nagpur, India</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Link href="/" className="flex items-center">
							<Image
								src="/image-34.jpg"
								alt="Go Vigyan Logo"
								width={180}
								height={60}
								className={cn(
									"transition-all duration-300",
									scrolled ? "h-10" : "h-12"
								)}
							/>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									"text-white font-medium relative group transition-colors duration-300 hover:text-amber-300",
									activeLink === link.href && "text-amber-300"
								)}
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
						<Button
							className="bg-amber-400 hover:bg-amber-500 text-black font-semibold transform hover:scale-105 transition-all duration-300"
							asChild
						>
							<Link href="/contact">Contact Us</Link>
						</Button>
						{navLinks.map((link, index) => (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
							>
								<Link
									href={link.href}
									className={cn(
										"relative text-white hover:text-amber-200 font-medium transition-colors py-2",
										activeLink === link.href && "text-amber-200"
									)}
								>
									{link.label}
									{activeLink === link.href && (
										<motion.div
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-200"
											layoutId="navbar-underline"
										/>
									)}
								</Link>
							</motion.div>
						))}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<Button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold ml-4">
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
								className="md:hidden text-white hover:bg-green-700/50"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="w-[300px] sm:w-[400px] bg-green-50">
							<div className="flex justify-between items-center mb-8">
								<Image
									src="/image-34.jpg"
									alt="Go Vigyan Logo"
									width={140}
									height={50}
									className="h-10"
								/>
							</div>
							<div className="flex flex-col space-y-4">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={cn(
											"text-lg font-medium py-2 border-b border-green-100",
											activeLink === link.href
												? "text-green-600"
												: "text-gray-900"
										)}
									>
										{link.label}
									</Link>
								))}
								<div className="pt-4">
									<Button className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold">
										Donate Now
									</Button>
								</div>
								<div className="pt-6 space-y-4">
									<div className="flex items-center text-sm">
										<Phone className="h-4 w-4 mr-2 text-green-600" />
										<span>+0712-2772273, 2734182</span>
									</div>
									<div className="flex items-center text-sm">
										<Mail className="h-4 w-4 mr-2 text-green-600" />
										<span>info@govigyan.com</span>
									</div>
									<div className="flex items-center text-sm">
										<MapPin className="h-4 w-4 mr-2 text-green-600" />
										<span>Kamdhenu Bhavan, Nagpur, India</span>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
