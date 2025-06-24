/**
 * Chargeur optimisé pour AOS (Animate On Scroll)
 */

/**
 * Initialise AOS de manière optimisée
 */
export function initAOSOptimized() {
  // Fonction pour charger AOS
  function loadAOS() {
    // Si AOS est déjà chargé
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false
      });
      return;
    }
    
    // Charger le CSS d'AOS de manière asynchrone
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/_astro/aos.DvB2Xm2x.css'; // Ajustez le chemin si nécessaire
    document.head.appendChild(link);
    
    // Charger le script AOS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'; // Utiliser CDN ou chemin local
    script.async = true;
    script.onload = () => {
      // Initialiser AOS une fois chargé
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          mirror: false
        });
      }
    };
    document.body.appendChild(script);
  }
  
  // Charger AOS après le chargement initial de la page
  if (document.readyState === 'complete') {
    setTimeout(loadAOS, 200);
  } else {
    window.addEventListener('load', () => {
      setTimeout(loadAOS, 200);
    });
  }
}

/**
 * Préinitialise les éléments AOS avec des styles de base
 * pour éviter les sauts de contenu
 */
export function preInitAOSElements() {
  const aosElements = document.querySelectorAll('[data-aos]');
  aosElements.forEach(el => {
    // Appliquer des styles de base pour éviter les sauts
    el.style.opacity = '0';
    
    // Observer l'élément pour l'animer même sans AOS
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transition = 'opacity 0.8s ease-out-cubic';
            el.style.transform = 'translateY(0)';
          }, 100);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(el);
  });
}