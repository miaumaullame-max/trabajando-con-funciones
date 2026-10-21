/* ============================================================
   CONTROLANDO EL FLUJO DE NUESTRAS APLICACIONES
   ============================================================ */


/* ------------------------------------------------------------
   AGREGÁ CAMINOS
   ------------------------------------------------------------ */

let edad = 21; // probá con otros valores: -5, 15, 19, 21, 25, 30...

if (edad < 0) {
    // Si la edad es negativa, solo se muestra este mensaje
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else {
    // Se arma una sola vez el mensaje de edad impar para no repetirlo
    let mensajeImpar = edad % 2 !== 0 ? " ¿Sabías que tu edad es impar?" : "";

    if (edad < 18) {
        console.log("No puede pasar al bar." + mensajeImpar);
    } else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol." + mensajeImpar);
    } else if (edad === 21) {
        console.log("Puede pasar al bar y tomar alcohol. ¡Felicitaciones por llegar a la mayoría de edad!" + mensajeImpar);
    } else {
        console.log("Puede pasar al bar y tomar alcohol." + mensajeImpar);
    }
}


/* ------------------------------------------------------------
   totalAPagar()
   ------------------------------------------------------------ */

function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro;

    if (vehiculo === "coche") {
        precioPorLitro = 86;
    } else if (vehiculo === "moto") {
        precioPorLitro = 70;
    } else if (vehiculo === "autobús") {
        precioPorLitro = 55;
    } else {
        return "Vehículo no válido.";
    }

    if (litrosConsumidos < 0) {
        return "Los litros consumidos no pueden ser negativos.";
    }

    let total = precioPorLitro * litrosConsumidos;

    if (litrosConsumidos <= 25) {
        total += 50;
    } else {
        total += 25;
    }

    return total;
}

console.log("totalAPagar coche, 20 litros:", totalAPagar("coche", 20));       // 86*20 + 50 = 1770
console.log("totalAPagar moto, 30 litros:", totalAPagar("moto", 30));         // 70*30 + 25 = 2125
console.log("totalAPagar autobús, 10 litros:", totalAPagar("autobús", 10));   // 55*10 + 50 = 600


/* ------------------------------------------------------------
   LOCAL DE SÁNDWICHES
   ------------------------------------------------------------ */

function totalSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0;

    // 1) Sándwich base
    if (base === "pollo") {
        total += 150;
    } else if (base === "carne") {
        total += 200;
    } else if (base === "veggie") {
        total += 100;
    }

    // 2) Tipo de pan
    if (pan === "blanco") {
        total += 50;
    } else if (pan === "negro") {
        total += 60;
    } else if (pan === "s/gluten") {
        total += 75;
    }

    // 3) Adicionales
    if (queso) total += 20;
    if (tomate) total += 15;
    if (lechuga) total += 10;
    if (cebolla) total += 15;
    if (mayonesa) total += 5;
    if (mostaza) total += 5;

    return total;
}

// pollo (150) + negro (60) + queso (20) + tomate (15) + mostaza (5) = 250
console.log("Sándwich 1:", totalSandwich("pollo", "negro", true, true, false, false, false, true));
// veggie (100) + s/gluten (75) + todos los adicionales (70) = 245
console.log("Sándwich 2:", totalSandwich("veggie", "s/gluten", true, true, true, true, true, true));
// carne (200) + blanco (50) sin adicionales = 250
console.log("Sándwich 3:", totalSandwich("carne", "blanco", false, false, false, false, false, false));


/* ============================================================
   EXTRA BONUS
   ============================================================ */

/* ------------------------------------------------------------
   ¿CUÁL ES EL NÚMERO SECRETO?
   ------------------------------------------------------------ */

function numeroSecreto(numero) {
    // Math.random() da un decimal entre 0 y 1 (sin incluir el 1).
    // Multiplicado por 10 y redondeado hacia abajo da de 0 a 9, y sumando 1 queda de 1 a 10.
    let secreto = Math.floor(Math.random() * 10) + 1;

    if (numero === secreto) {
        return "¡Felicitaciones! Adivinaste, el número secreto era " + secreto + ".";
    } else {
        return "¡No te rindas, la próxima sale! Ingresaste el " + numero + " y el número secreto era el " + secreto + ".";
    }
}

console.log(numeroSecreto(7));


/* ------------------------------------------------------------
   abrirParacaidas()
   ------------------------------------------------------------ */

function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return "Sí, el paracaídas debe abrirse.";
    } else {
        return "No, el paracaídas todavía no debe abrirse.";
    }
}

console.log("Paracaídas (800 km/h, 2500 m):", abrirParacaidas(800, 2500));   // se abre
console.log("Paracaídas (1200 km/h, 2500 m):", abrirParacaidas(1200, 2500)); // no
console.log("Paracaídas (800 km/h, 3000 m):", abrirParacaidas(800, 3000));   // no


/* ============================================================
   ESTRUCTURA SWITCH
   ============================================================ */

/* ------------------------------------------------------------
   TRADUCTOR CONDICIONAL
   ------------------------------------------------------------ */

let stringUno = "perro"; // lo que el usuario "ingresa"

switch (stringUno) {
    case "casa":
        console.log("house");
        break;
    case "perro":
        console.log("dog");
        break;
    case "pelota":
        console.log("ball");
        break;
    case "árbol":
        console.log("tree");
        break;
    case "genio":
        console.log("genius");
        break;
    default:
        console.log("La palabra ingresada es incorrecta.");
}


/* ------------------------------------------------------------
   VALORACIÓN DE PELÍCULAS
   ------------------------------------------------------------ */

let valoracion = "Muy buena"; // lo que el usuario "ingresa"
let valoracionValida = true;

switch (valoracion.toLowerCase()) {
    case "muy mala":
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    case "mala":
        console.log("Calificaste la película como Mala. Lamentamos que no te haya gustado.");
        break;
    case "mediocre":
        console.log("Calificaste la película como Mediocre. Esperamos que la próxima te guste más.");
        break;
    case "buena":
        console.log("Calificaste la película como Buena. ¡Nos alegra que la hayas disfrutado!");
        break;
    case "muy buena":
        console.log("Calificaste la película como Muy Buena. ¡Nos alegra muchísimo!");
        break;
    default:
        console.log("Ingresaste un valor inválido");
        valoracionValida = false;
}

// Solo se agradece cuando el usuario realmente valoró la película
if (valoracionValida) {
    console.log("¡Gracias por tu visita!");
}
