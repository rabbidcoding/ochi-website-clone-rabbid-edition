import React from "react";
import Link from "next/link";
import { TLinkHoverProps } from "@/types";

/**
 * LinkHover Animation Component
 * -----------------------------------------------------------------------------
 * Custom animated hyperlink wrapper featuring pseudo-element underline transitions
 * using cubic-bezier easing for high-end typography hover effects. Automatically
 * attaches target="_blank" rel="noopener noreferrer" for external URLs.
 *
 * @param {TLinkHoverProps} props - Destination href, title string, and custom styling
 * @returns {JSX.Element} Animated link element
 */
export default function LinkHover({ href, title, className = "" }: TLinkHoverProps): JSX.Element {
	const isExternal = href.startsWith("http");

	const baseClasses =
		"font-NeueMontreal relative ease-[0.19,1,0.22,1] text-secondry " +
		"before:absolute before:content-[''] before:left-0 before:block before:w-full before:bg-secondry before:transition before:duration-[0.6s] " +
		"after:absolute after:content-[''] after:left-0 after:block after:w-full after:bg-secondry after:transition after:duration-[0.6s] " +
		"before:scale-x-0 before:origin-left after:origin-right after:delay-[0.25s] " +
		"hover:before:scale-x-100 hover:before:delay-[0.25s] hover:after:scale-x-0 hover:after:delay-0";

	return (
		<div>
			<Link
				className={`${baseClasses} ${className}`}
				href={href}
				{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
				{title}
			</Link>
		</div>
	);
}
