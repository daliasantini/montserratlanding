export default function Footer() {
  return (
    <footer className='flex justify-center items-center text-xs text-tertiary h-16 px-4 border-t pt-1 pb-2'>
      <p>
        {' '}
        Developed by{' '}
        <span>
          <a
            href='https://www.behance.net/gallery/234517427/Portfolio-2025-Front-End-Design'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-accent transition-colors duration-150'
          >
            Dalia Santini
          </a>
        </span>{' '}
        © 2025
      </p>
    </footer>
  );
}
