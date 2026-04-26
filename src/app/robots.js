export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.profitplay.se/sitemap.xml',
    host: 'https://www.profitplay.se',
  }
}
