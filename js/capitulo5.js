//------------------------------------------------------JSON--------------------------------------------------------------------------------
//Deserializado - es cuando un objecto JSON no es un string
const deserializado = {"propiedad1": "valor 1", "propiedad2": "valor 2"}

//Serializado - Es cuando pasamos un objecto JSON a string
//Metodo stringify() - Esto nos sirve para serializar un objecto JSON
const serializado = JSON.stringify(deserializado);
const serializado2 = '{"propiedad1": "valor 1", "propiedad2": "valor 2"}';
//Metodo parse() - Este metodo lo que haces es que un objecto JSON serializado lo convierte a deserializado
const deserializado2 = JSON.parse(serializado2);
console.log(typeof deserializado2);

//------------------------------------------------------------AJAX------------------------------------------------------------------------
//XMLHttpRequest()
//  const request = new XMLHttpRequest();
//ActiveXObject() - Esto nos ayuda para que AJAX se soportado en otros navegadores como 'internet explore'
let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

//Cada vez que hacemos peticiones al servidor nos de vuelve el objeto JSON serializado y toca deserializarlo
request.addEventListener("load", () =>{
    let respuesta;
    if (request.status == 200) {
        respuesta = request.response;
    } else {
        respuesta = "Los siento no encontramos el resultado";
    }
    console.log(JSON.parse(respuesta));
 });
//GET - para enviar informacio0n al servidor o buscar
 request.open("GET", "informacion.txt");
//send() - Es para poder hacer el envio de esa peticion
 request.send();

 //POST - Para enviar peticones la servidor con mayor seguridad
let peticion;
if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

peticion.addEventListener("load", () =>{
    let respuesta;
    if (peticion.status == 200 || peticion.status == 201) {
        respuesta = peticion.response;
    } else {
        respuesta = "Los siento no encontramos el resultado";
    }
    console.log(JSON.parse(respuesta));
 });

peticion.open("POST", "https://reqres.in/api/users");
peticion.setRequestHeader("content-type", "application/json;charset=UTF8");
peticion.send(JSON.stringify({
    "nombre" : "Denilson",
    "estudio" : "Desarrollador web"
}));

//fetch con GET - Es una forma de hacer peticiones la servidor de forma más eficiente que AJAX
//Metodo text() - Nos sirve para desencasular el metodo fetch a un string
fetch("https://reqres.in/api/unknown/2")
    .then((res) => res.text())
    .then((res) => console.log(res));
//Metodo json() - Nos ayuda a desencasular un metodo fetch a un objeto JSON
fetch("https://reqres.in/api/unknown/2")
    .then((res) => res.json())
    .then((res) => console.log(res));
//Metodo fetch con POST
fetch("https://reqres.in/api/users", {
    method: "POST",
    body: `{ "nombre" : "Denilson", "ciudad" : "Valledupar" }`,
    headers: { "content-type" : "application/json" }
}).then((res) => res.json())
    .then((res) => console.log(res));
//Metodo blob
const imagen = document.querySelector(".imagen");
fetch("../img/logo.png")
    .then((res) => res.blob())
    .then((img) => imagen.src = URL.createObjectURL(img));

//------------------------------------------axios-----------------------------------------------------------------
//axios metodo get
axios("informacion.txt").then((res) => { console.log(res.data) });
//axios metodo post
axios.post("https://reqres.in/api/users", {
    "nombre" : "Denilson",
    "pais" : "Colombia"
}).then((res) => console.log(res));

//fetch con await async
const obtenerNombre = document.getElementById("btnNombre");
const obtenerEdad = document.getElementById("btnEdad");
const mostrarResultado = document.querySelector(".resultado");

const getName = async () => {
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = "Nombre: " + resultado.nombre;
    document.body.appendChild(div);
}

//axios con await async
const getAge = async () =>{
    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.innerHTML = "Edad: " + resultado.data.edad;
    document.body.appendChild(div);
}
obtenerNombre.addEventListener("click", getName);
obtenerEdad.addEventListener("click", getAge);

//Ejercicio
const aprobados = document.querySelector(".num-aprobados");
const desaprobados = document.querySelector(".num-desaprobados");
const btnInfo = document.getElementById("getInfo");

const getInfo = async () =>{
    try {
        let resultados = await axios("../informacion.txt");
        aprobados.innerHTML = resultados.data.aprobados;
        desaprobados.innerHTML = resultados.data.desaprobados;
    } catch (error) {
        aprobados.textContent = "La API tuvo un error";
        desaprobados.textContent = "La API tubo un error";
    }
}
btnInfo.addEventListener("click", getInfo);