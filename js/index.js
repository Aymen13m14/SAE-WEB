/* =========================================
   GESTION DU THÈME (CLAIR / SOMBRE)
   ========================================= */
document.getElementById('themeselector').addEventListener('click', () => {
    let themeLink = document.getElementById('themelink');
    let currentTheme = themeLink.getAttribute('href');
    
    // Détection : est-on dans un sous-dossier (html/) ou à la racine ?
    // Si on est dans un sous-dossier, on remonte d'un cran (../css/)
    // Sinon, on va direct dans (css/)
    let cssPrefix = window.location.pathname.includes('html/') ? '../css/' : 'css/';

    if (currentTheme.includes('sombre')) {
        // On utilise la variable cssPrefix pour avoir le bon chemin
        themeLink.href = cssPrefix + 'claire.css'; 
        // Changement du texte du bouton (optionnel mais sympa)
        document.getElementById('themeselector').textContent = "Passer en mode sombre";
    } else {
        themeLink.href = cssPrefix + 'sombre.css';
        document.getElementById('themeselector').textContent = "Passer en mode clair";
    }
});

/* =========================================
   GESTION DE LA BARRE DE RECHERCHE
   ========================================= */
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function effectuerRecherche() {
    const destination = searchInput.value.toLowerCase().trim();

    // Calcul du chemin pour les liens HTML
    // Si on est déjà dans le dossier "html/", on écrit juste "japon.html"
    // Si on est à l'accueil, on écrit "html/japon.html"
    let htmlPrefix = window.location.pathname.includes('html/') ? '' : 'html/';

    // --- CONDITIONS ---

    // 1. JAPON
    if (destination.includes('japon') || destination.includes('tokyo') || destination.includes('osaka') || destination.includes('okinawa')) {
        window.location.href = htmlPrefix + 'japon.html';
    } 
    // 2. ESPAGNE
    else if (destination.includes('espagne') || destination.includes('madrid') || destination.includes('barcelone') || destination.includes('séville') || destination.includes('seville')) {
        window.location.href = htmlPrefix + 'espagne.html';
    } 
    // 3. MAROC
    else if (destination.includes('maroc') || destination.includes('fès') || destination.includes('fes') || destination.includes('casablanca')) {
        window.location.href = htmlPrefix + 'maroc.html';
    } 
    // 4. INCONNU
    else {
        alert("Désolé, nous n'avons pas encore cette destination en catalogue (essayez Japon, Espagne ou Maroc) !");
    }
}

// Déclencheurs (Click + Entrée)
if(searchBtn) {
    searchBtn.addEventListener('click', effectuerRecherche);
}

if(searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            effectuerRecherche();
        }
    });
}