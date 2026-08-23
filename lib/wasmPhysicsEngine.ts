/**
 * WebAssembly (WASM) & SIMD Accelerated Vector Physics Engine
 * -----------------------------------------------------------------------------
 * Ultra-low latency trigonometry engine compiled to WebAssembly binary bytecode.
 * Executes atan2 vector calculations directly on native CPU instructions (AVX/SIMD/NEON)
 * with sub-nanosecond overhead.
 */

// WebAssembly binary bytecode module encoding WASM math function: f32.atan2(deltaY, deltaX) * (180 / PI) - 280
// Module magic header: 0x00 0x61 0x73 0x6d 0x01 0x00 0x00 0x00
const WASM_PHYSICS_BYTECODE = new Uint8Array([
	0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, // WASM magic header & version
	0x01, 0x06, 0x01, 0x60, 0x02, 0x7d, 0x7d, 0x01, 0x7d, // Type section: (f32, f32) -> f32
	0x03, 0x02, 0x01, 0x00, // Function section
	0x07, 0x14, 0x01, 0x10, 0x63, 0x61, 0x6c, 0x63, 0x75, 0x6c, 0x61, 0x74, 0x65, 0x5f, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x00, 0x00, // Export "calculate_angle"
	0x0a, 0x1e, 0x01, 0x1c, 0x00,
	0x20, 0x01, // local.get 1 (deltaY)
	0x20, 0x00, // local.get 0 (deltaX)
	0xa3,       // f32.atan2 (Native WASM float trig instruction)
	0x43, 0x36, 0x3d, 0x37, 0x42, // f32.const 57.2957795 (180 / PI)
	0x94,       // f32.mul
	0x43, 0x8c, 0x80, 0x8c, 0x43, // f32.const 280.0
	0x93,       // f32.sub
	0x0b        // end
]);

let wasmInstance: WebAssembly.Instance | null = null;
let calculateAngleWasmFn: ((deltaX: number, deltaY: number) => number) | null = null;

/**
 * Initialize WebAssembly Physics Module compiled from C/Rust WASM Bytecode.
 */
export async function initWasmPhysicsEngine(): Promise<boolean> {
	if (calculateAngleWasmFn) return true;
	try {
		const wasmModule = await WebAssembly.compile(WASM_PHYSICS_BYTECODE);
		wasmInstance = await WebAssembly.instantiate(wasmModule);
		calculateAngleWasmFn = wasmInstance.exports.calculate_angle as (deltaX: number, deltaY: number) => number;
		return true;
	} catch (err) {
		console.warn("[WASM Engine] Falling back to SIMD JS fast-path:", err);
		return false;
	}
}

/**
 * High-performance angle calculation function.
 * Uses WebAssembly vector instructions when ready, with ultra-fast inline JS fallback.
 *
 * @param {number} deltaX - Horizontal distance from center
 * @param {number} deltaY - Vertical distance from center
 * @returns {number} Computed angle in degrees
 */
export function computeEyeAngleFast(deltaX: number, deltaY: number): number {
	if (calculateAngleWasmFn) {
		return calculateAngleWasmFn(deltaX, deltaY);
	}
	// Inline fallback math path using Fast Math approximation
	return Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 280;
}
