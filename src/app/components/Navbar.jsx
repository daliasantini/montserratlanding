'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

import { MdMenu, MdClose } from 'react-icons/md';
import ModeToggle from './ui/ModeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow.hidden');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }),
    [];

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/allvariants', label: 'All variants' },
    { href: '/glyphs', label: 'Glyphs' },
    { href: '/tester', label: 'Tester' },
    { href: '/license', label: 'License' },
  ];

  return (
    <nav className='fixed top-0 w-full bg-background border-b z-50 sm:pr-0 md:pr-9 lg:pr-25'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-center'>
          <div className='absolute inset-y-0 left-0 sm:hidden'>
            <button
              type='button'
              aria-controls='mobile-menu'
              aria-expanded={mobileMenuOpen}
              className='relative flex items-center justify-center mt-5 ml-8 text-foreground hover:text-accent cursor-pointer'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>

          <div className='flex flex-1 justify-center'>
            <Link
              className='hover:text-accent transition-colors duration-200 text-sm text-center justify-center font-extrabold'
              href='/'
              onClick={() => setMobileMenuOpen(false)}
            >
              Montserrat font.
            </Link>
          </div>

          <div className='hidden sm:flex space-x-4'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 text-xs hover:text-accent  transition-colors duration-200 ${
                    isActive
                      ? 'text-accent font-black italic'
                      : 'text-foreground font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className='ml-4'>
            <ModeToggle />
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            ref={navRef}
            id='mobile-menu'
            className='h-[90vh] pt-4 overflow-hidden  sm:hidden flex flex-col mt-3 gap-4'
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 text-xs hover:text-accent hover:font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent font-black italic'
                      : 'text-foreground font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
