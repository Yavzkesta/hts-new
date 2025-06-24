/**
 * Utilitaire pour gérer le chargement optimisé des CSS
 */

/**
 * Charge une feuille de style de manière asynchrone
 * @param {string} href - URL de la feuille de style
 * @param {string} strategy - Stratégie de chargement ('preload', 'async', 'defer')
 */
export function loadCSS(href, strategy = 'preload') {
  // Éviter les doublons
  if (document.querySelector(`link[href="${href}"]`)) {
    return;
  }

  const link = document.createElement('link');
  
  switch (strategy) {
    case 'preload':
      // Préchargement avec conversion en stylesheet
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
      };
      break;
      
    case 'async':
      // Chargement asynchrone (non bloquant)
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      setTimeout(() => {
        link.media = 'all';
      }, 0);
      break;
      
    case 'defer':
      // Chargement différé après le chargement de la page
      link.rel = 'stylesheet';
      link.href = href;
      break;
      
    default:
      link.rel = 'stylesheet';
      link.href = href;
  }
  
  document.head.appendChild(link);
  return link;
}

/**
 * Charge les CSS non-critiques après le chargement de la page
 * @param {Array<string>} stylesheets - Liste des URLs des feuilles de style à charger
 * @param {string} strategy - Stratégie de chargement
 */
export function loadNonCriticalCSS(stylesheets, strategy = 'preload') {
  // Fonction pour charger les feuilles de style
  const loadStylesheets = () => {
    stylesheets.forEach(href => loadCSS(href, strategy));
  };
  
  // Charger après le contenu principal
  if (document.readyState === 'complete') {
    setTimeout(loadStylesheets, 100);
  } else {
    window.addEventListener('load', () => {
      setTimeout(loadStylesheets, 100);
    });
  }
}

/**
 * Supprime les liens CSS existants pour les remplacer par des versions optimisées
 * @param {Array<string>} patterns - Motifs à rechercher dans les URLs
 */
export function replaceExistingCSSLinks(patterns) {
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && patterns.some(pattern => href.includes(pattern))) {
      // Stocker l'URL pour la charger plus tard
      const url = link.href;
      // Supprimer le lien existant
      link.parentNode.removeChild(link);
      // Retourner l'URL pour un usage ultérieur
      return url;
    }
  });
}