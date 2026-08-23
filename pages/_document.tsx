import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Next.js HTML Document Blueprint Component
 * -----------------------------------------------------------------------------
 * Custom HTML structural document initialization defining language semantics,
 * meta descriptions, font preloading directives, and script injection anchors.
 *
 * @returns {JSX.Element} Base HTML document scaffolding
 */
export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="OCHI — Presentation Design Agency. Eye-opening presentation design for public and private companies, from first pitch to IPO."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/site.webmanifest" />

				{/* High-Priority WebFont Preloading Directives for Low Latency LCP */}
				<link
					rel="preload"
					href="/fonts/FoundersGrotesk.woff"
					as="font"
					type="font/woff"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/NeueMontreal.woff"
					as="font"
					type="font/woff"
					crossOrigin="anonymous"
				/>
			</Head>
			<body className="antialiased bg-background text-secondry selection:bg-[#cdea68] selection:text-black">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
