"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

/**
 * Navbar Component
 * -----------------------------------------------------------------------------
 * Main navigation header component. Implements auto-hide on downward scroll,
 * fixed dynamic backdrop blurring, dynamic Framer Motion variants,
 * and responsive mobile drawer integration.
 *
 * @returns {JSX.Element} Sticky top navigation bar
 */
export default function Navbar(): JSX.Element {
	const [hidden, setHidden] = useState<boolean>(false);
	const { scrollY } = useScroll();

	/**
	 * Toggle navbar visibility based on scroll direction.
	 */
	useMotionValueEvent(scrollY, "change", (latestScrollY: number) => {
		const previousScrollY = scrollY.getPrevious();
		if (previousScrollY && latestScrollY > previousScrollY && latestScrollY > 100) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<>
			{/* Desktop Navigation Header */}
			<motion.nav
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "visible"}>
				{/* Brand Logo Container */}
				<div className="w-[50%]">
					<Link href="/">
						<Image
							src={logo}
							alt="OCHI primary agency logo"
							width={70}
							height={70}
							priority
						/>
					</Link>
				</div>

				{/* Desktop Navigation Menu Links */}
				<div className="flex gap-x-[20px] w-[50%]">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
								item.id === 5 ? "ml-auto" : ""
							}`}
							href={item.href}>
							<TextHover title1={item.title} title2={item.title} />
						</Link>
					))}
				</div>
			</motion.nav>

			{/* Mobile Navigation Drawer */}
			<MobileNav />
		</>
	);
}
