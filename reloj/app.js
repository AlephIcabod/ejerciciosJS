(function () {
	setInterval(() => {
		let hour = new Date();
		let horas = document.querySelector(".horas");
		let segundos = document.querySelector(".segundos");
		let minutos = document.querySelector(".minutos");
		let digital = document.querySelector(".horaDigital");
		segundos.style.transform = `rotate(${hour.getSeconds()/60*360+90}deg)`;
		minutos.style.transform = `rotate(${hour.getMinutes()/60*360+90}deg)`;
		horas.style.transform = `rotate(${hour.getHours()/12*360+90}deg)`;
		digital.innerHTML = `${hourString(hour.getHours()+"")}:${hourString(hour.getMinutes()+"")}:${hourString(hour.getSeconds()+"")}`;
	}, 1000);

	function hourString(t) {
		if (t.length < 2) return "0" + t;
		return t;
	}
})();
