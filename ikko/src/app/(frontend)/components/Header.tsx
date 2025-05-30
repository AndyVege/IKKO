// app/layout.tsx
import config from '@/payload.config'

import '../styles.css'

// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">🧶 Min Nettbutikk</Link>
      <nav className="space-x-4">
        <p>Heisann</p>
        <Link href="/produkter">Produkter</Link>
        <Link href="/om">Om oss</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  )
}
