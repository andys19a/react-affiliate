import Link from 'next/link'

export const metadata = {
  title: 'Sidan hittades inte – ProfitPlay',
  description: 'Sidan du söker finns inte. Gå tillbaka till startsidan eller bläddra bland våra guider om value betting.',
}

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '5rem', margin: '0', lineHeight: 1 }}>404</h1>
      <h2 style={{ marginTop: '1rem' }}>Sidan hittades inte</h2>
      <p style={{ color: '#666', margin: '1rem 0 2rem' }}>
        Sidan du söker verkar inte finnas. Den kan ha flyttats eller tagits bort.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ padding: '0.75rem 1.5rem', background: '#1a1a2e', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          Tillbaka till startsidan
        </Link>
        <Link href="/blogg" style={{ padding: '0.75rem 1.5rem', background: '#f0f0f0', color: '#1a1a2e', borderRadius: '6px', textDecoration: 'none' }}>
          Bläddra guider
        </Link>
        <Link href="/start" style={{ padding: '0.75rem 1.5rem', background: '#f0f0f0', color: '#1a1a2e', borderRadius: '6px', textDecoration: 'none' }}>
          Kom igång
        </Link>
      </div>
    </div>
  )
}
