let kills = 0;
let deaths = 0;
let draw = 0;

function computersMove() {
   let randInt = Math.floor(Math.random()*3)
   if (randInt === 0){
      return "Snake"
    }
    if (randInt === 1){
        return "Raiden"
    }
    if (randInt === 2){
        return "Monsoon"
    }
}
function score(result) {
    if (result === "kills") {
    kills = kills + 1;
    document.getElementById("kills").innerHTML = kills;
    }
    if (result === "deaths") {
        deaths = deaths + 1;
        document.getElementById("deaths").innerHTML = deaths;
    }
    if (result === "draw") {
        draw  = draw + 1;
        document.getElementById("draws").innerHTML = draw;
    }
}
function onClickSnake(){
    let cm = computersMove();
    if (cm === "Snake") {
        score("draw");
        alert("You ran into Snake, that means you tied!");
    }
    if (cm === "Raiden") {
        score("deaths");
        alert("You ran into Raiden, that means you died!");
    }
    if (cm === "Monsoon") {
        score("kills")
        alert("You ran into Monsoon, that means you have a kill!")
    }
}
function onClickRaiden() {
    let cm = computersMove();
    if (cm === "Snake") {
        score("draw");
        alert("You ran into Snake, that means you tied!");
    }
    if (cm === "Raiden") {
        score("deaths");
        alert("You ran into Raiden, that means you died!");
    }
    if (cm === "Monsoon") {
        score("kills")
        alert("You ran into Monsoon, that means you have a kill!")
    }
}

function onClickMonsoon() {
    let cm = computersMove();
    if (cm === "Snake") {
        score("draw");
        alert("You ran into Snake, that means you tied!");
    }
    if (cm === "Raiden") {
        score("deaths");
        alert("You ran into Raiden, that means you died!");
    }
    if (cm === "Monsoon") {
        score("kills")
        alert("You ran into Monsoon, that means you have a kill!")
    }
}

document.getElementById("Snake").onclick = onClickSnake;
document.getElementById("Raiden").onclick = onClickRaiden;
document.getElementById("Monsoon").onclick = onClickMonsoon;
