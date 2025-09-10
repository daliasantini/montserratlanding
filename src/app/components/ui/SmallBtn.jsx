'use client';

export default function SmallBtn({ onClick, children, ...props }) {
  return (
    <button
      className='flex justify-center align-middle p-1 text-lg w-7 h-7 rounded border-2 border-foreground bg-background text-foregroundhover:text-accent hover:border-accent hover:text-accent dark:text-secondary transition-colors duration-200 active:scale-95 animate-fadeInBounce'
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
