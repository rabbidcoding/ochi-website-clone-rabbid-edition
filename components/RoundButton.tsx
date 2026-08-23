import React from "react";
import Link from "next/link";
import Rounded from "./Rounded";
import { ArrowUpRight } from "lucide-react";

/**
 * Interface properties for RoundButton Component.
 */
export interface RoundButtonProps {
	/** Navigation link URL target */
	href: string;
	/** Button label text */
	title: string;
	/** Optional class name customization */
	className?: string;
	/** Background color applied to hover fill element */
	bgcolor: string;
	/** Inline CSS properties for title typography */
	style?: React.CSSProperties;
}

/**
 * RoundButton Component
 * -----------------------------------------------------------------------------
 * Large rounded call-to-action button featuring animated background fill physics
 * and expanding diagonal arrow icon powered by Apple Natural Spring physics.
 *
 * @param {RoundButtonProps} props - Button configuration options
 * @returns {JSX.Element} Interactive round button
 */
export default function RoundButton({
	href,
	title,
	className = "",
	bgcolor,
	style,
}: RoundButtonProps): JSX.Element {
	return (
		<Link className="small-text uppercase font-normal font-NeueMontreal active:scale-95 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] inline-block transform-gpu" href={href}>
			<Rounded className="py-[6px]" backgroundColor={bgcolor}>
				{/* Button Label Container */}
				<span className="z-10 px-[10px] ml-[15px] py-[6px]" style={style}>
					{title}
				</span>

				{/* Animated Icon Circle */}
				<div
					className={`p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}>
					<ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
				</div>
			</Rounded>
		</Link>
	);
}
