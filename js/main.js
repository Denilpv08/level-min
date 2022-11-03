const sendButton = document.getElementById("enviarNota");

sendButton.addEventListener("click", () =>{
	let resultado, mensaje;
	try{
		prevRes = parseInt(document.getElementById("notaAlumno").value);
		if(isNaN(prevRes)){
			throw "Validacion incorrecta";
		}
		resultado = verificarAprobacion(8, 5, prevRes);
		mensaje = definirMensaje(prevRes);
	}catch(error){
		resultado = "No es bueno lo que haces :(";
		mensaje = "Esta intentando de HACKEAR el sitio";
	}
	abrirModal(resultado, mensaje);
});

const abrirModal = (res, msg) =>{
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
	let modal = document.querySelector(".modal-background");
	modal.style.animation = "aparecer 1s forwards";
	modal.style.display = "flex";
}

const definirMensaje = (pr) =>{
	switch (pr){
		case 1: resultado = "Una nota demasiado baja";
		break;
		case 2: resultado = "Aún tu nota es muy baja";
		break;
		case 3: resultado = "Te falta mucho aún para aprobar";
		break;
		case 4: resultado = "Sigues sin alcanzar buena nota";
		break;
		case 5: resultado = "Te falta mejorar un poco más";
		break;
		case 6: resultado = "Te falto poco para aprobar";
		break;
		case 7: resultado = "Casi lo logras";
		break;
		case 8: resultado = "Tienes un buena nota";
		break;
		case 9: resultado = "Tu nota es muy alta";
		break;
		case 10: resultado = "Nota perfecta";
		break;
		default: null;
	}
	return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes) =>{
	promedio = (nota1 + nota2 + prevRes) / 3;
	if (promedio >= 7) {
		return `<span class="green">APROBADO</span>`;
	}
	return `<span class="red">DESAPROBADO</span>`;
}