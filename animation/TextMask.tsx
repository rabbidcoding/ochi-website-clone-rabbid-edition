"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { APPLE_EASE_FLUID } from "@/motion";

/**
 * Interface properties for MaskText component.
 */
export interface MaskTextProps {
	/** Array of text phrase strings rendered inside kinetic overflow masks */
	children: string[];
}

/**
 * MaskText Component
 * -----------------------------------------------------------------------------
 * High-performance kinetic typography mask animation. Reveals text phrases line by line
 * as they enter the viewport using hardware-accelerated Framer Motion transforms and
 * Apple Natural Fluid physics curves.
 *
 * @param {MaskTextProps} props - Text phrases array
 * @returns {JSX.Element} Animated typography mask container
 */
export default function MaskText({ children }: MaskTextProps): JSX.Element {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	});

	return (
		<div ref={ref}>
			{children.map((phrase, index) => (
				<div key={index} className="overflow-hidden">
					<motion.span
						className="block transform-gpu will-change-transform"
						initial={{ y: "100%", opacity: 0 }}
						animate={inView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
						transition={{
							duration: 0.85,
							delay: index * 0.08,
							ease: APPLE_EASE_FLUID,
						}}>
						{phrase}
					</motion.span>
				</div>
			))}
		</div>
	);
}
