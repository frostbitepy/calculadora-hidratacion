const BOTON = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLUJO = document.getElementById("flujo");
const MANTENIMIENTO = document.getElementById("mantenimiento");
const INPUT = document.getElementById("peso");



BOTON.addEventListener("click", () =>{
	let peso = document.getElementById("peso").value;
	if (peso > 0) {
		ERROR.style.display = "none";
		let flujo = Math.round(calcular_flujo(peso));
		FLUJO.innerHTML = flujo + " cc/hr";
		MANTENIMIENTO.innerHTML = "m+m/2 " + calcular_mantenimiento(flujo) + " cc/hr";
		FLUJO.style.display = "block";
		MANTENIMIENTO.style.display = "block";
		console.log("Ha ingresado un peso de " + peso);
		console.log("El flujo calculado es de " + flujo);
		console.log("El mantenimiento calculado es " + mantenimiento);
	} else {
		ERROR.style.display = "block";
		FLUJO.style.display = "none";
		MANTENIMIENTO.style.display = "none";
	}	
});


function calcular_mantenimiento(flujo){
	return flujo * 1.5;
}

function calcular_flujo(peso){
	let flujo = 0;
	if (peso >= 30){
		flujo = ((peso * 4) + 7) / (peso + 90) * 1500;
	}else if (peso >= 20){
		flujo = ((peso - 20) * 20) + 1500;
	} else if (peso >= 10) {
		flujo = ((peso - 10) * 50) + 1000;
	} else {
		flujo = peso * 100;
	}
	return flujo;
}

		
		
