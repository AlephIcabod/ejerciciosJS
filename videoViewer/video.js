(function () {
	let video = document.querySelector(".video-container video");
	let play = document.getElementById("play");
	let fullScreen = document.querySelector("#fullScreen");
	let container = document.querySelector(".video-container");
	let progress = document.querySelector(".progress_filled");
	let progressPar = document.querySelector(".progress");
	let controlsRange = document.querySelectorAll("input[type=range]");
	video.addEventListener("click", togglePlay);
	video.addEventListener("timeupdate", updateProgress);
	fullScreen.addEventListener("click", toggleFullScreen);
	play.addEventListener("click", togglePlay);
	controlsRange.forEach(i => {
		i.addEventListener("change", updateRange);
	})
	progressPar.addEventListener("click", (e) => {
		const offset = e.offsetX;
		const duration = video.duration;
		const tot = progressPar.offsetWidth;
		video.currentTime = (offset * duration) / tot;
	})

	function togglePlay(e) {
		if (video.paused) {
			video.play();
			play.classList.remove("icon-play");
			play.classList.add("icon-pause");
		} else {
			video.pause();
			play.classList.add("icon-play");
			play.classList.remove("icon-pause");
		}
	}

	function toggleFullScreen(e) {
		if (!document.fullscreenElement) {
			video.webkitRequestFullscreen();
		}
	}

	function updateProgress(e) {
		const percent = (video.currentTime / video.duration) * 100;
		progress.style.width = `${percent}%`;
	}

	function updateRange(e) {
		video[this.name] = this.value;
	}
})();
