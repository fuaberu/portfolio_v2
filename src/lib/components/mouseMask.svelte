<script lang="ts">
	import { browser } from '$app/environment';

	let flashlight: HTMLDivElement;

	const isTouchDevice = () => {
		try {
			document.createEvent('TouchEvent');
			return true;
		} catch (e) {
			return false;
		}
	};

	if (browser) {
		if (!isTouchDevice()) {
			document.body.addEventListener('mousemove', move);
		}
	}

	function move(e: MouseEvent) {
		let mouseX = e.clientX;
		let mouseY = e.clientY;
		flashlight.style.setProperty('--Xpos', mouseX + 'px');
		flashlight.style.setProperty('--Ypos', mouseY + 'px');
	}
</script>

<div id="flashlight" bind:this={flashlight}></div>

<style>
	#flashlight {
		--Xpos: 50vw;
		--Ypos: 50vh;
	}
	#flashlight:before {
		content: '';
		display: block;
		width: 100%;
		min-height: 100%;
		position: fixed;
		pointer-events: none;
		background: radial-gradient(
			circle 25em at var(--Xpos) var(--Ypos),
			rgba(215, 215, 215, 0.1),
			rgba(0, 0, 0, 0)
		);
	}
</style>
