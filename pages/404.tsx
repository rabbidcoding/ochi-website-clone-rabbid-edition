import React from "react";
import Link from "next/link";
import Head from "next/head";
import Eyes from "@/components/Eyes";
import RoundButton from "@/components/RoundButton";
import Curve from "@/components/Curve/Curve";

/**
 * Custom 404 Error Page Component
 * -----------------------------------------------------------------------------
 * Interactive 404 error page featuring WASM-accelerated eye tracking,
 * kinetic typography, and Apple spring physics navigation buttons.
 *
 * @returns {JSX.Element} Interactive 404 error page
 */
export default function Custom404(): JSX.Element {
	return (
		<Curve backgroundColor="#f1f1f1">
			<Head>
				<title>404 — Page Not Found | OCHI</title>
			</Head>

			<section className="w-full min-h-screen padding-x padding-y flex flex-col items-center justify-center bg-background text-secondry select-none">
				{/* Large 404 Heading */}
				<h1 className="heading font-FoundersGrotesk font-bold uppercase text-center tracking-tight leading-none mb-[20px]">
					404
				</h1>

				{/* WASM Eye Tracking Element */}
				<div className="w-[180px] h-[180px] sm:w-[130px] sm:h-[130px] xm:w-[100px] xm:h-[100px] my-[30px]">
					<Eyes className="w-[180px] h-[180px] sm:w-[130px] sm:h-[130px] xm:w-[100px] xm:h-[100px]" />
				</div>

				{/* Error Subtitle */}
				<p className="sub-heading font-NeueMontreal text-center max-w-[600px] mb-[40px] opacity-80">
					Oops! The page you are looking for has vanished into thin air.
				</p>

				{/* Return Home CTA Button */}
				<RoundButton
					href="/"
					title="Return to Home Page"
					bgcolor="#212121"
					style={{ color: "#ffffff" }}
				/>
			</section>
		</Curve>
	);
}
