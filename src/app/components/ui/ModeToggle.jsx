'use client';

import { useEffect, useState } from 'react';
import { MdWbSunny, MdBrightness2 } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

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
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded border-2 border-foreground text-foreground hover:text-accent hover:border-accent dark:text-secondary transition-colors duration-200 cursor-pointer hover:scale-110 active:scale-95'
    >
      {isDark ? <MdWbSunny /> : <MdBrightness2 />}
    </button>
  );
}
