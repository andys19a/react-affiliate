'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/css/Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  const close = () => setOpen(false)

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) close()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <header className="header">
      <nav className="nav" ref={navRef}>
        <Link href="/" className="logo-link" onClick={close}>
          <Image
            src="/images/logo.png"
            alt="ProfitPlay – value betting guide och resultat"
            className="logo"
            width={160}
            height={45}
            priority
          />
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          aria-controls="nav-list"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul id="nav-list" className={`nav-list${open ? ' open' : ''}`}>
          <li><Link href="/" onClick={close}>Hem</Link></li>
          <li><Link href="/kategori" onClick={close}>Kategorier</Link></li>
          <li><Link href="/results" onClick={close}>Resultat</Link></li>
          <li><Link href="/start" onClick={close}>Kom igång</Link></li>
          <li><Link href="/recension" onClick={close}>Recension</Link></li>
          <li><Link href="/blogg" onClick={close}>Blogg</Link></li>
          <li><Link href="/faq" onClick={close}>FAQ</Link></li>
        </ul>
      </nav>
    </header>
  )
}
