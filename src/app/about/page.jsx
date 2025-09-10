'use client';

import Link from 'next/link';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function About() {
  return (
    <div className='flex flex-col justify-start h-full w-full mt-3 mb-8 text-center gap-4 pb-6 px-20 leading-5'>
      <Link
        href='/'
        className='flex hover:underline justify-start align-middle text-xs gap-2 text-tertiary'
      >
        <MdKeyboardBackspace className='text-lg' />
        Home Page
      </Link>
      <div className='w-full border-t-1 border-b-1 border-disabled flex justify-start align-middle py-4'>
        <p className='text-3xl font-medium'>
          Montserrat / <span className='font-bold italic'>About</span>
        </p>
      </div>

      <div className='flex flex-col justify-start xl:mr-40 lg:mr-40 md:mr-30 pt-2'>
        <p className='text-left text-xs font-medium'>
          Designed by: Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral,
          Jacques Le Bailly.
        </p>
        <br />

        <p className='text-justify text-[11px] font-medium'>
          The old posters and signs in the traditional Montserrat neighborhood
          of Buenos Aires inspired Julieta Ulanovsky to design this typeface and
          rescue the beauty of urban typography that emerged in the first half
          of the twentieth century. As urban development changes that place, it
          will never return to its original form and loses forever the designs
          that are so special and unique. The letters that inspired this project
          have work, dedication, care, color, contrast, light and life, day and
          night! These are the types that make the city look so beautiful. The
          Montserrat Project began with the idea to rescue what is in Montserrat
          and set it free under a libre license, the SIL Open Font License.
          <br />
          <br />
          This is the normal family, and it has two sister families so far,
          Alternates and Subrayada. Many of the letterforms are special in the
          Alternates family, while 'Subrayada' means 'Underlined' in Spanish and
          celebrates a special style of underline that is integrated into the
          letterforms found in the Montserrat neighborhood.
          <br />
          <br />
          Updated November 2017: The family was redrawn by Jacques Le Bailly at
          Baron von Fonthausen over the summer, and the full set of weights were
          adjusted to make the Regular lighter and better for use in longer
          texts. In fall, Julieta Ulanovsky, Sol Matas, and Juan Pablo del
          Peral, led the development of Cyrillic support, with consultation with
          Carolina Giovagnoli, Maria Doreuli, and Alexei Vanyashin.
          <br />
          <br />
          The Montserrat project is led by Julieta Ulanovsky, a type designer
          based in Buenos Aires, Argentina. To contribute, see
          github.com/JulietaUla/Montserrat
        </p>
      </div>

      <div className='flex justify-end text-[11px] underline pb-4 font-medium'>
        <Link href='/license' className='justify-right'>
          See license
        </Link>
      </div>
    </div>
  );
}
