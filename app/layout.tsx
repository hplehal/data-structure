import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from './NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Structure | Tej Learning',
  description: 'Learning different concepts of data structure in the prespective of Tej Lehal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavMenu/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
