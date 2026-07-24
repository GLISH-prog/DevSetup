const sortie = document.querySelector("#sortie");

function afficher(imc) {
    sortie.innerHTML += `
        <div class="carte-imc ${imc.classe}">
            ${imc.resultat}
        </div>
    `;
}

function calculerIMC(poids, taille) {
    let imc = poids / (taille * taille);

    if (imc < 18.5) {
        return {
            resultat: "Maigreur",
            classe: "maigreur"
        };
    } else if (imc < 25) {
        return {
            resultat: "Normal",
            classe: "normal"
        };
    } else if (imc < 30) {
        return {
            resultat: "Surpoids",
            classe: "surpoids"
        };
    } else {
        return {
            resultat: "Obésité",
            classe: "obesite"
        };
    }
}

afficher(calculerIMC(50,1.75));
afficher(calculerIMC(70,1.75));
afficher(calculerIMC(90,1.75));
afficher(calculerIMC(110,1.75));
