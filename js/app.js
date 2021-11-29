let name =  [
    "Angélique ",
    "le dragon ",
    "le chat ",
    "la tortue ",
    "Godzilla ",
];

let article =  [
    "en carrosse ",
    "un gâteau ",
    "son chapeau pointu ",
    "la citrouille ",
    "en balai ",
];

let temperature =  [
    "gelé ",
    "tiéde ",
    "brûlant ",
    "glacé ",
    "chaud ",
];

let verb = [
    "se promène ",
    "joue ",
    "travaille ",
    "mange ",
    "crache ",
];


let places = [
    "à Fourmies ",
    "dans le jardin ",
    "partout dans le monde ",
    "dehors ",
    "à la maison ",
];

let user_name = document.getElementById("user_name");
document.getElementById("history").addEventListener("click", function () {
    document.querySelector("p").innerHTML += user_name.value + "," + " " + choice(name) + " " +  choice(article)
        + " " + choice(temperature) + " " + choice(verb) + " " + choice(places) + "<br>";
})

function choice(stories) {
    let random = Math.floor(Math.random() * stories.length) ;
    return stories[random];
}






