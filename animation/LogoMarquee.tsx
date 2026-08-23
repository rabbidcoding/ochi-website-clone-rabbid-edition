"use client";
import React, { useRef } from "react";
import { TlogoMarqueeProps } from "@/types";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
	wrap,
} from "framer-motion";

/**
 * LogoMarquee / TextMarquee Animation Engine
 * -----------------------------------------------------------------------------
 * Infinite continuous horizontal scrolling ticker component linked to viewport scroll velocity.
 * Dynamically accelerates marquee movement speed on fast scroll interactions and smooths velocity
 * using high-damped spring physics.
 *
 * @param {TlogoMarqueeProps} props - Children node content and base velocity speed multiplier
 * @returns {JSX.Element} Continuous scroll-driven marquee ticker
 */
export default function LogoMarquee({
	children,
	baseVelocity = 100,
}: TlogoMarqueeProps): JSX.Element {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 300,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((_time, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="overflow-hidden flex whitespace-nowrap flex-wrap select-none">
			<motion.div
				className="flex whitespace-nowrap items-center flex-nowrap transform-gpu will-change-transform"
				style={{ x }}>
				<span className="flex">{children}</span>
				<span className="flex">{children}</span>
				<span className="flex">{children}</span>
				<span className="flex">{children}</span>
			</motion.div>
		</div>
	);
}
