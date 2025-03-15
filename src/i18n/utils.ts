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
  // Si c'est la page d'accueil
  if (pathname === '/' || pathname === '/fr' || pathname === '/en') {
    return `/${lang}`;
  }
  
  // Si c'est déjà une URL avec langue, remplacer la partie langue
  if (pathname.match(/^\/(fr|en)\//)) {
    return pathname.replace(/^\/(fr|en)\//, `/${lang}/`);
}
  
  // Si c'est une URL de jeu sans préfixe de langue
  if (pathname.match(/^\/games\//)) {
    return `/${lang}${pathname}`;
  }
  
  // Sinon, ajouter le préfixe de langue
  return `/${lang}${pathname}`;
}