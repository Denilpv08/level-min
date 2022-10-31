const button = document.querySelector(".button");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2");

//------------------------------------------------------------Event Mouse------------------------------------------------------------------
//Evento click
button.addEventListener("click", (e)=>{
    alert("Hola, como estás");
    e.stopPropagation();
});
//Evento dblclick- Es para dar doble click a algo
button.addEventListener("dblclick", (e)=> { alert("Hola, como estás"); });
//mouseover - Este evento se dispara cuando pasas el mause por el elemento o sus elementos hijos
container.addEventListener("mouseover", (e) => { alert("Contenedor ROJO"); });
//mouseout- Este evento funciona es cuando te sales del elemento
container2.addEventListener("mouseout", (e)=>{ alert("Saliste del contenedor AZUL"); });
//Uso de un metodo llamado stopPrpagation() - Es para detener el flujo de evento y solo inicie el evento especificado
container.addEventListener("click", () =>{ alert("Contenedor ROJO"); });
//Evento contextmenu - Dando click derecho sobre un elemento para que este este vento pueda funcionar
container.addEventListener("contextmenu", (e)=>{ alert("Diste click derecho"); });
//Evento mauseenter - Esto funciona cuando el mouse se mueve dentro de un elemento WARNING(Recomendar usarlo en internet explore)
container2.addEventListener("mouseenter",(e)=>{ alert("Esta moviendote dentro del contendor"); });
//Evento  mousemove - Este funciona cuando el mouse esta moviendoce dentro de un elemento 
container.addEventListener("mousemove", (e)=>{ alert("Te estas movienedo"); });
//Evento mouseleave - Este funciona cuandop el mouse se mueve fuera de un elemento
container2.addEventListener("mouseleave", (e)=>{ alert("Te saliste del contenedor"); });
//Evento mousedown - Este funciona cuando se pulsa un boton de mouse dentro del elemento
button.addEventListener("mousedown", (e)=>{ alert("Pulsaste un boton"); });
//Evento mouseup - Esto funciona cuando sueltas un boto dentro del elemento
container2.addEventListener("mouseup", (e)=>{ alert("Soltaste un boton"); });
//De esta forma podemos remover un evento 
button.addEventListener("click", saludar);
function saludar(){
    alert("Hola, como estás");
    button.removeEventListener("click", saludar);
}

//----------------------------------------------------------Eventos de Teclado-----------------------------------------------------------------
//Evento keydown - Su funcion es cuando una tecla es precionada
input.addEventListener("keydown", (e)=>{ console.log("Una tecla fue precionada"); });
//Evento keypress - Es cuando tienes una tecla precionada y la sueltas en ese mismo elemento
input.addEventListener("keypress", (e)=>{ console.log("Preciono una tecla y la solto"); });
//Evento keyup - Este evento solo se da cuando tienes una tecla precionada y la sueltas en el elemento
input.addEventListener("keyup", (e)=>{ console.log("Una tecla fue soltada"); });

//--------------------------------------------------------Eventos de la interfaz---------------------------------------------------------------
//Evento error - Esto sirve para mostrar un mensaje de error
img.addEventListener("error", ()=>{ console.log("Sucecio un ERROR"); });
//Evento load - Para mandar un mensaje que se a cargado la pagina o lo que quieras
addEventListener("load", () =>{ console.log("Se a cargado la pagina"); });
//Evento beforeunload - Es para decir que estas saliendo de la pagina
addEventListener("beforeunload", () =>{ console.log("Estas por salir de la pagina"); });
//Evento unload - Esto te avisas antes de irte del citio y cuando te vas
addEventListener("unload", () =>{ console.log("Te estas por ir"); });
//Evento resize - Esto te avisa cuando cambia el tamaño de la pagina
addEventListener("resize", () =>{ console.log("Cambio el tamaño de la pagina"); });
//Evento scroll - Esto te indica cuando se desplaza la barra de desplazamiento 
addEventListener("scroll", () => { console.log("Te estas desplazando"); });
//Evento select - Este evento es para mostrar cunado seleciona un texto dentro de un INPUT o TEXTAREA
input.addEventListener("select", () =>{ console.log("Has selecdionado el texto"); });

//--------------------------------------------------------Timers (Temporizadores)---------------------------------------------------------------
//Evento setTimeout - Es un temporizador que debemso indicar cuando algo se debe de iniciar 
const temporizador = setTimeout(() =>{ document.write("Let go!"); }, 2000);
//Evento clearTimeout - Esto sirve para eliminar el temporizador setTimeout
clearTimeout(temporizador);
//Evento setInterval - Esto hace que la funcion se incie muchas veces al cierto tiempo que le pidas
const intervalo = setInterval(() =>{ document.write("Hola "); }, 2000);
//Evento claerIntervalo - Esto hace que acabe el temporizado de setIntervalo
clearInterval(intervalo);