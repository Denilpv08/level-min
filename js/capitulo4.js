//callback - Es hacer que una funcion ejecute otra funcion
function prueba(callback){
    callback("Hola");
}
prueba(nombre => console.log(nombre));

//class
class Personas{
    constructor(noombre, ciudad){
        this.noombre = noombre;
        this.ciudad = ciudad;
    }
};

const data = [
    ["Denilson", "Valledupar"],
    ["Camilo", "Medellin"],
    ["Elkin", "Barranquilla"],
    ["Estevan", "Bogota"]
];

const personas = [];
for (let i = 0; i < data.length; i++) {
    personas[i] = new Personas(data[i][0], data[i][1]);
}
// console.log(personas);

const obtenerPersona = (id, cb) =>{
    if (personas[id] == undefined) {
        cb("No se encuentra la persona");
    } else {
        cb(null, personas[id],id);
    }
}

const obtenerCiudad = (id, cb) =>{
    if (personas[id].ciudad == undefined) {
        cb("No se encuentra la ciudad");
    } else {
        cb(null, personas[id].ciudad);
    }
}

obtenerPersona(3, (err, persona, id)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(persona.noombre);
        obtenerCiudad(id, (err, ciudad) =>{
            if (err) {
                console.log(err);
            } else {
                console.log(ciudad);
            }
        });
    }
});

//Promesas 
let nombre = "Denilson";
const promesa = new Promise((resolve,reject) =>{
    if (nombre !== "Denilson") {
        reject("Lo siento, el nombre que diste no coinside con el que tenemos");
    } else {
        resolve(nombre);
    }
});

//Metodo then - Es usado para acceder a una promesa
promesa.then((resultado) =>{
    console.log(resultado);
    //Se usos el metodo catch para manejar los erros de la de promesa
}).catch((e) =>{
    console.log(e);
});

//Trabajando con promesas para que los callbacks sea mas efeciente de usar
const obtenerPersona2 = (id) =>{
    return new Promise((resolve, reject) =>{
        if (personas[id] == undefined) {
            reject("Persona no registrada");
        } else {
            resolve(personas[id]);
        }
    });
}

const obtenerCiudad2 = (id) =>{
    return new Promise((resolve, reject) =>{
        if (personas[id].ciudad == undefined) {
            reject("No se encuentra la ciudad");
        } else {
            resolve(personas[id].ciudad);
        }
    });
}

let id = 0;
obtenerPersona2(id).then((persona) =>{
    console.log(persona.nombre);
    return obtenerCiudad2(id);
}).then((ciudad) =>{
    console.log(ciudad);
}).catch((e) =>{
    console.log(e);
});

const obteberInformacion = (text) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(text);
        },Math.random() * 300);
    });
}

//usando await - Es una forma más eficiente de mostrar el resultado de un metodo 'promise'
const mostrarResultado = async () =>{
    let dato1 = await obteberInformacion("1: Desnilson");
    let dato2 = await obteberInformacion("2: Andres");
    let dato3 = await obteberInformacion("3: Meliza");
    console.log(dato1);
    console.log(dato2);
    console.log(dato3);
}
mostrarResultado();

//Ejercicio
const materiasHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Qumica",
        nota: 6
    },{
        nombre: "Fisica",
        nota: 7
    },{
        nombre: "Matematicas",
        nota: 10
    },{
        nombre: "Educacion Fisica",
        nota: 9
    },{
        nombre: "Ingles",
        nota: 5
    },
];

const obtenerMateria = (id) =>{
    return new Promise((resolve, reject) =>{
        materia = materias[id];
        if (materia == undefined) {
            reject("Esta materia no esta registrada");
        } else {
            setTimeout(() => {resolve(materia)},Math.random() * 1000) ;
        }
    });
}

const mostrarMateria = async () =>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}
mostrarMateria();
