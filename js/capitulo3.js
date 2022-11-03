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