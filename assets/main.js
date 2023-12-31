function countdown() {
    // Obtenir la date et l'heure actuelles
    var now = new Date();

    // Définir la date et l'heure de minuit
    var midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    // Calculer la différence en secondes
    var difference = Math.floor((midnight - now) / 1000);

    // Mettre à jour l'affichage
    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = difference   +'     s';

    if (difference < 0) {
        countdownElement.innerHTML = "Bonne Année 2024  "
    }

    // Mettre à jour toutes les 1000 millisecondes (1 seconde)
    setTimeout(countdown, 1000);
}

countdown();