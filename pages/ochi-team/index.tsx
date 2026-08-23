"use client";
import {
	Heroabout,
	Aboutabout,
	Team,
	Partners,
	Insights,
	Principles,
} from "@/container";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import { Curve, Ready } from "@/components";

export default function About() {
	useLocomotiveScroll();
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroabout />
				<Aboutabout />
				<Team />
				<Principles />
				<Partners />
				<Insights />
				<Ready />
			</Curve>
		</>
	);
}
