(function () {
	console.log("Running");
	window.addEventListener("keydown", playAudio);
	const keys = document.querySelectorAll("div.key");
	keys.forEach(addEvents);

	function addEvents(i) {
		i.addEventListener("transitionend", e => {
			e.target.classList.remove("press");
		});
	}

	function playAudio(e) {
		let key = e.key.toUpperCase();
		const elem = document.querySelector(`.key[data-key="${key}"]`);
		if (elem) {
			elem.classList.add("press");
			const audio = document.querySelector(`audio[data-key="${key}"]`);
			audio.currentTime = 0;
			audio.play();
		}
	}
})();
