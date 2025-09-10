'use client';

import { useState } from 'react';
import SliderBar from './components/ui/SliderBar';
import ToggleSwitch from './components/ui/ToggleSwitch';
import Link from 'next/link';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

export default function Home() {
  const [fontWeight, setFontWeight] = useState(500);
  const [fontAlternates, setFontAlternates] = useState(false);

  return (
    <div className='flex flex-col h-[78vh] overflow-hidden w-full items-center justify-center text-center gap-10 px-10 lg:px-20'>
      <h1
        style={{
          fontFamily: fontAlternates ? 'Montserrat Alternates' : 'Montserrat',
          fontWeight,
          
        }}
        className='text-6xl md:text-8xl lg:text-8xl xl:text-8xl transition-all duration-100 antialiased'
      >
        Montserrat.
      </h1>

      <div className='flex flex-col sm:flex-row justify-between items-center pb-2 gap-4 w-full max-w-xl'>
        <SliderBar
          label='Font weight'
          value={fontWeight}
          name='fontWeight'
          type='range'
          min={100}
          max={900}
          step={100}
          onChange={(val) => setFontWeight(val)}
        />

        <ToggleSwitch
          type='checkbox'
          checked={fontAlternates}
          onChange={() => setFontAlternates((prev) => !prev)}
        />
      </div>

      <div className='w-full max-w-lg border-t border-tertiary pt-6'>
        <ul className='text-forefround text-xs font-medium flex flex-row justify-around items-center gap-2'>
          <li className='hover:underline hover:font-medium hover:text-accent transition-colors duration-100'>
            <Link
              href='https://fonts.google.com/specimen/Montserrat'
              target='_blank'
              rel='noopener noreferrer'
            >
              Use font
            </Link>
          </li>
          <li className='hover:underline hover:font-medium hover:text-accent transition-colors duration-100'>
            <Link href='/about'>About the font</Link>
          </li>
          <li className='hover:underline hover:font-medium hover:text-accent transition-colors duration-100'>
            <Link href='/allvariants' className='flex flex-row justify-center'>
              See all variants{' '}
              <span className='text-lg pl-1'>
                {' '}
                <MdOutlineArrowRightAlt />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
