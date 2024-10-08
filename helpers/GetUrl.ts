const basePath = process.env.SPA_EXP_BASEPATH || '';
const basePathEndsWithSlash = basePath.endsWith('/')

export default function GetUrl(path: string): string {
  let finalPath;
  if (basePathEndsWithSlash || path.startsWith('/')) {
    finalPath = `${basePath}${path}`
  } else {
    finalPath = `${basePath}/${path}`
  }

  return finalPath;
}
