"use client";
import {
	Capibilyties,
	Clientsservices,
	Expectations,
	Process,
	Archive,
	Heroservices,
} from "@/container";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import { Curve, Ready } from "@/components";

export default function Services() {
	useLocomotiveScroll();
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroservices />
				<Process />
				<Capibilyties />
				<Clientsservices />
				<Archive />
				<Expectations />
				<Ready />
			</Curve>
		</>
	);
}
