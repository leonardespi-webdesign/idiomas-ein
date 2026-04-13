/**
 * Prepends the Astro base URL to any internal absolute path.
 * External URLs (http/https/mailto/tel/#) are returned unchanged.
 *
 * Usage:  url('/cursos')  →  '/IEIN/cursos'  (when base = '/IEIN/')
 *         url('/')        →  '/IEIN/'
 */
const base = import.meta.env.BASE_URL; // always ends with "/"

export function url(path: string): string {
  if (
    !path ||
    path.startsWith('http') ||
    path.startsWith('//') ||
    path.startsWith('#') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }
  const clean = path.replace(/^\//, '');
  return clean ? `${base}${clean}` : base;
}
