import { Variants, Transition } from "framer-motion";

/**
 * Apple Design System Motion Physics Profiles
 * -----------------------------------------------------------------------------
 * Ultra-refined spring physics and natural fluid cubic-bezier curves modeled after
 * Apple iOS/macOS Spring & Fluid Interaction Guidelines.
 */

/** Apple Default Natural Fluid Curve: cubic-bezier(0.16, 1, 0.3, 1) */
export const APPLE_EASE_FLUID = [0.16, 1, 0.3, 1] as const;

/** Apple Snappy Interactive Curve: cubic-bezier(0.25, 0.1, 0.25, 1.0) */
export const APPLE_EASE_SNAPPY = [0.25, 0.1, 0.25, 1.0] as const;

/** Apple Natural Spring Physics Configuration */
export const APPLE_SPRING_DEFAULT: Transition = {
	type: "spring",
	stiffness: 170,
	damping: 26,
	mass: 1,
};

/** Apple Responsive Dynamic Spring Configuration */
export const APPLE_SPRING_RESPONSIVE: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 30,
	mass: 0.8,
};

/**
 * Navigation Bar Motion Variants (Apple Fluid Physics)
 */
export const navVariants: Variants = {
	hidden: { y: "-100%" },
	visible: { y: 0, transition: { ease: APPLE_EASE_FLUID, duration: 0.7 } },
	vissible: { y: 0, transition: { ease: APPLE_EASE_FLUID, duration: 0.7 } },
};

/**
 * Secondary Navigation Bar Motion Variants
 */
export const navVariants1: Variants = {
	hidden: { y: "-100%" },
	visible: { y: 0, transition: { ease: APPLE_EASE_FLUID, duration: 0.7 } },
	vissible: { y: 0, transition: { ease: APPLE_EASE_FLUID, duration: 0.7 } },
};

/**
 * Footer Component Entrance Variants
 */
export const footerVarient: Variants = {
	hidden: { y: 150, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: APPLE_EASE_FLUID } },
	vissible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: APPLE_EASE_FLUID } },
};

/**
 * Kinetic Typography Mask Reveal Variants (Apple Fluid)
 */
export const animation: Variants = {
	initial: { y: "100%" },
	visible: {
		y: "0",
		transition: {
			duration: 0.8,
			ease: APPLE_EASE_FLUID,
		},
	},
};

/**
 * Mobile Navigation Drawer Slide In Variants (Apple Spring Physics)
 */
export const menuSlide: Variants = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: APPLE_EASE_FLUID } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: APPLE_EASE_FLUID },
	},
};

/**
 * Staggered Mobile Menu Item Slide Variants
 */
export const slide = {
	initial: { x: 80 },
	enter: (i: number) => ({
		x: 0,
		transition: { duration: 0.8, ease: APPLE_EASE_FLUID, delay: 0.05 * i },
	}),
	exit: (i: number) => ({
		x: 80,
		transition: { duration: 0.8, ease: APPLE_EASE_FLUID, delay: 0.05 * i },
	}),
};

/**
 * Scale Transition Variants for Mobile Menu Indicator Dots
 */
export const scale: Variants = {
	open: { scale: 1, transition: APPLE_SPRING_RESPONSIVE },
	closed: { scale: 0, transition: { duration: 0.3, ease: APPLE_EASE_SNAPPY } },
};

/**
 * Route Transition Text Animation Variants
 */
export const text: Variants = {
	initial: {
		opacity: 1,
	},
	enter: {
		opacity: 0,
		top: -100,
		transition: { duration: 0.75, delay: 0.35, ease: APPLE_EASE_FLUID },
		transitionEnd: { top: "47.5%" },
	},
	exit: {
		opacity: 1,
		top: "40%",
		transition: { duration: 0.5, delay: 0.4, ease: APPLE_EASE_SNAPPY },
	},
};

/**
 * SVG Dynamic Bezier Path Morph Factory
 */
export const curve = (initialPath: string, targetPath: string): Variants => {
	return {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 0.75, delay: 0.35, ease: APPLE_EASE_FLUID },
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.75, ease: APPLE_EASE_FLUID },
		},
	};
};

/**
 * Page Transition SVG Container Translation Variants
 */
export const translate: Variants = {
	initial: {
		top: "-300px",
	},
	enter: {
		top: "-100vh",
		transition: { duration: 0.75, delay: 0.35, ease: APPLE_EASE_FLUID },
		transitionEnd: {
			top: "100vh",
		},
	},
	exit: {
		top: "-300px",
		transition: { duration: 0.75, ease: APPLE_EASE_FLUID },
	},
};

/**
 * Opacity Transition Variants
 */
export const opacity: Variants = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 0.75,
		transition: { duration: 0.9, delay: 0.2, ease: APPLE_EASE_FLUID },
	},
};

/**
 * Vertical Slide Up Page Exit Variants
 */
export const slideUp: Variants = {
	initial: {
		top: 0,
	},
	exit: {
		top: "-100vh",
		transition: { duration: 0.8, ease: APPLE_EASE_FLUID, delay: 0.2 },
	},
};
