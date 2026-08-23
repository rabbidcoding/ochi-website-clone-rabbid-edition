import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Footer, Navbar } from "@/components";

/**
 * Root Application Component
 * -----------------------------------------------------------------------------
 * Custom Next.js Root App wrapper. Integrates central SEO document head metadata,
 * OpenGraph social sharing previews, global navigation header, page transition
 * orchestration via Framer Motion AnimatePresence, and persistent application footer.
 *
 * @param {AppProps} props - Next.js page component, page properties, and router instance
 * @returns {JSX.Element} Root application layout node
 */
export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
		<>
			{/* Application Document Head, OpenGraph & Social Metadata */}
			<Head>
				<title>OCHI — Presentation Design Agency</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
				<meta name="theme-color" content="#f1f1f1" />

				{/* OpenGraph & Social Card Tags for Post-Frontier SEO */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="OCHI Agency" />
				<meta property="og:title" content="OCHI — Presentation Design Agency" />
				<meta
					property="og:description"
					content="Eye-opening presentation design for public and private companies, from first pitch to IPO."
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="OCHI — Presentation Design Agency" />
				<meta
					name="twitter:description"
					content="Eye-opening presentation design for public and private companies, from first pitch to IPO."
				/>
			</Head>

			{/* Global Desktop & Mobile Navigation Header */}
			<Navbar />

			{/* Animated Route Transition Shell */}
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>

			{/* Persistent Application Footer */}
			<Footer />
		</>
	);
}
