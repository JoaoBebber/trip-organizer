import type { Metadata } from 'next'

import Sidebar from '@/components/Sidebar'

import { inter } from './fonts'
import styles from './layout.module.css'

import './globals.css'

export const metadata: Metadata = { title: 'Trip Organizer' }

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
