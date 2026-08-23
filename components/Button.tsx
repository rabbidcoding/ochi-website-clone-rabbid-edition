import React from "react";
import Link from "next/link";
import { TButtonProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

/**
 * Primary Call-To-Action Button Component
 * -----------------------------------------------------------------------------
 * Interactive Pill button component with an expanding arrow indicator icon
 * on hover transitions powered by Apple Fluid interactive physics.
 *
 * @param {TButtonProps} props - Button destination link and title label string
 * @returns {JSX.Element} Interactive call to action button
 */
export default function Button({ href, title }: TButtonProps): JSX.Element {
	return (
		<div className="flex flex-col pb-[10px] w-fit">
			<div className="flex items-center gap-[5px] group">
				{/* Pill Container & Label */}
				<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer active:scale-95 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu">
					<Link
						className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
						href={href}>
						{title}
					</Link>
				</div>

				{/* Hover-Expanding Arrow Indicator Icon Circle */}
				<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-[50px] group-hover:bg-secondry transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer scale-0 group-hover:scale-100 transform-gpu sm:hidden xm:hidden">
					<span className="small-text font-normal text-secondry group-hover:text-background">
						<ArrowUpRight strokeWidth={1.25} size={24} />
					</span>
				</div>
			</div>
		</div>
	);
}
