"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface HeroSectionProps {
	title: string;
	subtitle: string;
	imageSrc: string;
	buttonText?: string;
	buttonLink?: string;
	buttonIcon?: React.ReactNode;
	overlay?: boolean;
	height?: string;
}

export function HeroSection({
	title,
	subtitle,
	imageSrc,
	buttonText,
	buttonLink = "#",
	buttonIcon,
	overlay = true,
	height = "h-[500px] md:h-[600px]",
}: HeroSectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		if (titleRef.current) {
			gsap.from(titleRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power4.out",
			});
		}
	}, []);

	return (
		<section className="relative" data-scroll-section>
			<div className={`relative w-full ${height}`}>
				<Image
					src={imageSrc || "/image-34.jpg"}
					alt={title}
					fill
					className="object-cover transition-transform duration-700 hover:scale-105"
					priority
				/>
				{overlay && <div className="absolute inset-0 bg-black/50" />}
				<div className="absolute inset-0 flex items-center">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl">
							<h1
								ref={titleRef}
								className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 text-white drop-shadow-lg"
							>
								{title}
							</h1>
							<motion.p
								className="text-lg md:text-xl mb-8 text-white drop-shadow-md hover:text-amber-300 transition-colors duration-300"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								{subtitle}
							</motion.p>
							{buttonText && (
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 1 }}
								>
									<Button
										className="bg-amber-400 hover:bg-amber-500 text-black font-semibold transform hover:scale-105 transition-all duration-300"
										asChild
									>
										<a href={buttonLink}>
											{buttonIcon && <span className="mr-2">{buttonIcon}</span>}
											{buttonText}
										</a>
									</Button>
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
