"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "@/motion";

/**
 * Route title mapping dictionary for page transition overlays.
 */
const ROUTE_LABELS: Record<string, string> = {
	"/": "Home",
	"/services": "Services",
	"/presentation": "Our Work",
	"/ochi-team": "About Us",
	"/insights": "Insights",
	"/contact": "Contact Us",
	"/case": "Workiz Easy",
};

/**
 * Properties interface for Curve transition wrapper.
 */
export interface CurveProps {
	/** Children node elements wrapped by page transition overlay */
	children: React.ReactNode;
	/** Optional base background color for page container */
	backgroundColor?: string;
}

/**
 * Properties interface for internal SVG path renderer.
 */
interface SVGOverlayProps {
	height: number;
	width: number;
}

/**
 * Helper utility to map Framer Motion variants into execution objects.
 */
const createAnimationConfig = (variants: Variants) => ({
	variants,
	initial: "initial",
	animate: "enter",
	exit: "exit",
});

/**
 * Curve Page Transition Container Component
 * -----------------------------------------------------------------------------
 * Provides smooth SVG Bezier curve page entry and exit animations.
 * Tracks screen geometry dynamically and applies Framer Motion variants.
 *
 * @param {CurveProps} props - Page transition wrapper properties
 * @returns {JSX.Element} Animated page container with SVG overlay
 */
export default function Curve({ children, backgroundColor }: CurveProps): JSX.Element {
	const router = useRouter();
	const [viewportDimensions, setViewportDimensions] = useState<{
		width: number | null;
		height: number | null;
	}>({
		width: null,
		height: null,
	});

	/**
	 * Synchronize viewport dimensions on resize.
	 */
	const handleResize = useCallback(() => {
		setViewportDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize, { passive: true });
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	const currentRouteTitle = ROUTE_LABELS[router.route] || "Ochi";

	return (
		<div style={{ backgroundColor }}>
			{/* Initial opaque backdrop fallback while calculating dimensions */}
			<div
				style={{ opacity: viewportDimensions.width === null ? 1 : 0 }}
				className="fixed h w-full pointer-events-none left-0 top-0 z-50 bg-black"
			/>

			{/* Route Title Animation text overlay */}
			<motion.p
				className="absolute left-1/2 top-[40%] text-white text-[50px] z-[60] -translate-x-1/2 text-center"
				{...createAnimationConfig(text)}>
				{currentRouteTitle}
			</motion.p>

			{/* SVG Curved Path Morph Overlay */}
			{viewportDimensions.width !== null && viewportDimensions.height !== null && (
				<SVGOverlay height={viewportDimensions.height} width={viewportDimensions.width} />
			)}

			{children}
		</div>
	);
}

/**
 * Internal SVG Curved Bezier Animation Path Overlay
 */
const SVGOverlay: React.FC<SVGOverlayProps> = ({ height, width }) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg
			className="fixed h w-full pointer-events-none left-0 top-0 z-50"
			{...createAnimationConfig(translate)}>
			<motion.path {...createAnimationConfig(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};
