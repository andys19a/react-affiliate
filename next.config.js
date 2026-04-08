/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/blog/1',  destination: '/blogg/vad-ar-value-betting',              permanent: true },
      { source: '/blog/2',  destination: '/blogg/hitta-value-bets-steg-for-steg',    permanent: true },
      { source: '/blog/3',  destination: '/blogg/rebelbetting-recension-2025',        permanent: true },
      { source: '/blog/4',  destination: '/blogg/hur-rebelbetting-fungerar',          permanent: true },
      { source: '/blog/5',  destination: '/blogg/bankroll-management',                permanent: true },
      { source: '/blog/6',  destination: '/blogg/undvika-limitering-spelbolag',       permanent: true },
      { source: '/blog/10', destination: '/blogg/risk-vs-beloning-i-betting',         permanent: true },
      { source: '/blog/11', destination: '/blogg/vanliga-misstag-value-betting',      permanent: true },
      { source: '/blog/12', destination: '/blogg/langsiktig-strategi-value-betting',  permanent: true },
      { source: '/blog/13', destination: '/blogg/hur-mycket-tjana-value-betting',     permanent: true },
      { source: '/blog/14', destination: '/blogg/varians-bettingresultat',            permanent: true },
      { source: '/blog/15', destination: '/blogg/ev-expected-value-betting',          permanent: true },
      { source: '/blog/17', destination: '/blogg/bankroll-management-skydda-kassa',   permanent: true },
      { source: '/blog/18', destination: '/blogg/varfor-de-flesta-forlorar-betting',  permanent: true },
      { source: '/blog/19', destination: '/blogg/value-betting-vs-sure-betting',      permanent: true },
      { source: '/blog/20', destination: '/blogg/konsekvent-lonsam-betting-rutin',    permanent: true },
      { source: '/blog',        destination: '/blogg',        permanent: true },
      { source: '/blog/:slug*', destination: '/blogg/:slug*', permanent: true },
    ]
  },
}

module.exports = nextConfig
