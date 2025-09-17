'use client';

import { useEffect, useState } from 'react';
import { MdWbSunny, MdBrightness2 } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setIsDark(newTheme === 'dark');
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded border-2 border-foreground bg-background text-foreground 
             hover:border-accent hover:text-accent 
             dark:bg-none dark:text-foreground
             transition-colors duration-200 cursor-pointer
             hover:scale-110 active:scale-95'
      aria-label='Toggle theme'
    >
      {isDark ? <MdWbSunny /> : <MdBrightness2 />}
    </button>
  );
}
