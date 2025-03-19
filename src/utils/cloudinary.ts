/**
 * Génère une URL Cloudinary optimisée
 * @param imageName Nom de l'image (sans chemin)
 * @param folder Dossier dans Cloudinary (optionnel)
 * @param options Options de transformation
 * @returns URL Cloudinary complète
 */
export function getCloudinaryUrl(
  imageName: string,
  folder: string = 'game-images',
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'avif' | 'png' | 'jpg';
    crop?: 'fill' | 'scale' | 'fit' | 'limit';
    gravity?: 'auto' | 'center' | 'face' | 'faces' | 'north' | 'south' | 'east' | 'west';
  } = {}
) {
  // Si le nom de l'image est vide ou undefined
  if (!imageName) {
    return '';
  }
  
  // Si l'image est déjà une URL Cloudinary, la retourner telle quelle
  if (imageName.includes('res.cloudinary.com')) {
    return imageName;
  }
  
  // Nettoyer le nom de l'image (enlever les chemins)
  const cleanImageName = imageName.split('/').pop() || imageName;
  
  // Valeurs par défaut
  const defaults = {
    width: 800,
    height: 600,
    quality: 80,
    format: 'auto',
    crop: 'fill',
  };

  // Fusionner les options avec les valeurs par défaut
  const opts = { ...defaults, ...options };

  // Construire les transformations
  let transformations = [
    `w_${opts.width}`,
    `h_${opts.height}`,
    `c_${opts.crop}`,
    `q_${opts.quality}`,
    `f_${opts.format}`,
  ];
  
  // Ajouter gravity si spécifié
  if (opts.gravity) {
    transformations.push(`g_${opts.gravity}`);
  }
  
  const transformString = transformations.join(',');

  // Construire l'URL complète
  return `https://res.cloudinary.com/da68srujg/image/upload/${transformString}/${folder}/${cleanImageName}`;
}

/**
 * Extrait le nom de fichier d'une image à partir de différents formats
 * @param imagePath Chemin ou objet d'image
 * @returns Nom du fichier ou null si non trouvé
 */
export function getImageFilename(imagePath: any): string | null {
  if (!imagePath) return null;
  
  // Si c'est une chaîne de caractères
  if (typeof imagePath === 'string') {
    // Ignorer les URLs Cloudinary
    if (imagePath.includes('res.cloudinary.com')) return null;
    
    // Extraire le nom de fichier
    const parts = imagePath.split('/');
    return parts[parts.length - 1];
  }
  
  // Si c'est un objet avec une propriété src
  if (imagePath.src) {
    if (typeof imagePath.src === 'string') {
      const parts = imagePath.src.split('/');
      return parts[parts.length - 1];
    }
    // Pour les objets d'image importés par Astro
    if (imagePath.src.src) {
      const parts = imagePath.src.src.split('/');
      return parts[parts.length - 1];
    }
  }
  
  return null;
}

/**
 * Crée un objet d'image compatible avec les composants Astro
 * @param imagePath Chemin ou objet d'image d'origine
 * @param folder Dossier Cloudinary
 * @param options Options de transformation
 * @returns Objet d'image compatible avec les composants Astro
 */
export function createOptimizedImageObject(
  imagePath: any,
  folder: string = 'game-images',
  options = {}
): any {
  // Si l'image est null ou undefined, retourner null
  if (!imagePath) return null;
  
  // Si c'est déjà un objet d'image avec src
  if (typeof imagePath === 'object' && imagePath.src) {
    const filename = getImageFilename(imagePath);
    
    // Si on ne peut pas extraire le nom du fichier, retourner l'objet original
    if (!filename) return imagePath;
    
    // Créer un nouvel objet avec la même structure mais avec src optimisé
    return {
      ...imagePath,
      src: getCloudinaryUrl(filename, folder, options)
    };
  }
  
  // Si c'est une chaîne de caractères
  if (typeof imagePath === 'string') {
    const filename = getImageFilename(imagePath);
    
    // Si on ne peut pas extraire le nom du fichier, retourner la chaîne originale
    if (!filename) return imagePath;
    
    // Retourner une URL Cloudinary
    return getCloudinaryUrl(filename, folder, options);
  }
  
  // Si on ne peut pas traiter l'image, retourner l'entrée originale
  return imagePath;
}