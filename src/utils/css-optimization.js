/**
 * Utilitaire pour optimiser le chargement des ressources CSS
 */

// Fonction pour charger dynamiquement un fichier CSS
export function loadCSS(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Impossible de charger ${href}`));
    document.head.appendChild(link);
  });
}

// Fonction pour précharger un fichier CSS
export function preloadCSS(href) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  document.head.appendChild(link);
}

// Fonction pour charger les CSS non critiques de manière différée
export function loadDeferredCSS(cssFiles) {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      cssFiles.forEach(href => loadCSS(href));
    });
  } else {
    window.addEventListener('load', () => {
      cssFiles.forEach(href => loadCSS(href));
    });
  }
}