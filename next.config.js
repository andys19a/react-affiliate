/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/blog/1',  destination: '/blog/vad-ar-value-betting',              permanent: true },
      { source: '/blog/2',  destination: '/blog/hitta-value-bets-steg-for-steg',    permanent: true },
      { source: '/blog/3',  destination: '/blog/rebelbetting-recension-2025',        permanent: true },
      { source: '/blog/4',  destination: '/blog/hur-rebelbetting-fungerar',          permanent: true },
      { source: '/blog/5',  destination: '/blog/bankroll-management',                permanent: true },
      { source: '/blog/6',  destination: '/blog/undvika-limitering-spelbolag',       permanent: true },
      { source: '/blog/10', destination: '/blog/risk-vs-beloning-i-betting',         permanent: true },
      { source: '/blog/11', destination: '/blog/vanliga-misstag-value-betting',      permanent: true },
      { source: '/blog/12', destination: '/blog/langsiktig-strategi-value-betting',  permanent: true },
      { source: '/blog/13', destination: '/blog/hur-mycket-tjana-value-betting',     permanent: true },
      { source: '/blog/14', destination: '/blog/varians-bettingresultat',            permanent: true },
      { source: '/blog/15', destination: '/blog/ev-expected-value-betting',          permanent: true },
      { source: '/blog/17', destination: '/blog/bankroll-management-skydda-kassa',   permanent: true },
      { source: '/blog/18', destination: '/blog/varfor-de-flesta-forlorar-betting',  permanent: true },
    ]
  },
}

module.exports = nextConfig
