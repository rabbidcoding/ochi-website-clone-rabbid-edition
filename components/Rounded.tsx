"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TRoundedProps } from "@/types";

/**
 * Rounded Component
 * -----------------------------------------------------------------------------
 * High-end GSAP physics wrapper component. Creates a liquid circular background
 * fill animation that morphs across the element on mouse enter and leave events
 * using Apple Natural Spring physics curves.
 *
 * @param {TRoundedProps} props - Children node elements, custom classes, and fill background color
 * @returns {JSX.Element} Interactive GSAP rounded animation container
 */
export default function Rounded({
	children,
	className = "",
	backgroundColor,
	...attributes
}: TRoundedProps): JSX.Element {
	const circleRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		timelineRef.current = gsap.timeline({ paused: true });
		timelineRef.current
			.to(
				circleRef.current,
				{ top: "-25%", width: "150%", duration: 0.3, ease: "power4.out" },
				"enter"
			)
			.to(
				circleRef.current,
				{ top: "-150%", width: "125%", duration: 0.25, ease: "expo.out" },
				"exit"
			);

		return () => {
			if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
			timelineRef.current?.kill();
		};
	}, []);

	const handleMouseEnter = () => {
		if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
		timelineRef.current?.tweenFromTo("enter", "exit");
	};

	const handleMouseLeave = () => {
		timeoutIdRef.current = setTimeout(() => {
			timelineRef.current?.play();
		}, 150);
	};

	return (
		<div
			className={`rounded-full relative flex items-center justify-center overflow-hidden group ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...attributes}>
			{children}
			<div
				ref={circleRef}
				style={{ backgroundColor }}
				className="w-full h-[150%] absolute rounded-[50%] top-full pointer-events-none transform-gpu will-change-transform"
			/>
		</div>
	);
}
