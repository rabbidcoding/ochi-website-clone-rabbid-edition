"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { APPLE_EASE_FLUID } from "@/motion";

/**
 * Interface properties for single project card items.
 */
export interface ProjectItem {
	/** Numeric unique identifier for left/right positioning calculation */
	id: number;
	/** Project title string */
	title: string;
	/** Target URL string */
	href: string;
	/** Image static import source */
	src: StaticImageData;
}

/**
 * ProjectCard Component
 * -----------------------------------------------------------------------------
 * Interactive portfolio project card item featuring dynamic Apple-style scale transitions
 * and staggered kinetic typography text overlay on mouse hover events.
 *
 * @param {{ item: ProjectItem }} props - Project item details
 * @returns {JSX.Element} Interactive portfolio card
 */
export default function ProjectCard({ item }: { item: ProjectItem }): JSX.Element {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const isEven = item.id % 2 === 0;
	const textOverlayPositionStyle = {
		left: isEven ? "-15%" : "90%",
	};

	return (
		<div>
			<div className="relative w-full group">
				{/* Project Thumbnail Image Container */}
				<Link
					href={item.href}
					className="rounded-[10px] overflow-hidden hover:scale-[0.97] active:scale-[0.95] transition-transform cursor-pointer transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] block will-change-transform transform-gpu"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<Image
						src={item.src}
						alt={`${item.title} project preview screenshot`}
						className="w-full object-cover rounded-[10px] group-hover:scale-[1.08] transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform transform-gpu"
					/>
				</Link>

				{/* Staggered Character Text Overlay */}
				<div
					style={textOverlayPositionStyle}
					className="absolute w-fit flex top-[50%] sm:hidden -translate-x-[30%] -translate-y-1/2 overflow-hidden z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xm:hidden">
					{item.title.split("").map((char: string, index: number) => (
						<motion.span
							key={index}
							initial={{ y: "100%" }}
							animate={isHovered ? { y: 0 } : { y: "100%" }}
							transition={{
								delay: index * 0.02,
								duration: 0.6,
								ease: APPLE_EASE_FLUID,
							}}
							className="text-[165px] leading-none inline-block uppercase font-FoundersGrotesk text-about font-bold text-center pointer-events-none transform-gpu">
							{char}
						</motion.span>
					))}
				</div>
			</div>
		</div>
	);
}
