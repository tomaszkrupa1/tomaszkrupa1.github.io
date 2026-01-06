"use client"
import React, { useState, useEffect } from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-poppins',
})
import Link from 'next/link'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClasses = `
        ${isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'}
        flex justify-center items-center
        bg-white
        transition-all duration-300 z-30
    `
    const headerClasses = `
        ${poppins.className}
        ${isScrolled ? 'text-xl' : 'text-6xl'}
        font-extrabold
        tracking-tight
        transition-all duration-300
    `

    return (
        <nav className={navClasses}>
            <Link href="/">
                <span className={headerClasses}>KRUPA®</span>
            </Link>
        </nav>
    )
}

export default Navbar