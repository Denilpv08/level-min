//switch 
let fruta = "Mango";
switch(fruta){
	case "Pera":
		console.log("Es de color verde");
		alert("Es una pera");
		break;
	case "Uva":
		console.log("Es de colot morado");
		alert("Es una uva");
		break;
	case "Mango":
		console.log("Es de color amarillo");
		alert("Es un mango");
		break;
	default:
		alert("La fruta no esta registrada");
}

//try...catch - Esto nos ayuda para manejar el flujo de los error
try{
	hola
} //catch - Esto es incondicional
catch(error){
	console.log(error);
}

try{
	nada
}// catch - Esto es condicional
catch(error){
	if (3 > 4) {
		console.log("No pasa nada");
	}else{
		console.log("ah ocurrido un error");
	}
}
//finally - Esto siempre se ejecutara incondicionalmente
const pruebaTry = () =>{
	try{
		return 1;
	}
	catch(error){
		return 2;
	}
	finally{
		return 3;
	}
}
console.log(pruebaTry());
//throw - Esto nos lanza un error
try{
	throw "Hola";
}
catch(error){
	console.log(error);
}
finally{

}

//Ejercicio
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