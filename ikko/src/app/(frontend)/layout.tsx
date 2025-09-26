import React from 'react'
import './styles.css'
import { Matemasie } from 'next/font/google'

const matem = Matemasie({
  subsets: ['latin'],
  weight: ['400'], // eller flere om tilgjengelig
})
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="no">
      <body>
        <nav className="bg-white shadow-2xs">
          <div className="flex space-x-4 p-5 text-xl ">
              <a href="#" className="text-blue-700 !important hover:text-black">ikko</a>
              <a href="#" className="text-black hover:text-blue-700">hjem</a>
              <a href="#" className="text-black hover:text-blue-700">oppskrifter</a>
              <a href="#" className="text-black hover:text-blue-700">info</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
