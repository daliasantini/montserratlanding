'use client';

import Link from 'next/link';
import { useState } from 'react';

import toast from 'react-hot-toast';

import { MdKeyboardBackspace } from 'react-icons/md';
import ToggleSwitch from '../components/ui/ToggleSwitch';

export default function Glyphs() {
  const [copiedChar, setCopiedChart] = useState(null);
  const [fontAlternates, setFontAlternates] = useState(false);

  const unicodeRange = Array.from({ length: 300 }, (_, i) =>
    String.fromCharCode(i + 64)
  );

  async function handleCopy(char) {
    try {
      await navigator.clipboard.writeText(char);
      setCopiedChart(char);
      setTimeout(() => setCopiedChart(null), 1000);
      toast.success(`Copied  "${char}"`);
    } catch (err) {
      toast.error('Failed to copy element');
    }
  }

  return (
    <div className='flex flex-col h-full w-full mt-3 mb-8 text-center gap-4 pb-6 px-20 leading-5'>
      <Link
        href='/'
        className='flex hover:underline justify-start align-middle text-xs gap-2 text-tertiary'
      >
        <MdKeyboardBackspace className='text-lg' />
        Home Page
      </Link>
      <div className='w-full border-t-1 border-b-1 border-disabled flex justify-start align-middle py-4'>
        <p className='text-3xl font-medium'>
          Montserrat / <span className='font-bold italic'>Glyphs</span>
        </p>
      </div>

      <div className='flex flex-col pt-2 pb-2'>
        <p className='text-left text-xs font-medium'></p>
        <ToggleSwitch
          type='checkbox'
          checked={fontAlternates}
          onChange={() => setFontAlternates((prev) => !prev)}
        />
      </div>

      <div
        className='grid grid-cols-4 sm:grid-cols-12 gap-1 text-xl'
        style={{
          fontFamily: fontAlternates ? 'Montserrat Alternates' : 'Montserrat',
        }}
      >
        {unicodeRange.map((char, index) => (
          <div
            key={index}
            className='text-center p-1 rounded border-2 border-foreground bg-background text-foregroundhover:text-accent hover:border-accent hover:text-accent dark:text-secondary cursor-pointer transition-colors duration-200 hover:scale-110 active:scale-95'
            onClick={() => handleCopy(char)}
          >
            {char}
          </div>
        ))}
      </div>

      <div className='flex justify-end text-[11px] underline pb-4 font-medium'>
        <Link href='/license' className='justify-right'>
          See license
        </Link>
      </div>
    </div>
  );
}
