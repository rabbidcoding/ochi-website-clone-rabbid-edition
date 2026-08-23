"use client";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import { Curve } from "@/components";
import { Heroinsights, Publicationinsights } from "@/container";

export default function Insights() {
	useLocomotiveScroll();
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroinsights />
				<Publicationinsights />
			</Curve>
		</>
	);
}
