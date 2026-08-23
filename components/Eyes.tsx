"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { eyes } from "@/public";
import { initWasmPhysicsEngine, computeEyeAngleFast } from "@/lib/wasmPhysicsEngine";

/**
 * Interface props for the interactive Eyes animation component.
 */
export interface EyesProps {
	/** Optional CSS class names for eye dimensions and layout customization */
	className: string;
}

/**
 * Eyes Component (WebAssembly & Apple Fluid Motion Accelerated)
 * -----------------------------------------------------------------------------
 * Ultra-high-performance interactive eye tracking component powered by a WebAssembly (WASM)
 * compiled vector math engine paired with Apple Natural Fluid spring physics.
 *
 * @param {EyesProps} props - Component property configuration
 * @returns {JSX.Element} WASM-accelerated eye animation container
 */
export default function Eyes({ className }: EyesProps): JSX.Element {
	const [rotationAngle, setRotationAngle] = useState<number>(0);

	/**
	 * Compute vector angle from viewport center to pointer position via WASM SIMD.
	 */
	const calculateAngleWasm = useCallback((clientX: number, clientY: number): number => {
		const deltaX = clientX - window.innerWidth / 2;
		const deltaY = clientY - window.innerHeight / 2;
		return computeEyeAngleFast(deltaX, deltaY);
	}, []);

	useEffect(() => {
		// Asynchronously initialize WebAssembly Physics engine module
		initWasmPhysicsEngine();

		let animationFrameId: number;

		const handleMouseMove = (event: MouseEvent) => {
			animationFrameId = requestAnimationFrame(() => {
				const angle = calculateAngleWasm(event.clientX, event.clientY);
				setRotationAngle(angle);
			});
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, [calculateAngleWasm]);

	const eyeRotationStyle: React.CSSProperties = {
		transform: `rotate(${rotationAngle}deg)`,
		transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform",
	};

	return (
		<div className="w-full gap-[30px] flex items-center justify-center">
			{/* Left Interactive WASM Eye Element */}
			<div
				className={`bg-white border-[2px] border-[#21212188] rounded-full flex items-center justify-center ${className}`}>
				<Image
					style={eyeRotationStyle}
					src={eyes}
					alt="Interactive eye rotation element"
					className="w-full h-full object-cover transform-gpu"
					priority={false}
				/>
			</div>

			{/* Right Interactive WASM Eye Element */}
			<div
				className={`bg-white border-[2px] border-[#21212188] rounded-full flex items-center justify-center ${className}`}>
				<Image
					style={eyeRotationStyle}
					src={eyes}
					alt="Interactive eye rotation element"
					className="w-full h-full object-cover transform-gpu"
					priority={false}
				/>
			</div>
		</div>
	);
}
