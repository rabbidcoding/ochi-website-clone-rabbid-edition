import { useEffect } from "react";

/**
 * Interface representing the LocomotiveScroll instance lifecycle API.
 */
interface LocomotiveScrollInstance {
	destroy: () => void;
	update?: () => void;
}

/**
 * Production-grade custom hook to initialize and teardown Locomotive Scroll.
 * Guarantees zero memory leaks on page transitions by executing cleanup on unmount.
 *
 * @returns {void}
 */
export function useLocomotiveScroll(): void {
	useEffect(() => {
		let instance: LocomotiveScrollInstance | null = null;
		let isMounted = true;

		const initScroll = async () => {
			try {
				const LocomotiveModule = await import("locomotive-scroll");
				const LocomotiveScroll = LocomotiveModule.default;
				
				if (isMounted) {
					instance = new LocomotiveScroll() as unknown as LocomotiveScrollInstance;
				}
			} catch (error) {
				console.error("[LocomotiveScroll Engine] Initialization deferred:", error);
			}
		};

		initScroll();

		return () => {
			isMounted = false;
			if (instance && typeof instance.destroy === "function") {
				instance.destroy();
				instance = null;
			}
		};
	}, []);
}
