import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Navbar from './components/navigation/navbar'
import Navigation from './components/navigation'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from './components/navigation/navbar/Button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kamzac - Generic web application starter kit',
  description: 'Kamzac is a generic web application starter kit. It allows you to start a new project with a modern stack and best practices in minutes. Kamzac enables you to focus on your application and not on the tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-slate-50 dark:bg-[#171717] `}  suppressHydrationWarning={true}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
     
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
        {children}
        <ThemeSwitcher />

        </Suspense>
      </ThemeProvider>
      </body>
    </html>
  )
}
