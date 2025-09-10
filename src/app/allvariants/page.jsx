'use client';

import Link from 'next/link';

import { MdKeyboardBackspace } from 'react-icons/md';
import VariantCard from '../components/ui/VariantCard';

import { variants } from '../data/variants';

import { useState } from 'react';
import SizeSlider from '../components/ui/SizeSlider';
import ToggleSwitch from '../components/ui/ToggleSwitch';

export default function AllVariants() {
  const [fontSize, setFontSize] = useState(28);
  const [fontAlternates, setFontAlternates] = useState(false);
  const [fontWeight, setFontWeight] = useState(500);

  const activeFont = fontAlternates ? 'Montserrat Alternates' : 'Montserrat';

  function handleToggle(e) {
    setFontAlternates(e.target.checked);
  }

  return (
    <div className='flex flex-col justify-start h-full w-full mt-3 mb-8 text-center gap-4 pb-6 px-20'>
      <Link
        href='/'
        className='flex hover:underline justify-start align-middle text-xs gap-2 text-tertiary'
      >
        <MdKeyboardBackspace className='text-lg' />
        Home Page
      </Link>

      <div className='w-full border-t-1 border-b-3 border-t-disabled flex justify-start align-middle py-4'>
        <p className='text-3xl font-medium'>
          Montserrat / <span className='font-bold italic'>All variants</span>
        </p>
      </div>

      <div className='my-3 grid grid-cols-1 sm:grid-cols-2 gap-2 justify-around'>
        <SizeSlider
          label='Font Size'
          value={fontSize}
          name='fontSize'
          type='range'
          min={8}
          max={72}
          step={1}
          onChange={setFontSize}
        />

        <ToggleSwitch
          label='Montserrat Alternates'
          name='fontToggle'
          checked={fontAlternates}
          onChange={handleToggle}
          
        />
      </div>

      <div className='flex flex-col w-full justify-start xl:mr-40 lg:mr-40 md:mr-30 pt-2'>
        {variants.map((variant) => (
          <VariantCard
            key={variant.id}
            name={variant.name}
            weight={variant.weight}
            size={fontSize}
            fontFamily={activeFont}
            description={variant.description}
            sample={variant.sample}
            property={variant.property}
          />
        ))}
      </div>
    </div>
  );
}
