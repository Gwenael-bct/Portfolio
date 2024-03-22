// Sélectionnez le pied de page
var footer = document.querySelector('.footer');

// Fonction pour contrôler la visibilité du pied de page en fonction du défilement de la page
function toggleFooterVisibility() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Si l'utilisateur est en bas de la page, affichez le pied de page
        footer.style.display = 'block';
    } else {
        // Sinon, masquez le pied de page
        footer.style.display = 'none';
    }
}

// Écoutez l'événement de défilement de la page et appelez la fonction toggleFooterVisibility
window.addEventListener('scroll', toggleFooterVisibility);

// Appelez la fonction toggleFooterVisibility lorsque la page se charge pour gérer l'état initial
window.addEventListener('load', toggleFooterVisibility);


// Fonction pour afficher ou masquer le bouton en fonction du défilement de la page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Si la position de défilement est supérieure à 20 pixels, affichez le bouton
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Fonction pour remonter en haut de la page lorsque le bouton est cliqué
function topFunction() {
    document.body.scrollTop = 0; // Pour les navigateurs Safari
    document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}
