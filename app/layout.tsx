"use client"

import './globals.css'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/next';

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { JokeOfTheDay } from '@/components/joke-of-the-day'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Provider store={store}>
      <ClerkProvider >
        <html lang="en" suppressHydrationWarning>
          <body className={`${inter.className} min-h-screen bg-cover bg-center`} style={{ backgroundImage: 'url(herogradient.png)' }}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-40 w-full border-b backdrop-blur ">
                  <div className="container flex justify-between items-center h-16 mx-auto sm:justify-between sm:space-x-0 px-1">
                    <div className="flex gap-6 md:gap-10">
                      <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.png" width={50} height={50} alt="MindAI Logo"  />
                        <span className="inline-block font-bold text-xl">MindAI</span>
                      </Link>
                      <nav className="flex gap-6">
                        <Link href="/" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/') ? 'border-b-2 border-primary' : ''}`}>
                          Home
                        </Link>
                        <Link href="/dashboard" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/dashboard') ? 'border-b-2 border-primary' : ''}`}>
                          Dashboard
                        </Link>
                        <Link href="/input" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/input') ? 'border-b-2 border-primary' : ''}`}>
                          Check-In
                        </Link>
                        <Link href="/chatbot" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/chatbot') ? 'border-b-2 border-primary' : ''}`}>
                          AI Chat
                        </Link>
                        <Link href="/questionnaire" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/questionnaire') ? 'border-b-2 border-primary' : ''}`}>
                          Questionnaire
                        </Link>
                        <Link href="/calendar" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/calendar') ? 'border-b-2 border-primary' : ''}`}>
                          Calendar
                        </Link>
                        <Link href="/meditation" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/meditation') ? 'border-b-2 border-primary' : ''}`}>
                          Meditation
                        </Link>
                        <Link href="/mini-games" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/mini-games') ? 'border-b-2 border-primary' : ''}`}>
                          Mini Games
                        </Link>
                        <Link href="/events" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/events') ? 'border-b-2 border-primary' : ''}`}>
                          Events
                        </Link>
                        <Link href="/helpline" className={`flex items-center text-sm font-medium text-muted-foreground hover:text-primary ${isActive('/helpline') ? 'border-b-2 border-primary' : ''}`}>
                          Helpline
                        </Link>
                      </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4 px-1">
                      <nav className="flex items-center space-x-1">
                        <ModeToggle />
                      </nav>
                    </div>
                    <div className='flex items-center justify-end px-1'>
                      <SignedOut>
                        <SignInButton mode='modal'>
                          <Button variant="outline">
                            Sign In
                          </Button >
                        </SignInButton>
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </div>
                  </div>
                </header>

                <main className="flex-1">
                  <div className="container max-w-7xl mx-auto h-full pt-6 md:pt-12 pb-16">
                    {children}
                    <Analytics />
                  </div>
                </main>

                <footer className="py-6 md:px-8 md:py-0">
                  <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                      Built with care by MindAI. Always seek professional help in crisis situations.
                    </p>
                  </div>
                </footer>
              </div>
              <JokeOfTheDay />
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </Provider>
  )
}
