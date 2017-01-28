(function () {
	let inputs = document.querySelectorAll(".controls input");
	inputs.forEach(item => {
		item.addEventListener("change", update);
		item.addEventListener("mousemove", update)
	})

	function update(e) {
		const val = this.value;
		document.documentElement.style.setProperty(`--${this.name}`, val + this.dataset.suffix);
	}
})();
