'use client'

import Link from 'next/link'
import { Button } from '../components/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <svg viewBox="0 0 24 24" className="h-full w-full text-white">
                <path 
                  fill="currentColor" 
                  d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"
                />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-bold text-white">R.A.S.A.D.</span>
          </Link>
          
          <nav className={`md:flex items-center space-x-4 md:space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-black bg-opacity-90 p-4' : 'hidden md:flex'}`}>
            <Link href="/search" className="text-gray-300 hover:text-white transition-colors py-2 md:py-0">
              Search Flights
            </Link>
            <Link href="/bookings" className="text-gray-300 hover:text-white transition-colors py-2 md:py-0">
              My Bookings
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors py-2 md:py-0">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <Button className="text-white border-white hover:bg-white hover:text-black">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Button>
                </Link>
                <Button onClick={handleLogout} className="bg-white text-black hover:bg-gray-100">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button className="text-white border-white hover:bg-white hover:text-black">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    Register
                  </Button>
                </Link>
              </>
            )}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

