import React from "react";
import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

/**
 * Marquee Component
 * -----------------------------------------------------------------------------
 * Continuous infinite ticker component displaying bold Founders Grotesk typography
 * scrolling seamlessly across the horizontal viewport axis.
 *
 * @param {TMarqueeProps} props - Title text string and styling classes
 * @returns {JSX.Element} Continuous horizontal marquee section
 */
export default function Marquee({ title, className }: TMarqueeProps): JSX.Element {
	return (
		<TextMarquee baseVelocity={0.7}>
			{/* Primary Ticker Segment */}
			<span
				className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white whitespace-nowrap tracking-[-5px] block ${className}`}>
				{title} &nbsp;
			</span>

			{/* Secondary Seamless Repeat Ticker Segment */}
			<span
				className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white whitespace-nowrap tracking-[-5px] block ${className}`}>
				{title} &nbsp;
			</span>
		</TextMarquee>
	);
}
