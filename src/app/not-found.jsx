'use client';

export default function NotFound() {
  function handleClick() {
    window.location.href = '/';
  }

  return (
    <div className='flex flex-col h-[78vh] overflow-hidden w-full items-center justify-center text-center gap-4 px-10 lg:px-20'>
      <p className='text-8xl/6 font-bold text-foreground pb-5'>404</p>
      <p className='mt-4 text-foreground text-xl/4 font-bold pb-5'>
        Page Not Found
      </p>

      <hr className='border-t-1 w-full pt-6'></hr>

      <p className='text-foreground text-md/2 pb-2'>
        Sorry, we couldn’t find this page.
      </p>
      <button
        onClick={handleClick}
        className='px-6 py-2 uppercase bg-background text-foreground text-[11px] font-semibold rounded border-2 border-foreground cursor-pointer hover:bg-foreground hover:text-background transition-all duration-150 focus:bg-accent focus:text-white focus:border-accent'
      >
        Go back to Home Page
      </button>
    </div>
  );
}
