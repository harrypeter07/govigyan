"use client";

import type React from "react";

import { motion } from "framer-motion";

interface PageTransitionProps {
	children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 20, scale: 0.98 }}
			transition={{
				duration: 0.3,
				ease: [0.43, 0.13, 0.23, 0.96],
			}}
		>
			{children}
		</motion.div>
	);
}
