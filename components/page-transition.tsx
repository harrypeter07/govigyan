"use client";

import type React from "react";

import { motion } from "framer-motion";

interface PageTransitionProps {
	children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{
				duration: 0.3,
				ease: [0.43, 0.13, 0.23, 0.96],
			}}
		>
			{children}
		</motion.div>
	);
}
