// Variables globales
var omScore = 0;
var psgScore = 0;
var tireGauge = 0;
var timer = 0;
var gameDuration = 2 * 60 * 1000; // Durée du match en millisecondes (2 minutes)
var gaugeInterval = 100; // Intervalle de temps pour la jauge de tir en millisecondes

// Fonction pour générer un nombre entier aléatoire entre min et max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction appelée à intervalle régulier pour mettre à jour la jauge de tir
function updateTireGauge() {
    tireGauge = getRandomInt(0, 1000);
    document.getElementById("tire-gauge").textContent = tireGauge;
}

// Fonction pour afficher le score des équipes
function updateScores() {
    document.getElementById("om-score").textContent = omScore;
    document.getElementById("psg-score").textContent = psgScore;
}

// Fonction pour afficher le temps écoulé
function updateTimer() {
    var minutes = Math.floor(timer / 60000).toString().padStart(2, "0");
    var seconds = Math.floor((timer % 60000) / 1000).toString().padStart(2, "0");
    document.getElementById("timer").textContent = minutes + ":" + seconds;
}

// Fonction appelée lors du clic sur le ballon
function handleBallonClick() {
    if (tireGauge % 2 === 0) {
        omScore++;
    } else {
        psgScore++;
    }

    updateScores();
}

// Fonction pour rediriger vers la page fin.html
function redirectToFinPage() {
    window.location.href = "fin.html";
}

// Fonction pour recommencer le jeu
function restartGame() {
    window.location.href = "index.html";
}

// Appel initial des fonctions
updateScores();
updateTimer();

// Gestion de l'intervalle pour la jauge de tir
setInterval(updateTireGauge, gaugeInterval);

// Gestion du temps écoulé
var interval = setInterval(function() {
    timer += 1000;
    updateTimer();

    if (timer >= gameDuration) {
        clearInterval(interval);
        redirectToFinPage();
    }
}, 1000);
