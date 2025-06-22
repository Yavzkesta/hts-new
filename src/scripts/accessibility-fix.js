// Script global pour corriger l'accessibilité des boutons de navigation
// Ce script doit être inclus dans toutes les pages

document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour détecter la langue de la page
  function detectLanguage() {
    const htmlLang = document.documentElement.lang;
    if (htmlLang && htmlLang.startsWith('fr')) {
      return 'fr';
    }
    return 'en';
  }

  // Textes d'accessibilité selon la langue
  const lang = detectLanguage();
  const prevText = lang === 'fr' ? 'Article précédent' : 'Previous article';
  const nextText = lang === 'fr' ? 'Article suivant' : 'Next article';

  // Fonction pour rendre un bouton accessible
  function makeButtonAccessible(buttonId, label) {
    // Sélectionner le bouton par son ID
    const button = document.getElementById(buttonId);
    if (!button) return;

    // Ajouter l'attribut aria-label
    button.setAttribute('aria-label', label);
    
    // Vérifier si un span.sr-only existe déjà
    let srSpan = Array.from(button.children).find(child => 
      child.tagName === 'SPAN' && (child.classList.contains('sr-only') || child.style.position === 'absolute')
    );
    
    // Si non, créer et ajouter le span
    if (!srSpan) {
      srSpan = document.createElement('span');
      srSpan.className = 'sr-only';
      srSpan.textContent = label;
      
      // Appliquer les styles directement au cas où la classe sr-only ne serait pas disponible
      srSpan.style.position = 'absolute';
      srSpan.style.width = '1px';
      srSpan.style.height = '1px';
      srSpan.style.padding = '0';
      srSpan.style.margin = '-1px';
      srSpan.style.overflow = 'hidden';
      srSpan.style.clip = 'rect(0, 0, 0, 0)';
      srSpan.style.whiteSpace = 'nowrap';
      srSpan.style.border = '0';
      
      button.appendChild(srSpan);
    }
    
    // Marquer les icônes SVG comme décoratives
    const svg = button.querySelector('svg');
    if (svg) {
      svg.setAttribute('aria-hidden', 'true');
    }
  }

  // Appliquer les corrections aux boutons de navigation
  makeButtonAccessible('prev-btn', prevText);
  makeButtonAccessible('next-btn', nextText);
  
  // Observer les changements dans le DOM pour appliquer les corrections aux nouveaux éléments
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const node = mutation.addedNodes[i];
          if (node.id === 'prev-btn') {
            makeButtonAccessible('prev-btn', prevText);
          } else if (node.id === 'next-btn') {
            makeButtonAccessible('next-btn', nextText);
          }
        }
      }
    });
  });
  
  // Observer le document entier pour les changements
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});