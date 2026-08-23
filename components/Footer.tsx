import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo, rabbid, rabbid2 } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

/**
 * Animated Typography Heading Fragments
 */
const EYE_OPENING_PHRASE = ["Eye-", "opening"];
const PRESENTATIONS_PHRASE = ["PRESENTATIONS"];

/**
 * Footer Component
 * -----------------------------------------------------------------------------
 * Main Application Footer Component. Displays agency typography masking,
 * social links (S:), physical office locations (L:), navigation links (M:),
 * email contact address (E:), brand logo, legal terms, and subtle watermark icons.
 *
 * @returns {JSX.Element} Application footer
 */
export default function Footer(): JSX.Element {
	return (
		<footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			{/* Top Banner & Links Grid */}
			<div className="w-full flex justify-between sm:flex-col xm:flex-col">
				{/* Left Large Typography Mask Header */}
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h2 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{EYE_OPENING_PHRASE}</TextMask>
					</h2>
				</div>

				{/* Right Link Columns & Content */}
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h2 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
							<TextMask>{PRESENTATIONS_PHRASE}</TextMask>
						</h2>

						{/* Social Channels Section (S:) */}
						<div className="pt-[50px]">
							<p className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
								S:
							</p>
							{footerItems.map((item) => (
								<LinkHover
									title={item.title}
									href={item.href}
									key={item.id}
									className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
								/>
							))}
						</div>

						{/* Locations (L:) and Main Menu Links (M:) */}
						<div className="flex justify-between">
							{/* Physical Offices (L:) */}
							<div className="pt-[50px]">
								<p className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									L:
								</p>
								<div className="flex flex-col gap-y-[10px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="202-1965 W 4th Awe"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="Vancouver, Canada"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="30 Chukarina"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="St Lviv, Ukraine"
										href="/"
									/>
								</div>
							</div>

							{/* Main Navigation (M:) */}
							<div className="pt-[50px]">
								<p className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									M:
								</p>
								{footernavbarItems.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								))}
							</div>
						</div>

						{/* Direct Contact Email (E:) */}
						<div className="pt-[50px] flex gap-x-[20px]">
							<p className="paragraph font-medium font-NeueMontreal text-secondry">
								E:
							</p>
							<LinkHover
								title="hello@ochi.design"
								href="mailto:hello@ochi.design"
								className="before:h-[1px] after:h-[1px] paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Copyright and Legal Bar with Subtle Watermarks */}
			<div className="w-full pt-[40px] pb-[30px] flex justify-between items-end sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
				<div className="w-1/2 sm:w-full xm:w-full flex items-center gap-[20px]">
					<Link href="/">
						<Image
							src={logo}
							alt="OCHI primary brand logo"
							width={70}
							height={70}
						/>
					</Link>
				</div>
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<p className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							© ochi design 2024.
						</p>
						<LinkHover
							title="Legal Terms"
							href="/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
					<div className="flex items-center gap-[12px]">
						<p className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							All rights reserved.
						</p>
						<span className="text-secondry opacity-30">•</span>
						<LinkHover
							title="Website by RabbidCoding"
							href="https://github.com/rabbidcoding"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-50 hover:opacity-100 transition-opacity duration-300 before:bottom-[-3px] after:bottom-[-3px]"
						/>
						{/* Subtle Rabbid Watermarks Integration */}
						<a
							href="https://github.com/rabbidcoding"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-[6px] opacity-40 hover:opacity-100 transition-opacity duration-300 select-none cursor-pointer">
							<Image
								src={rabbid}
								alt="Rabbid Watermark 1"
								width={32}
								height={32}
								unoptimized
								className="rounded-[6px] object-cover pointer-events-none"
							/>
							<Image
								src={rabbid2}
								alt="Rabbid Watermark 2"
								width={32}
								height={32}
								unoptimized
								className="rounded-[6px] object-cover pointer-events-none"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
