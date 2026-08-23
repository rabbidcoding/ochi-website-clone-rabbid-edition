import React from "react";
import { TtextHoverProps } from "@/types";

/**
 * TextHover Animation Component
 * -----------------------------------------------------------------------------
 * Creates a dual-layer kinetic typography hover transition where the primary label
 * translates upward out of view while the secondary label slides up into frame.
 *
 * @param {TtextHoverProps} props - Property containing title1 and title2 strings
 * @returns {JSX.Element} Kinetic hover animation text element
 */
export default function TextHover({ title1, title2 }: TtextHoverProps): JSX.Element {
	return (
		<div className="group overflow-hidden cursor-pointer transition-all ease-in-out duration-200">
			<div className="relative transition-all ease-in-out duration-500">
				<div>
					{/* Primary default visible label line */}
					<span className="translate-y-[0%] group-hover:translate-y-[-100%] absolute left-0 transition-all ease-in-out duration-500 block">
						<span className="translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500 block">
							{title1}
						</span>
					</span>

					{/* Secondary target label line on hover */}
					<span className="relative transition-all ease-in-out duration-500 block">
						<span className="translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500 block">
							{title2}
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}
