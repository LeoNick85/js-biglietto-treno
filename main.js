//Richiedo età del viaggiatore, assicurandomi che inserisca un valore intero
var eta = 0;

do {
    eta = prompt("Inserisci la tua età:");
    if (isNaN(eta)) {
        alert("Non hai inserito un numero. Riprova inserendo un dato corretto");
    }
    console.log(eta);
}
while (isNaN(eta));

document.getElementById('eta').innerHTML = eta;

//Richiedo numero di chilometri da percorrere
var chilometri = 0;

do {
    chilometri = prompt("Inserisci i chilometri che intendi percorrere:");
    if (isNaN(chilometri)) {
        alert("Non hai inserito un numero. Riprova inserendo un dato corretto");
    }
    console.log(chilometri);
}
while (isNaN(chilometri));

document.getElementById('chilometri').innerHTML = chilometri;

//Verifico se il viaggiatore è minorenne o Over 65
var costo_viaggio = 0;
var tariffakm = 0.21;
var sconto = 0;

if (eta < 18) {
    sconto = 20;
    document.getElementById('sconto').innerHTML = sconto + "%";
}
else if (eta >= 65) {
    sconto = 40;
    document.getElementById('sconto').innerHTML = sconto + "%";
}
else {
    document.getElementById('sconto').innerHTML = "Nessuno sconto"
}

console.log(sconto);

//Calcolo il costo del viaggio e lo stampo a video

if (sconto != 0) {
    costo_viaggio = (((chilometri * tariffakm) * (100 - sconto)) / 100);

} else {
    costo_viaggio = chilometri * tariffakm;
}

console.log(costo_viaggio);

document.getElementById('costo').innerHTML = costo_viaggio.toFixed(2);
document.getElementById('tariffa').innerHTML = tariffakm + "€/km";
