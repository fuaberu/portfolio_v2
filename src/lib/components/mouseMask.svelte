<script lang="ts">
	import { browser } from "$app/environment";

	let mousePos = {
		x: 0,
		y: 0
	};

	const isTouchDevice = () => {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	};

	if (browser) {
		if (!isTouchDevice()) {
			document.addEventListener("mousemove", move);
		}
	}

	function move(e: MouseEvent) {
		mousePos = { x: e.clientX, y: e.clientY };
	}
</script>

<div
	id="flashlight"
	style="background: radial-gradient(
	circle 25em at {mousePos.x}px {mousePos.y}px,
	rgba(215, 215, 215, 0.1),
	rgba(0, 0, 0, 0)
)"
></div>

<style>
	#flashlight {
		display: block;
		width: 100%;
		min-height: 100%;
		position: fixed;
		pointer-events: none;
	}
</style>
