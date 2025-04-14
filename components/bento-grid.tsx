"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface BentoGridProps {
	items: {
		title: string;
		description: string;
		image?: string;
		className?: string;
		imageClassName?: string;
	}[];
}

export function BentoGrid({ items }: BentoGridProps) {
	const gridRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		if (!gridRef.current) return;

		const cards = cardsRef.current.filter(
			(card): card is HTMLDivElement => card !== null
		);

		// Reset any existing animations
		gsap.set(cards, { opacity: 0, x: 0 });

		cards.forEach((card, index) => {
			// Alternate between left and right animations
			const startX = index % 2 === 0 ? -100 : 100;

			gsap.fromTo(
				card,
				{
					opacity: 0,
					x: startX,
					scale: 0.8,
				},
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
						end: "bottom center",
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		// Cleanup
		return () => {
			cards.forEach((card) => {
				const trigger = ScrollTrigger.getById(card.id);
				if (trigger) trigger.kill();
			});
		};
	}, []);

	return (
		<div
			ref={gridRef}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-8xl mx-auto"
		>
			{items.map((item, index) => (
				<motion.div
					key={index}
					ref={(el) => {
						cardsRef.current[index] = el;
					}}
					className={`group ${item.className || ""} ${
						index === 0 ? "md:col-span-2 lg:col-span-2" : ""
					}`}
					whileHover={{
						y: -10,
						scale: 1.02,
						transition: { duration: 0.3 },
					}}
				>
					<Card className="overflow-hidden h-full bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/90 dark:to-teal-800/80 border-none shadow-lg hover:shadow-2xl transition-all duration-300">
						<CardContent className="p-8 h-full flex flex-col">
							{item.image && (
								<div
									className={`relative mb-6 ${
										index === 0
											? "h-[400px] md:h-[500px]"
											: item.imageClassName || "h-64"
									}`}
								>
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
								</div>
							)}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
								viewport={{ once: true }}
								className="flex-1 flex flex-col justify-between"
							>
								<div>
									<h3 className="text-2xl md:text-3xl font-bold mb-4 text-teal-950 dark:text-teal-50 drop-shadow-sm">
										{item.title}
									</h3>
									<p className="text-lg md:text-xl text-teal-800 dark:text-teal-200 leading-relaxed">
										{item.description}
									</p>
								</div>
								<motion.div
									className="mt-6 inline-flex"
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<span className="text-teal-600 dark:text-teal-300 text-lg font-medium group-hover:underline">
										Learn more →
									</span>
								</motion.div>
							</motion.div>
						</CardContent>
					</Card>
				</motion.div>
			))}
		</div>
	);
}
