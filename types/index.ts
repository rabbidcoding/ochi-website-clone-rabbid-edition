import React from "react";

/**
 * Properties for kinetic typography hover transition elements.
 */
export type TtextHoverProps = {
	/** Primary text label shown in resting state */
	title1: string;
	/** Secondary text label sliding in on hover */
	title2: string;
};

/**
 * Properties for horizontal marquee ticker containers.
 */
export type TlogoMarqueeProps = {
	/** Renderable marquee node content */
	children: React.ReactNode;
	/** Velocity coefficient multiplier for continuous animation */
	baseVelocity: number;
};

/**
 * Properties for full-width title marquee section components.
 */
export type TMarqueeProps = {
	/** Text string rendered in continuous marquee ticker */
	title: string;
	/** CSS styling classes applied to text elements */
	className: string;
};

/**
 * Properties for interactive hyperlink hover components.
 */
export type TLinkHoverProps = {
	/** Display label for hyperlink */
	title: string;
	/** Navigation target URL string */
	href: string;
	/** Optional additional styling classes */
	className?: string;
};

/**
 * Properties for standard primary call-to-action buttons.
 */
export type TButtonProps = {
	/** Button call-to-action text */
	title: string;
	/** Target URL path string */
	href: string;
};

/**
 * Properties for rounded animated background container wrappers.
 */
export type TRoundedProps = {
	/** Wrapped inner element content */
	children: React.ReactNode;
	/** Optional container CSS class names */
	className?: string;
	/** Background color applied to inner hover overlay */
	backgroundColor: string;
};
