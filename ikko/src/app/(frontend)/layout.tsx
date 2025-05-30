import React from 'react'
import './styles.css'
import Header from './components/Header'

export const metadata = {
  description: 'Velkommen til IKKO, din side for alt',
  title: 'IKKO',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
