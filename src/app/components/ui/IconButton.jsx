'use client';
import { useEffect, useState } from 'react';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export default function IconButton({ onClick, children, ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    isVisible && (
      <div className='fixed z-20 bottom-8 sm:bottom-8 right-4 animate-fadeInBounce'>
        <button
          onClick={handleScrollToTop}
          className='p-2 rounded border-2 border-foreground bg-background text-foregroundhover:text-accent hover:border-accent hover:text-accent dark:text-secondary transition-colors duration-200 hover:scale-110 active:scale-95'
        >
          <MdOutlineKeyboardArrowUp />
        </button>
      </div>
    )
  );
}
