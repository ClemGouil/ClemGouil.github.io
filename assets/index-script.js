document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    setLanguage('fr');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}

let currentLanguage = 'fr';

function setLanguage(lang) {
    document.querySelectorAll('[data-lang-fr]').forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });

    // Mettre à jour le drapeau
    const flag = document.getElementById('language-flag');
    if (lang === 'fr') {
        flag.src = 'Images/france.png';
        flag.alt = 'Français';
    } else {
        flag.src = 'Images/united-kingdom.png';
        flag.alt = 'English';
    }

    currentLanguage = lang;
}

function toggleLanguage() {
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
}

