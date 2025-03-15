import { getCollection } from 'astro:content';
import { defaultLang } from './ui';

// Récupérer le contenu dans la langue spécifiée ou dans la langue par défaut
export async function getLocalizedContent(collection, slug, lang) {
  const allContent = await getCollection(collection);
  
  // Chercher d'abord le contenu dans la langue demandée
  const localizedContent = allContent.find(
    (item) => item.slug === slug && item.data.language === lang
  );
  
  if (localizedContent) {
    return localizedContent;
  }
  
  // Si le contenu n'existe pas dans la langue demandée, chercher par translationKey
  const defaultContent = allContent.find(
    (item) => item.slug === slug && item.data.language === defaultLang
  );
  
  if (defaultContent && defaultContent.data.translationKey) {
    const translatedContent = allContent.find(
      (item) => 
        item.data.translationKey === defaultContent.data.translationKey && 
        item.data.language === lang
    );
    
    if (translatedContent) {
      return translatedContent;
    }
  }
  
  // Retourner le contenu dans la langue par défaut si aucune traduction n'est trouvée
  return defaultContent;
}

// Récupérer tous les slugs uniques pour un type de contenu
export async function getAllUniqueContentSlugs(collection) {
  const allContent = await getCollection(collection);
  const uniqueSlugs = new Set();
  
  allContent.forEach((item) => {
    uniqueSlugs.add(item.slug);
  });
  
  return Array.from(uniqueSlugs);
}