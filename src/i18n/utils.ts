import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPathname(pathname: string, lang: string) {
  // Si c'est la langue par défaut (français) et la page d'accueil, 
  // on retourne simplement "/" pour garder l'URL propre
  if (lang === defaultLang && (pathname === '/' || pathname === '/fr' || pathname === '/en')) {
    return '/';
  }
  
  // Si c'est une autre langue que le français, on ajoute le préfixe de langue
  if (lang !== defaultLang && (pathname === '/' || pathname === '/fr' || pathname === '/en')) {
    return `/${lang}`;
  }
  
  // Si c'est déjà une URL avec préfixe de langue
  if (pathname.match(/^\/(fr|en)\//)) {
    // Si on passe à la langue par défaut (français), on enlève le préfixe
    if (lang === defaultLang) {
      return pathname.replace(/^\/(fr|en)\//, '/');
    }
    // Sinon on remplace juste le préfixe de langue
    return pathname.replace(/^\/(fr|en)\//, `/${lang}/`);
  }
  
  // Si c'est une URL sans préfixe de langue
  if (!pathname.match(/^\/(fr|en)\//)) {
    // Si on est déjà en français (langue par défaut), on garde l'URL sans préfixe
    if (lang === defaultLang) {
      return pathname;
    }
    // Sinon on ajoute le préfixe de langue
    const cleanPath = pathname.startsWith('/') ? pathname.substring(1) : pathname;
    return `/${lang}/${cleanPath}`;
  }
  
  // Cas par défaut
  return pathname;
}