'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DynamicNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximately viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed z-50 flex w-full py-3 px-6 md:px-8 top-0 left-0 items-center justify-between transition-all duration-500 ${
        isScrolled 
          ? 'text-neutral-900 bg-white/95 backdrop-blur-lg border-b border-neutral-200/50 shadow-sm' 
          : 'text-neutral-100 bg-black/10 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="flex items-center gap-3">
        <Image 
          src="/logo/logo.png" 
          alt="Rizq Sistas Logo" 
          width={48} 
          height={48} 
          className="w-12 h-12"
        />
        <span className="font-medium tracking-tight text-lg hidden md:block">
          <Link href="/">Rizq Sistas</Link>
        </span>
      </div>
      
      <nav className="hidden md:flex space-x-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
        <Link 
          href="#" 
          className={`pb-1 transition-all duration-200 ${
            isScrolled 
              ? 'hover:text-black hover:border-b hover:border-neutral-300' 
              : 'hover:text-white hover:border-b hover:border-white/30'
          }`}
        >
          Philosophy
        </Link>
        <Link 
          href="#" 
          className={`pb-1 transition-all duration-200 ${
            isScrolled 
              ? 'hover:text-black hover:border-b hover:border-neutral-300' 
              : 'hover:text-white hover:border-b hover:border-white/30'
          }`}
        >
          Values
        </Link>
        <Link 
          href="#" 
          className={`pb-1 transition-all duration-200 ${
            isScrolled 
              ? 'hover:text-black hover:border-b hover:border-neutral-300' 
              : 'hover:text-white hover:border-b hover:border-white/30'
          }`}
        >
          Events
        </Link>
      </nav>
      
      <Link 
        href="#" 
        className="text-[11px] font-medium tracking-[0.2em] uppercase flex items-center gap-2 group text-[#C25E30]"
      >
        Join Rizq Sistas
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </header>
  );
}