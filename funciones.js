/* ============================================================
   TRABAJANDO CON FUNCIONES
   ============================================================ */


/* ------------------------------------------------------------
   ¿QUÉ DEVUELVE CADA FUNCIÓN?
   ------------------------------------------------------------ */

// Micro Desafío 1
// function test1(x, y) {
//     return y - x
// }
// test1(10, 40)
//
// Los argumentos se asignan por posición: x = 10 e y = 40.
// El return hace y - x, o sea 40 - 10.
// RESPUESTA: devuelve 30


// Micro Desafío 2
// function test2(x, y) {
//     return x * 2
//     console.log(x)
//     return x / 2
// }
// test2(10)
//
// Al encontrar el primer return, JS devuelve el valor y termina la función.
// El console.log y el segundo return nunca se ejecutan.
// RESPUESTA: devuelve 20 y no imprime nada en consola.


/* ------------------------------------------------------------
   FUNCIONES SIMPLES
   ------------------------------------------------------------ */

// 1. Convertir pulgadas en centímetros
function pulgadasACm(pulgadas) {
    return pulgadas * 2.54;
}
let pulgadas = parseFloat(prompt("Ejercicio 1 - Ingresá las pulgadas:"));
console.log("Ejercicio 1:", pulgadas, "pulgadas =", pulgadasACm(pulgadas), "cm");


// 2. Convertir un string en una URL
function crearURL(nombre) {
    return "http://www." + nombre + ".com";
}
let nombre = prompt("Ejercicio 2 - Ingresá un nombre:");
console.log("Ejercicio 2:", crearURL(nombre));


// 3. Frase con admiración
function admiracion(frase) {
    return "¡" + frase + "!";
}
let frase = prompt("Ejercicio 3 - Ingresá una frase:");
console.log("Ejercicio 3:", admiracion(frase));


// 4. Edad de los perros (1 año humano = 7 años de perro)
function edadPerro(anios) {
    return anios * 7;
}
let anios = parseInt(prompt("Ejercicio 4 - ¿Cuántos años tiene tu perro?"));
console.log("Ejercicio 4: edad en años de perro =", edadPerro(anios));


// 5. Valor de la hora de trabajo (mes de 40 horas, según la consigna)
function valorHora(sueldoMensual) {
    return sueldoMensual / 40;
}
let sueldo = parseFloat(prompt("Ejercicio 5 - Ingresá tu sueldo mensual:"));
console.log("Ejercicio 5: tu hora vale", valorHora(sueldo));


// 6. Calculadora de IMC
function calculadorIMC(altura, peso) {
    return peso / (altura * altura);
}
let altura = parseFloat(prompt("Ejercicio 6 - Altura en metros:"));
let peso = parseFloat(prompt("Ejercicio 6 - Peso en kg:"));
console.log("Ejercicio 6: tu IMC es", calculadorIMC(altura, peso));

// Probando la función con diferentes valores
console.log("IMC (1.70 m, 65 kg):", calculadorIMC(1.70, 65));
console.log("IMC (1.60 m, 80 kg):", calculadorIMC(1.60, 80));
console.log("IMC (1.85 m, 70 kg):", calculadorIMC(1.85, 70));


/* ------------------------------------------------------------
   FUNCIÓN EXPRESADA Y FUNCIÓN FLECHA
   (con el ejercicio 1: pulgadas a centímetros)
   ------------------------------------------------------------ */

// Función expresada
const pulgadasACmExpresada = function (pulgadas) {
    return pulgadas * 2.54;
};

// Función flecha
const pulgadasACmFlecha = (pulgadas) => pulgadas * 2.54;

console.log("Expresada:", pulgadasACmExpresada(10));
console.log("Flecha:", pulgadasACmFlecha(10));


/* ------------------------------------------------------------
   EJERCICIOS CON DIFICULTAD EXTRA
   ------------------------------------------------------------ */

// 7. Minúsculas a mayúsculas
function aMayusculas(texto) {
    return texto.toUpperCase();
}
let texto = prompt("Ejercicio 7 - Ingresá un texto en minúscula:");
console.log("Ejercicio 7:", aMayusculas(texto));


// 8. Tipo de dato
function tipoDeDato(valor) {
    return typeof valor;
}
// Ojo: prompt siempre devuelve un string.
let dato = prompt("Ejercicio 8 - Ingresá algo:");
console.log("Ejercicio 8:", tipoDeDato(dato));
console.log(tipoDeDato(5));      // number
console.log(tipoDeDato(true));   // boolean
console.log(tipoDeDato("hola")); // string


// 9. Circunferencia de un círculo
function circunferencia(radio) {
    return 2 * Math.PI * radio;
}
let radio = parseFloat(prompt("Ejercicio 9 - Ingresá el radio:"));
console.log("Ejercicio 9:", circunferencia(radio));
