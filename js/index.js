
document.getElementById('themeselector').addEventListener('click', () => {
    
    
    let themeLink = document.getElementById('themelink');
    let imageLogo = document.getElementById("Triply_dark"); 
    let currentTheme = themeLink.getAttribute('href');

  
    if (currentTheme.includes('sombre')) {
       
        themeLink.href = '../css/claire.css'; 
        
      
       

    } else {
        
        themeLink.href = '../css/sombre.css';
        
      
        
    }
});

// 1. On sélectionne les éléments HTML
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// 2. La fonction qui fait la redirection
function effectuerRecherche() {
    // On récupère la valeur et on la met en minuscules (pour éviter les erreurs de majuscules)
    const destination = searchInput.value.toLowerCase().trim();

    // 3. Les conditions de redirection
    // Si l'utilisateur tape "japon", "tokyo", "osaka" ou "okinawa"
    if (destination.includes('japon') || destination.includes('tokyo') || destination.includes('osaka') || destination.includes('okinawa')) {
        window.location.href = 'html/japon.html';
    } 
    // Si l'utilisateur tape "espagne", "madrid", "barcelone" ou "séville"
    else if (destination.includes('espagne') || destination.includes('madrid') || destination.includes('barcelone') || destination.includes('séville') || destination.includes('seville')) {
        window.location.href = 'html/espagne.html';
    } 
    // Si l'utilisateur tape "maroc", "fès", "casablanca" ou "chefchaouen"
    else if (destination.includes('maroc') || destination.includes('fès') || destination.includes('fes') || destination.includes('casablanca')) {
        window.location.href = 'html/maroc.html';
    } 
    // Si on ne reconnait pas la destination
    else {
        alert("Désolé, nous n'avons pas encore cette destination en catalogue (essayez Japon, Espagne ou Maroc) !");
    }
}

// 4. On déclenche la recherche quand on clique sur le bouton
searchBtn.addEventListener('click', effectuerRecherche);

// 5. On déclenche AUSSI la recherche quand on appuie sur la touche "Entrée"
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        effectuerRecherche();
    }
});