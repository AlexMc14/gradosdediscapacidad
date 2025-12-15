const siteUrl = 'https://gradosdediscapacidad.es';

/**
 * Genera la URL canónica completa
 */
export function getCanonicalURL(path: string): string {
  // Asegurar que el path comienza con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

/**
 * Trunca el texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Genera meta description óptima
 */
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  return truncateText(text, maxLength);
}

/**
 * Genera slug desde un título
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Descomponer caracteres con acentos
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/--+/g, '-') // Múltiples guiones a uno solo
    .trim();
}

/**
 * Formatea fecha para schema.org (ISO 8601)
 */
export function formatSchemaDate(date: Date): string {
  return date.toISOString();
}

/**
 * Extrae excerpt de un texto
 */
export function getExcerpt(content: string, maxLength: number = 200): string {
  // Eliminar markdown básico
  const plainText = content
    .replace(/#{1,6}\s/g, '') // headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // bold
    .replace(/\*(.+?)\*/g, '$1') // italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // links
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/`(.+?)`/g, '$1'); // inline code

  return truncateText(plainText.trim(), maxLength);
}
