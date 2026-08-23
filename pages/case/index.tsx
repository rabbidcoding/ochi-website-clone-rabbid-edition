"use client";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import { Curve, Ready } from "@/components";

export default function Work() {
	useLocomotiveScroll();
	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz />
				<Aboutworkiz />
				<Chelenge />
				<VideoWorkiz />
				<Result />
				<Credit />
				<Works />
				<Ready />
			</Curve>
		</>
	);
}
