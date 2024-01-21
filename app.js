//JUEGO DE PUNTUACION

let points = 100;
let resultado = ["4", "6", "9" ,"18", "50"];
let notifGanaste = "Excelente, ganaste 20 puntos";
let notifPerdiste = "Te has equivocado, mala suerte";

alert("Resuelve las operaciones y gana 100 puntos para ganar");
//primer operacion
let ej1 = prompt("Cuanto es 2 + 2?");
console.log(ej1);
if (resultado.includes(ej1)) {
    alert(notifGanaste);
    ej1 = 20;
} else {
    alert(notifPerdiste);
    ej1 = 0;
}
//segunda operacion
let ej2 = prompt("Cuanto es 2 x 3?");
console.log(ej2);
if (resultado.includes(ej2)) {
    alert(notifGanaste);
    ej2 = 20;
} else {
    alert(notifPerdiste);
    ej2 = 0;
}
//tercer operacion
let ej3 = prompt("Cuanto es 2 + 4 + 3?");
console.log(ej3);
if (resultado.includes(ej3)) {
    alert(notifGanaste);
    ej3 = 20;
} else {
    alert(notifPerdiste);
    ej3 = 0;
}
//cuarta operacion
let ej4 = prompt("Cuanto es 36 - 12 - 6?");
console.log(ej4);
if (resultado.includes(ej4)) {
    alert(notifGanaste);
    ej4 = 20;
} else {
    alert(notifPerdiste);
    ej4 = 0;
}
//quinta operacion
let ej5 = prompt("Cuanto es 10 + 10 + 15 + 15 - 25 +25?");
console.log(ej5);
if (resultado.includes(ej5)) {
    alert(notifGanaste);
    ej5 = 20;
} else {
    alert(notifPerdiste);
    ej5 = 0;
}
if (points == (ej1 + ej2 + ej3 + ej4 + ej5)) {
    alert("Felicidades ganaste 100 puntos");
} else {
    alert("Perdiste, intentalo nuevamente: press F5");
}