"use strict";
//JSON => JavaScript Object Natation
var persona = {nombre: 'Denilson', instagram: 'denilson_prescott'};

var personas = [
    {nombre: 'Denilson', instagram: 'denilson_prescott'},
    {nombre: 'Andres', instagram: 'Andres_medina'},
    {nombre: 'Meliza', instagram: 'meliza_prscott'},
];
var personaJSON = JSON.stringify(persona);
var nuevaPersona = JSON.parse(personaJSON);

//** Operadores aritméticos
var num1 = 10;
var num2 =  20;

// SUMA + 
var suma = num1 + num2;
// RESTA - 
var resta = num1 - num2;
// MULTIPLICACIÓN *
var multiplicacion = num1 * num2;
// DIVICIÓN /
var divicion = num1 / num2;
// MODULO O RESIDUO %
var modulo = num1 % num2;
// INCREMENTO ++
var incremento = num1;
incremento++;
// DESCREMENTO --
var decremento = num1;
decremento--;

//** Operdaores relacionales
// MAYOR QUE >
var mayorQue = num1 > num2;
// MENOR QUE < 
var menorQue = num1 < num2;
// MAYOR O IGUAL QUE >=
var mayorIgualQue = num1 >= num2;
// MENOR O IGUAL QUE <=
var menorIgualQue = num1 <= num2;
// IGUAL QUE ==
var igualQue = num1 == num2;
// IGUAL IGUAL QUE ===
var igualIdentico = num1 === num2;
// DIFERENTE QUE !=
var diferenteQue = num1 != num2;
// DIFERENTE IGUAL IGUAL QUE  !==
var diferenteIgual = num1 !== num2;