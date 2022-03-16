//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Wen Día";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Wenas tardes";
} else {
    elSaludo = "Wenas noshes";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

var x;
var y;

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        x = Math.round(random(0,1)*10);
        portada();
    } else {
        y = Math.round(random(0,1)*10);
        pagina();
    }
}

function portada() {
    console.log(x);
    createSpan(" ¿Sabía usted que " + starWars.results[x].name + " nació el año " + starWars.results[x].birth_year + "?" ).parent("contenido");
    select("a:nth-child(1)").style("color", "#FFE213");
}
function pagina() {
    console.log(y);
    createSpan(" ¿Sabía usted que " + starWars.results[y].name + " tiene los ojitos de color " + starWars.results[y].eye_color + "?").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFE213");
}