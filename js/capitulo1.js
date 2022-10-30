let youtubeURL = "https://youtube.com";
//open() - Usada para abrir una ventana
let ventana = window.open(youtubeURL);
//close() - Sirve para cerrar la ventana que decidas
ventana.close(youtubeURL);
//closed - Es para verificar si la ventana que abriste esta cerrada
console.log(ventana.closed);
//stop() - Hace que se detenga la carga de la ventana
ventana.stop();
//confirm() - Muestra un cuadro de dialogo para confirmar una acion 
let confirmacion = confirm("¿Seguro que quieres salir sin guardar los cambios?");
console.log(confirmacion);

//screen - Es un ojeto que trabja con la pantalla
const screen = window.screen;
console.log(screen);
//screenLeft - Nos muestra la distancia que hay entra el borde izquierdo de nuestra ventana y el borde izquierdo de nuestra pantalla
const screenLeft = window.screenLeft;
//screenTop - Nos muestra la distancia que hay entre el borde superio de laventana cin el borde superio de la pantalla
const sreenTop = window.sreenTop;
console.log(`Left: <b>${screenLeft}</b><br> Top: <b>${screenTop}</b>`);
//scrollX - Nos indica en pixeles la distancia que nos desplazamos en nuestra pagina horizontalmente
const scrollX = window.scrollX;
//scrollY - Nos indica la distancia ennlos que nos desplazamos en pixeles verticalmente
const scrollY = window.scrollY;
//scroll() - Hace desplacamiesto en la pagina
const scroll = window.scroll(2, 100);

//resizeBy() - Cambia ola dimenciones de una pagina
ventana.resizeBy(100, 200);
//resizeTo() - Igual acá esto cambia el tamaño de la pagina
ventana.resizeTo(100, 200);
//moveBy() - Mueve la ventana de una manera relativa
ventana.moveBy(120,300);
//moveTo() - Mueve la ventana de una manera absoluta
ventana.moveTo(120, 300);

//window.location.href - Nos muestra la URL de nuestra pagina
const href = window.location.href;
//window.location.hostname - Nos muestra el dominio de la pagina
const hostname = window.location.hostname;
//window.location.pathname - Nos muestra donde estamos hubicado
const pathname = window.location.pathname;
//window.location.protocol - Nos muestra que protocolo estamos usando (http: o https)
const protocol = window.location.protocol;
//window.location.assign() - Esto nosw carga un nuevo documento
const assign = window.location.assign("https://youtube.com");