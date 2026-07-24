const sortie = document.querySelector("#sortie");
function afficher(html) {
sortie.innerHTML += html;
}

afficher(`<p class="resultat">Votre IMC est de <strong>22.5</strong></p>`);

