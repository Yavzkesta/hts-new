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
  } = {}
) {
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
  const transformations = [
    `w_${opts.width}`,
    `h_${opts.height}`,
    `c_${opts.crop}`,
    `q_${opts.quality}`,
    `f_${opts.format}`,
  ].join(',');

  // Construire l'URL complète
  return `https://res.cloudinary.com/da68srujg/image/upload/${transformations}/v1/${folder}/${imageName}`;
}