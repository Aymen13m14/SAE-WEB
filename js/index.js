
document.getElementById('themeselector').addEventListener('click', () => {
    
    
    let themeLink = document.getElementById('themelink');
    let imageLogo = document.getElementById("Triply_dark"); 
    let currentTheme = themeLink.getAttribute('href');

  
    if (currentTheme.includes('sombre')) {
       
        themeLink.href = '../css/claire.css'; 
        
      
        imageLogo.src = '../image/Triply.png';

    } else {
        
        themeLink.href = '../css/sombre.css';
        
      
        imageLogo.src = '../image/Triply_dark.png'; 
    }
});

