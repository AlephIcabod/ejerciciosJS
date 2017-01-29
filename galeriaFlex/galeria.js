(function () {
	let panels = document.querySelectorAll(".panel");
	let panel = document.getElementsByClassName("panels")[0];
	let panelWidth = window.getComputedStyle(panel)
		.width;
	panelWidth = parseInt(panelWidth.substring(0, 3));
	panels.forEach((panel) => {
		panel.addEventListener("click", activar);
		panel.addEventListener("transitionend", activeText);
	});

	function activar() {
		panels.forEach(panel => {
			panel.classList.remove("active")
		});
		this.classList.toggle("active");
	}

	function activeText(e) {
		let child = this.querySelector(".text *:last-child");
		let fchild = this.querySelector(".text *:first-child");
		if (e.propertyName.includes("flex")) {
			child.classList.toggle("active");
			fchild.classList.toggle("active");
		}
	}
})();
