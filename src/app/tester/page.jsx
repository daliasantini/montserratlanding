'use client';

import Link from 'next/link';
import { useState } from 'react';

import { MdKeyboardBackspace } from 'react-icons/md';
import TesterBox from '../components/ui/TesterBox';
import SliderBar from '../components/ui/SliderBar';
import SizeSlider from '../components/ui/SizeSlider';
import SliderControl from '../components/ui/SliderControl';

export default function Tester() {
  const [fontWeight, setFontWeight] = useState(500);
  const [fontSize, setFontSize] = useState(14);
  const [lineHeight, setLineHeight] = useState(145);
  const [letterSpacing, setLetterSpacing] = useState(0);

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
          Montserrat / <span className='font-bold italic'>Tester</span>
        </p>
      </div>

      <div className='grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-4 pt-4'>
        <div className='w-full grid-cols-1 gap-5'>
          <SliderControl
            label='Font weight'
            value={fontWeight}
            name='fontWeight'
            type='range'
            min={100}
            max={900}
            step={100}
            onChange={(val) => setFontWeight(val)}
          >
            %
          </SliderControl>

          <SliderControl
            label='Font size'
            value={fontSize}
            name='fontSize'
            type='range'
            min={8}
            max={72}
            step={1}
            onChange={(val) => setFontSize(val)}
          >
            px
          </SliderControl>


          <SliderControl
            label='Line height'
            value={lineHeight}
            name='lineHeight'
            type='range'
            min={125}
            max={235}
            step={10}
            onChange={(val) => setLineHeight(val)}
          >%</SliderControl>

           <SliderControl
            label='Letter spacing'
            value={letterSpacing}
            name='letterSpacing'
            type='range'
            min={0}
            max={2.5}
            step={.25}
            onChange={(val) => setLetterSpacing(val)}
          >px</SliderControl>


        </div>
        <div className='place-items-end'>
          <TesterBox
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
          ></TesterBox>
        </div>
      </div>
    </div>
  );
}
