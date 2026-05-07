'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Testimonios', href: '#testimonials' },
]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-16 w-auto"
              />
              <span className="font-serif text-2xl font-bold text-primary">
                SkinLaser <span className="text-secondary">&</span> Beauty
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary">
              Solicitá tu turno
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-secondary hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary w-full mt-4">
              Solicitá tu turno
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}