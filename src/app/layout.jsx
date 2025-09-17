import './globals.css';

import { Toaster } from 'react-hot-toast';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import IconButton from './components/ui/IconButton';

export const metadata = {
  title: 'Montserrat Font',
  description: 'A website to introduce the Montserrat sans-serif typeface',
  icons: {
    icon: '/text-svgrepo-com.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col scroll-smooth bg-background text-foreground dark:bg-foreground dark:text-background'>
        <IconButton></IconButton>
        <Navbar />
        <main className='flex-grow h-auto mt-20 overflow-y-hidden overflow-x-hidden px-4 sm:px-10 md:px-20 lg:px-32 xl:px-32 max-w-screen-xl mx-auto flex flex-col'>
          <Toaster
            position='top-right'
            toastOptions={{ duration: 2000 }}
          ></Toaster>
          {children}
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
}
